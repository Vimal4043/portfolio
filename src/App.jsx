import { AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'
import About from './sections/About'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { NAV_ITEMS } from './utils/data'

function App() {
  const [loading, setLoading] = useState(true)
  const { theme, toggleTheme } = useTheme()
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), [])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <ScrollProgress />

      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>

      <Navbar
        items={NAV_ITEMS}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  )
}

export default App
