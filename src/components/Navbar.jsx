import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

function Navbar({ items, activeSection, theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/25 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            Vimal Kumar
          </a>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-800 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-200"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="scrollbar-none flex items-center gap-1 overflow-x-auto pb-1">
          {items.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-slate-900 dark:text-slate-100'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-slate-900/10 dark:bg-white/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  />
                ) : null}
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
