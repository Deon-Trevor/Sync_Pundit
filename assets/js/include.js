// Fetch partials into [data-include] and then load site data.
(async function () {
    const includes = Array.from(document.querySelectorAll('[data-include]'));
    await Promise.all(includes.map(async el => {
        const url = el.getAttribute('data-include');
        const res = await fetch(url, { cache: 'no-store' });
        el.outerHTML = await res.text();
    }));

    // After partials are in, kick data rendering.
    window.__renderSite && window.__renderSite();
    window.dispatchEvent(new Event('partials:ready'));
})();
