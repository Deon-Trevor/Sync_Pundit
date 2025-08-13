// /assets/js/github.js
(function () {
  // Run after DOM is parsed (script is loaded with `defer`)
  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    const list = document.getElementById("recent-list");
    const powered = document.querySelector('[data-social="github"]');
    if (!list) return;

    // Skeleton handling
    const done = (html) => {
      const skel = document.getElementById("recent-skel");
      if (skel) skel.remove();
      list.setAttribute("aria-busy", "false");
      if (html) list.innerHTML = html;
    };

    try {
      const site = await loadSiteJson();
      const { url: ghUrl, username } = getGithubFromSite(site) || {};
      if (powered && ghUrl) powered.href = ghUrl;
      const user = username || extractUsername(ghUrl);
      if (!user) return done(`<li class="muted">GitHub username not found in site.json.</li>`);

      const token = (document.querySelector('meta[name="github-token"]') || {}).content;
      const events = await fetchEvents(user, token);

      const items = mapNotable(events).slice(0, 6);
      if (!items.length) return done(`<li class="muted">No recent public activity.</li>`);

      done(items.map(toLi).join(""));

    } catch (err) {
      done(`<li class="muted">Couldn’t load GitHub activity (${escapeHTML(err.message || err)}).</li>`);
    }
  }

  // ---- data loading ----
  async function loadSiteJson() {
    const candidates = ["/assets/site.json", "/data/site.json", "/site.json"];
    for (const url of candidates) {
      try {
        const r = await fetch(url, { cache: "no-store" });
        if (r.ok) return await r.json();
      } catch { }
    }
    throw new Error("site.json not found");
  }

  function getGithubFromSite(site) {
    if (!site || !site.social) return null;
    const entries = Array.isArray(site.social)
      ? site.social
      : Object.entries(site.social).map(([id, v]) => ({ id, ...(typeof v === "string" ? { url: v } : v) }));

    // Accept id=github OR label=GitHub
    const gh = entries.find(x =>
      String(x.id || x.label || "").toLowerCase() === "github"
    );
    if (!gh) return null;
    return { url: gh.url, username: gh.username };
  }

  async function fetchEvents(username, token) {
    const url = `https://api.github.com/users/${encodeURIComponent(username)}/events/public`;
    const headers = {
      "Accept": "application/vnd.github+json",
      ...(token ? { "Authorization": `Bearer ${token}` } : {})
    };
    const res = await fetch(url, { headers });
    if (!res.ok) {
      if (res.status === 403) throw new Error("rate-limited");
      throw new Error(`GitHub ${res.status}`);
    }
    return res.json();
  }

  // ---- mapping / rendering ----
  function mapNotable(events) {
    const out = [];
    for (const ev of events) {
      const type = ev.type;
      const repo = ev.repo?.name;
      const when = timeAgo(ev.created_at);

      if (type === "PushEvent" && ev.payload?.commits?.length) {
        const n = ev.payload.commits.length;
        out.push({
          icon: "⬆️",
          text: `pushed ${n} commit${n > 1 ? "s" : ""} to ${repo}`,
          url: `https://github.com/${repo}/commits`,
          when
        });
      } else if (type === "PullRequestEvent" && ev.payload?.pull_request) {
        const pr = ev.payload.pull_request;
        out.push({
          icon: pr.merged_at ? "✅" : ev.payload.action === "opened" ? "📝" : "🔁",
          text: `${ev.payload.action} PR #${pr.number} in ${repo}: ${truncate(pr.title, 90)}`,
          url: pr.html_url,
          when
        });
      } else if (type === "IssuesEvent" && ev.payload?.issue) {
        const is = ev.payload.issue;
        out.push({
          icon: ev.payload.action === "opened" ? "🐞" : "🛠️",
          text: `${ev.payload.action} issue #${is.number} in ${repo}: ${truncate(is.title, 90)}`,
          url: is.html_url,
          when
        });
      } else if (type === "ReleaseEvent" && ev.payload?.release) {
        const rel = ev.payload.release;
        out.push({
          icon: "🚀",
          text: `released ${rel.tag_name} on ${repo}`,
          url: rel.html_url,
          when
        });
      } else if (type === "CreateEvent" && ev.payload?.ref_type === "repository") {
        out.push({
          icon: "✨",
          text: `created repo ${repo}`,
          url: `https://github.com/${repo}`,
          when
        });
      } else if (type === "ForkEvent" && ev.payload?.forkee) {
        out.push({
          icon: "🌿",
          text: `forked ${repo} → ${ev.payload.forkee.full_name}`,
          url: ev.payload.forkee.html_url,
          when
        });
      } else if (type === "WatchEvent") {
        out.push({
          icon: "⭐",
          text: `starred ${repo}`,
          url: `https://github.com/${repo}`,
          when
        });
      }
    }
    // de-dup noisy items
    const seen = new Set();
    return out.filter(i => {
      const k = i.text + "|" + i.url;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  function toLi(item) {
    return `<li><a href="${item.url}" target="_blank" rel="noopener">${item.icon} ${escapeHTML(item.text)}</a> <span class="muted">• ${item.when}</span></li>`;
  }

  // ---- utils ----
  function extractUsername(url) {
    if (!url) return null;
    try {
      const u = new URL(url);
      const seg = u.pathname.split("/").filter(Boolean);
      return seg[0] || null;
    } catch { return null; }
  }

  function timeAgo(iso) {
    const d = new Date(iso).getTime();
    const s = Math.max(1, Math.floor((Date.now() - d) / 1000));
    const steps = [
      [60, "s"], [60, "m"], [24, "h"],
      [7, "d"], [4.348, "w"], [12, "mo"], [Number.POSITIVE_INFINITY, "y"]
    ];
    let val = s, unit = "s";
    for (const [k, u] of steps) { if (val < k) break; val = Math.floor(val / k); unit = u; }
    return `${val}${unit} ago`;
  }

  function truncate(str, n) { return (str || "").length > n ? str.slice(0, n - 1) + "…" : str || ""; }
  function escapeHTML(s) { return String(s || "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])); }
})();
