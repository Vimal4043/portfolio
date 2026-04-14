import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const getActiveSection = () => {
      const scrollMarker = window.scrollY + 160

      let currentSection = sectionIds[0]

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)

        if (!element) {
          return
        }

        if (element.offsetTop <= scrollMarker) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    getActiveSection()

    window.addEventListener('scroll', getActiveSection, { passive: true })
    window.addEventListener('resize', getActiveSection)

    return () => {
      window.removeEventListener('scroll', getActiveSection)
      window.removeEventListener('resize', getActiveSection)
    }
  }, [sectionIds])

  return activeSection
}
