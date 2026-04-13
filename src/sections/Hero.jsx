import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

function Hero() {
  const words = useMemo(() => ['MERN Stack Developer', 'Problem Solver', 'Clean UI Enthusiast'], [])
  const [wordIndex, setWordIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const complete = typedText === currentWord
    const empty = typedText.length === 0

    const timeout = setTimeout(
      () => {
        if (!deleting && !complete) {
          setTypedText(currentWord.slice(0, typedText.length + 1))
          return
        }

        if (deleting && !empty) {
          setTypedText(currentWord.slice(0, typedText.length - 1))
          return
        }

        if (!deleting && complete) {
          setDeleting(true)
          return
        }

        setDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      },
      deleting ? 45 : complete ? 1300 : 85,
    )

    return () => clearTimeout(timeout)
  }, [typedText, deleting, wordIndex, words])

  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(245,158,11,0.22),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_38%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          className="rounded-3xl border border-white/40 bg-white/65 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 sm:p-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-300">
            Hello, I am
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
            Vimal Kumar
          </h1>
          <p className="mt-4 min-h-8 text-lg font-medium text-slate-700 dark:text-slate-300 sm:text-xl">
            <span className="text-amber-600 dark:text-amber-300">{typedText}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-slate-700 align-middle dark:bg-slate-200" />
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-slate-700 dark:text-slate-300">
            Building scalable full-stack web applications with clean UI/UX.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-slate-100 dark:text-slate-900"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-100"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
