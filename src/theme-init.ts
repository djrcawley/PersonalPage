// Apply the theme before the browser paints or React loads.
(() => {
  let theme: string | null = null;
  try {
    theme = localStorage.getItem('theme');
  } catch {
    // Storage can be blocked, so fall back to the system preference.
  }

  const isDark = theme === 'dark' ||
    (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', isDark);
})();
