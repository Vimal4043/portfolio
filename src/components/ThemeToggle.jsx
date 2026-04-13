function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="rounded-full border border-white/40 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur transition hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  )
}

export default ThemeToggle
