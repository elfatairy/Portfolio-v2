import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useSections } from '../../routes/~/~hooks/useSections'
import { useIsScrolled } from './useIsScrolled'

const sections = {
  hero: { label: 'Home' },
  skills: { label: 'Skills' },
  projects: { label: 'Projects' },
  contact: { label: 'Contact' }
}

export type Section = keyof typeof sections

export default function Header() {
  const isScrolled = useIsScrolled()
  const { sectionsEdges } = useSections()
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  useEffect(() => {
    function handleScroll() {
      Object.entries(sectionsEdges).forEach(([section, sectionEdges]) => {
        if (window.scrollY >= sectionEdges.top - 20 && window.scrollY <= sectionEdges.bottom) {
          setActiveSection(section as Section)
        }
      })
    }
    document.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [sectionsEdges])

  return (
    <header className="p-2 flex gap-2 fixed top-5 left-0 right-0 justify-center z-navigation">
      <motion.nav
        initial={{ backgroundColor: '#004D6600' }}
        animate={{
          backgroundColor: isScrolled ? '#004D6680' : '#004D6600',
          backdropFilter: isScrolled ? 'blur(15px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.2 }}
        className="flex flex-row justify-between p-2.5 rounded-full group"
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
  const bgClassName = active ? 'bg-foreground/14 group-has-[:hover]:bg-foreground/0 hover:bg-foreground/14' : 'hover:bg-foreground/14'
  return (
    <div className={`font-semibold text-sm xs:text-base md:text-lg text-foreground rounded-full ${bgClassName} transition duration-300`}>
      <Link to="/" hash={section} className="px-3 xs:px-5 py-2 inline-block">{sections[section].label}</Link>
    </div>
  )
}