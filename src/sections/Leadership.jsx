import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { LEADERSHIP } from '../utils/data'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

function Leadership() {
  return (
    <section id="leadership" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Leadership"
          title="Leadership and Mentorship"
          subtitle="Roles that reflect ownership, collaboration, and guiding others toward better outcomes."
        />

        <motion.div
          className="grid gap-5 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {LEADERSHIP.map((item) => (
            <motion.article
              key={`${item.role}-${item.organization}`}
              className="rounded-3xl border border-white/40 bg-white/65 p-7 shadow-[0_16px_50px_rgba(15,23,42,0.1)] backdrop-blur transition-colors duration-100 hover:border-amber-500 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-amber-300"
              variants={fadeUp}
            >
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                {item.role}
              </h3>
              <p className="mt-2 text-sm font-medium tracking-wide text-amber-600 dark:text-amber-300">
                {item.organization}
              </p>

              <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
                {item.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership