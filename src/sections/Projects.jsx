import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { PROJECTS } from '../utils/data'
import { stagger, viewportOnce } from '../utils/motion'

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Real, end-to-end builds focused on architecture, UX quality, and execution speed."
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
