// tiny utilities
const get = (obj, path) =>
    path.split('.').reduce((o, k) => (o && o[k] != null) ? o[k] : undefined, obj);

window.__renderSite = async function () {
    // 1) Load site.json (single source of truth)
    const res = await fetch('/assets/site.json', { cache: 'no-store' });
    const site = await res.json();

    // Build a quick index for socials by id (github, x, email, etc.)
    const socials = Array.isArray(site.social) ? site.social : [];
    const socialById = Object.fromEntries(socials.map(s => [s.id, s]));

    // 2) Bind simple text nodes: [data-bind="site.title"]
    document.querySelectorAll('[data-bind]').forEach(el => {
        const val = get({ site, ...site }, el.getAttribute('data-bind'));
        if (val != null) el.textContent = String(val);
    });

    // 3) Bind hrefs to plain paths (not socials array): [data-href="site.projects.links.url"]
    document.querySelectorAll('[data-href]').forEach(el => {
        const val = get({ site, ...site }, el.getAttribute('data-href'));
        if (val) el.setAttribute('href', val);
    });

    // 4) Join arrays: [data-join="profile.badges" data-join-sep=" "]
    document.querySelectorAll('[data-join]').forEach(el => {
        const arr = get({ site, ...site }, el.getAttribute('data-join'));
        const sep = el.getAttribute('data-join-sep') ?? ', ';
        if (Array.isArray(arr)) el.textContent = arr.join(sep);
    });

    // 5) Social links list
    const list = document.getElementById('social-list');
    if (list && socials.length) {
        list.innerHTML = socials.map(s => `
      <li class="page-social">
        <a class="social-icon-anchor"
           href="${s.url}"
           rel="me noopener nofollow"
           target="_blank"
           aria-label="${s.label}">
          ${s.icon ? `<span aria-hidden="true">${s.icon}</span>` : ''}
          ${s.icon ? `<span class="sr-only">${s.label}</span>` : s.label}
        </a>
      </li>
    `).join('');
    }

    // 6) Direct social targets for single buttons
    //    Example usage in HTML: <a class="btn" data-social="github">GitHub</a>
    document.querySelectorAll('[data-social]').forEach(el => {
        const id = el.getAttribute('data-social');
        const s = socialById[id];
        if (!s) return;
        el.setAttribute('href', s.url);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener nofollow');
        if (el.hasAttribute('data-social-icon') && s.icon) {
            el.innerHTML = `${s.icon}<span class="sr-only">${s.label}</span>`;
        }
    });

    // 7) Year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
};