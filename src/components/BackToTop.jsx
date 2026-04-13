import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/40 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg backdrop-blur transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100"
          aria-label="Back to top"
        >
          Top
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTop
