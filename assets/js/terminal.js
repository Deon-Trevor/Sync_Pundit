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

    function runTypewriter() {
        const pre = document.querySelector('.terminal pre');
        if (!pre || pre.__typed) return false;
        const txt = pre.innerHTML;
        if (!txt || !txt.trim()) return false;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) { pre.innerHTML = txt; pre.__typed = true; return true; }

        pre.innerHTML = '';
        let i = 0;
        (function step() {
            pre.innerHTML = txt.slice(0, ++i);
            if (i < txt.length) requestAnimationFrame(step);
            else pre.__typed = true;
        })();
        return true;
    }


    // Prefer a deterministic signal after partials + render are done
    window.addEventListener('site:ready', () => {
        if (!runTypewriter()) {
            // if content still not there, use a short-lived observer
            const mo = new MutationObserver(() => {
                if (runTypewriter()) mo.disconnect();
            });
            mo.observe(document.body, { childList: true, subtree: true });
            setTimeout(() => mo.disconnect(), 5000);
        }
    }, { once: true });

    // Absolute fallback if someone loads terminal.js but not include.js
    if (document.readyState === 'complete') {
        setTimeout(runTypewriter, 0);
    } else {
        window.addEventListener('load', () => setTimeout(runTypewriter, 0), { once: true });
    }

    // Try to bind immediately
    let bound = bindThemeButton();

    // Bind again once partials + render are done
    window.addEventListener('site:ready', () => {
        if (!bindThemeButton()) {
            const mo = new MutationObserver(() => {
                if (bindThemeButton()) mo.disconnect();
            });
            mo.observe(document.body, { childList: true, subtree: true });
            setTimeout(() => mo.disconnect(), 5000);
        }
    }, { once: true });

})();
