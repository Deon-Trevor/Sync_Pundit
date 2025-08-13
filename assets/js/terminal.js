// /assets/js/terminal.js
(function () {
    const KEY = 'sp-theme';
    const THEMES = ['glass', 'green'];

    const getStored = () => {
        try { return localStorage.getItem(KEY); } catch { return null; }
    };
    const setStored = (v) => {
        try { localStorage.setItem(KEY, v); } catch { }
    };

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const THEME_COLORS = {
        glass: '#0b0f14', // dark glass bg
        green: '#0a120a'  // terminal green bg
    };

    function apply(theme) {
        const t = THEMES.includes(theme) ? theme : THEMES[0];
        document.body.setAttribute('data-theme', t);
        setStored(t);

        const btn = document.getElementById('themeToggle');
        if (btn) {
            btn.setAttribute('aria-pressed', String(t === 'green'));
            btn.setAttribute('aria-label', `Switch to ${t === 'green' ? 'glass' : 'green'} theme`);
        }
        if (metaTheme) metaTheme.setAttribute('content', THEME_COLORS[t] || '#0b0f14');
    }

    // Initial theme—stored → prefers-color-scheme → glass
    const stored = getStored();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(stored || (prefersDark ? 'glass' : 'glass')); // both are dark; keep your palette consistent

    function bindThemeButton() {
        const btn = document.getElementById('themeToggle');
        if (!btn || btn.__bound) return false;
        btn.type = 'button';
        btn.addEventListener('click', () => {
            const cur = document.body.getAttribute('data-theme');
            const next = cur === 'glass' ? 'green' : 'glass';
            apply(next);
        }, { passive: true });
        btn.__bound = true;
        return true;
    }

    // Try now; if not, wait for partials
    if (!bindThemeButton()) {
        // 1) Your include.js should dispatch this once partials are injected:
        // window.dispatchEvent(new CustomEvent('partials:ready'));
        window.addEventListener('partials:ready', bindThemeButton, { once: true });

        // 2) Fallback observer (disconnect after 5s idle to avoid running forever)
        const mo = new MutationObserver(() => { if (bindThemeButton()) mo.disconnect(); });
        mo.observe(document.body, { childList: true, subtree: true });
        setTimeout(() => mo.disconnect(), 5000);
    }

    // --- tiny typewriter after load (one-shot) ---
    function runTypewriter() {
        const pre = document.querySelector('.terminal pre');
        if (!pre || pre.__typed) return;
        const txt = pre.innerHTML;
        pre.innerHTML = '';
        let i = 0;
        (function step() {
            pre.innerHTML = txt.slice(0, ++i);
            if (i < txt.length) requestAnimationFrame(step);
            else pre.__typed = true;
        })();
    }
    if (document.readyState === 'complete') runTypewriter();
    else window.addEventListener('load', runTypewriter);
})();
