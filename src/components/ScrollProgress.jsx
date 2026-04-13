import { motion, useScroll } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-70 h-1 origin-left bg-linear-to-r from-amber-500 via-rose-500 to-cyan-500"
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
