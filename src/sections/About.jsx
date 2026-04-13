import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, viewportOnce } from '../utils/motion'

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="Engineer with a Product Mindset"
          subtitle="I design and build reliable full-stack products that scale without sacrificing experience."
        />

        <motion.article
          className="grid gap-8 rounded-3xl border border-white/40 bg-white/65 p-8 shadow-[0_16px_60px_rgba(15,23,42,0.09)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 lg:grid-cols-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-slate-700 dark:text-slate-300">
            MERN Stack Developer with experience building real-world applications,
            including a full-stack e-commerce platform with authentication, cart,
            checkout and complete order workflow.
          </p>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Strong in DSA and problem solving with 300+ LeetCode problems solved
              across arrays, graphs, DP and system-oriented challenges.
            </p>
            <p>
              Education: B.Tech, NSUT (2022-2026)
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

export default About
