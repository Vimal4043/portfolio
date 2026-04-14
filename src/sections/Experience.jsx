import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { EXPERIENCE } from '../utils/data'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="Professional Experience"
          subtitle="Hands-on industry exposure focused on research, reporting, and operational support."
        />

        <motion.div
          className="space-y-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EXPERIENCE.map((item) => (
            <motion.article
              key={`${item.role}-${item.organization}`}
              className="rounded-3xl border border-white/40 bg-white/65 p-8 shadow-[0_16px_50px_rgba(15,23,42,0.1)] backdrop-blur transition-colors duration-100 hover:border-amber-500 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-amber-300"
              variants={fadeUp}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    {item.organization}
                  </p>
                </div>
                {item.duration ? (
                  <p className="text-sm font-medium tracking-wide text-amber-600 dark:text-amber-300">
                    {item.duration}
                  </p>
                ) : null}
              </div>

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

export default Experience
