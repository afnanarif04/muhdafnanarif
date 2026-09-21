// Shared site behaviour: footer year + light/dark theme toggle.
// The initial theme (before this file loads) is set by a tiny inline
// script in <head> on each page, so there's no flash of the wrong theme.

document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function currentTheme() {
    var stored = root.getAttribute('data-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return systemPrefersDark() ? 'dark' : 'light';
  }

  function paintIcon(theme) {
    // Show the icon for the mode you'd switch TO.
    btn.innerHTML = theme === 'dark' ? sunIcon() : moonIcon();
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function sunIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/></svg>';
  }
  function moonIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"/></svg>';
  }

  paintIcon(currentTheme());

  btn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paintIcon(next);
  });
});

// One-time fade-up for Home page sections as they scroll into view.
// Progressive enhancement: sections are fully visible until this runs,
// so nothing breaks if JS is disabled or IntersectionObserver is absent.
document.addEventListener('DOMContentLoaded', function () {
  if (document.body.getAttribute('data-page') !== 'home') return;
  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  document.body.classList.add('js-reveal');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (t) { observer.observe(t); });
});
