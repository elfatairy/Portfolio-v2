import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useSections } from '../routes/index/~hooks/useSections'

const sections = {
  hero: { label: 'Home' },
  skills: { label: 'Skills' },
  projects: { label: 'Projects' },
  contact: { label: 'Contact' }
}

export type Section = keyof typeof sections

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { sectionsEdges } = useSections()
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }, [])

  useEffect(() => {
    function handleScroll() {
      Object.entries(sectionsEdges).forEach(([section, sectionEdges]) => {
        if (window.scrollY >= sectionEdges.top - 20 && window.scrollY <= sectionEdges.bottom) {
          setActiveSection(section as Section)
        }
      })
    }
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [sectionsEdges])

  return (
    <header className="p-2 flex gap-2 fixed top-5 left-0 right-0 justify-center z-2">
      <motion.nav
        initial={{ backgroundColor: '#004D6600' }}
        animate={{
          backgroundColor: isScrolled ? '#004D6680' : '#004D6600',
          backdropFilter: isScrolled ? 'blur(15px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.2 }}
        className="flex flex-row justify-between gap-2.5 p-2.5 rounded-full"
      >
        <SectionLink section="hero" active={activeSection === 'hero'} />
        <SectionLink section="skills" active={activeSection === 'skills'} />
        <SectionLink section="projects" active={activeSection === 'projects'} />
        <SectionLink section="contact" active={activeSection === 'contact'} />
      </motion.nav>
    </header>
  )
}

function SectionLink({ section, active }: { section: Section, active: boolean }) {
  return (
    <motion.div
      animate={{
        backgroundColor: active ?
          'color-mix(in srgb, var(--foreground) 20%, transparent)' :
          'color-mix(in srgb, var(--foreground) 0%, transparent)'
      }}
      transition={{ duration: 0.2 }}
      className="px-5 py-1 font-semibold text-lg text-foreground rounded-full"
    >
      <Link to="/" hash={section}>{sections[section].label}</Link>
    </motion.div>
  )
}