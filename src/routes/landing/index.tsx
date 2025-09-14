import { createFileRoute } from '@tanstack/react-router'
import Hero from './~components/Hero'
import Skills from './~components/Skills'
import Projects from './~components/Projects'
import Header from '@/components/Header'
import { SectionsProvider } from './~hooks/useSections'
import { EmailStrip, SocialsStrip } from './~components/Strips'
import SkipToContentBtn from './~components/SkipToContentBtn'
import Footer from './~components/Footer'
import { LoadingProvider, useLoading } from '@/contexts/LoadingContext'
import LoadingScreen from '@/components/LoadingScreen'
import { useEffect } from 'react'

export const Route = createFileRoute('/landing/')({
  component: App,
})

function App() {
  return (
    <LoadingProvider>
      <LoadingScreen />
      <AppContent />
    </LoadingProvider>
  )
}

function AppContent() {
  const { setPageLoaded } = useLoading()

  useEffect(() => {
    setPageLoaded()
  }, [setPageLoaded])

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
        </main>

        <Footer />
      </div>
    </SectionsProvider>
  )
}
