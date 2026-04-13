import { motion } from 'framer-motion'

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-90 grid place-items-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <motion.p
        className="font-display text-lg tracking-[0.28em] text-amber-300"
        initial={{ opacity: 0.25 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      >
        VMKL
      </motion.p>
    </motion.div>
  )
}

export default LoadingScreen
