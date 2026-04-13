import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { ACHIEVEMENTS } from '../utils/data'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

function Achievements() {
  return (
    <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Achievements"
          title="Consistent Growth"
          subtitle="Focused practice and product delivery across problem solving and engineering."
        />

        <motion.ul
          className="space-y-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ACHIEVEMENTS.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="rounded-2xl border border-white/40 bg-white/65 p-5 text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Achievements
