import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/70 p-7 shadow-[0_14px_40px_rgba(15,23,42,0.14)] backdrop-blur transition dark:border-white/10 dark:bg-slate-900/65"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <h3 className="relative font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="relative mt-4 text-slate-700 dark:text-slate-300">
        {project.description}
      </p>

      <ul className="relative mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <ul className="relative mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-slate-300/70 bg-slate-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="relative mt-7 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 dark:bg-slate-100 dark:text-slate-900"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-500/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 dark:border-slate-500 dark:text-slate-200 dark:hover:border-slate-100 dark:hover:text-slate-100"
        >
          Live Demo
        </a>
      </div>
    </motion.article>
  )
}

export default ProjectCard
