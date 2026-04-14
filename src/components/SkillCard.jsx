import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

function SkillCard({ group }) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-2xl border border-white/40 bg-white/65 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur tracking-colors duration-100 hover:border-amber-500 dark:border-white/10 dark:bg-slate-900/60"
    >
      <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
        {group.category}
      </h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-amber-300/40 bg-amber-100/70 px-3 py-1 text-sm font-medium text-amber-900 dark:border-amber-200/20 dark:bg-amber-200/10 dark:text-amber-100"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default SkillCard
