import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../utils/motion'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.header
      className="mx-auto mb-12 max-w-2xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </motion.header>
  )
}

export default SectionTitle
