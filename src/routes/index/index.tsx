import { createFileRoute } from '@tanstack/react-router'
import Hero from './~components/Hero'
import Skills from './~components/Skills'
import Projects from './~components/Projects'
import Contact from './~components/Contact'
import Header from '../../components/Header'
import { SectionsProvider } from './~hooks/useSections'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <SectionsProvider>
      <div className="bg-background">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </SectionsProvider>
  )
}
