import { createFileRoute } from '@tanstack/react-router'
import Hero from './~components/Hero'
import Skills from './~components/Skills'
import Projects from './~components/Projects'
import Contact from './~components/Contact'
import Header from '@/components/Header'
import { SectionsProvider } from './~hooks/useSections'
import { EmailStrip, SocialsStrip } from './~components/Strips'
import SkipToContentBtn from './~components/SkipToContentBtn'

export const Route = createFileRoute('/landing/')({
  component: App,
})

function App() {
  return (
    <SectionsProvider>
      <div className="bg-background">
        <SkipToContentBtn />
        <Header />
        <SocialsStrip />
        <EmailStrip />

        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </SectionsProvider>
  )
}
