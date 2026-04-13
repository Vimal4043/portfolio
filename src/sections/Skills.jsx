import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { SKILL_GROUPS } from '../utils/data'
import { stagger, viewportOnce } from '../utils/motion'

function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Toolbox Built for Shipping"
          subtitle="From systems thinking to polished frontends, I focus on practical depth."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
