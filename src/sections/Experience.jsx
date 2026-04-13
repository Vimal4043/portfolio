import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { EXPERIENCE } from '../utils/data'
import { fadeUp, viewportOnce } from '../utils/motion'

function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="Leadership and Mentorship"
          subtitle="Driving technical initiatives through ownership, communication, and delivery."
        />

        <motion.article
          className="rounded-3xl border border-white/40 bg-white/65 p-8 shadow-[0_16px_50px_rgba(15,23,42,0.1)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {EXPERIENCE.role}, {EXPERIENCE.organization}
          </h3>
          <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
            {EXPERIENCE.highlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  )
}

export default Experience
