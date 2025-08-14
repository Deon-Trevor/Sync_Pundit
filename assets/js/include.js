// /assets/js/include.js
(async function () {
    const slots = [...document.querySelectorAll('[data-include]')];

    await Promise.all(slots.map(async el => {
        const url = el.getAttribute('data-include');
        if (!url) return;
        const r = await fetch(url, { cache: 'no-store' });
        el.innerHTML = r.ok ? await r.text() : `<!-- include failed: ${url} -->`;
    }));

    // tell listeners partials are in the DOM
    window.dispatchEvent(new CustomEvent('partials:ready'));

    // render data (if present)
    if (typeof window.__renderSite === 'function') {
        try { await window.__renderSite(); } catch { }
    }

    // everything’s ready
    window.dispatchEvent(new CustomEvent('site:ready'));
    if (!r.ok) {
        console.warn(`include failed: ${url} (${r.status})`);
        el.innerHTML = `<!-- include failed: ${url} -->`;
    }

})();
