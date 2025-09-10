import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useSections } from '@/routes/landing/~hooks/useSections'
import { useIsScrolled } from '../hooks/useIsScrolled'
import LightDarkToggle from './LightDarkToggle'

const sections = {
  hero: { label: 'About Me' },
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
    <header className="p-2 flex gap-2 fixed top-2 left-0 right-0 justify-center z-navigation">
      <motion.nav
        initial={{ backgroundColor: 'color-mix(in srgb, var(--nav) 0%, transparent)' }}
        animate={{
          backgroundColor: isScrolled ? 'color-mix(in srgb, var(--nav) 50%, transparent)' : 'color-mix(in srgb, var(--nav) 0%, transparent)',
          backdropFilter: isScrolled ? 'blur(15px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.2 }}
        className="flex flex-row justify-between items-center p-2.5 rounded-full group"
      >
        <SectionLink section="hero" active={activeSection === 'hero'} />
        <SectionLink section="skills" active={activeSection === 'skills'} />
        <SectionLink section="projects" active={activeSection === 'projects'} />
        <SectionLink section="contact" active={activeSection === 'contact'} />
        <div className="ml-2">
          <LightDarkToggle />
        </div>
      </motion.nav>
    </header>
  )
}

function SectionLink({ section, active }: { section: Section, active: boolean }) {
  const bgClassName = active ? 'bg-nav-active group-has-[a:hover]:bg-nav-active/0 has-[a:hover]:!bg-nav-active hover:bg-nav-active' : 'hover:bg-nav-active'
  return (
    <div className={`font-semibold text-sm xs:text-base md:text-lg text-nav-foreground rounded-full ${bgClassName} transition duration-300`}>
      <Link to="/landing" hash={section} className="px-3 xs:px-5 py-2 inline-block">{sections[section].label}</Link>
    </div>
  )
}