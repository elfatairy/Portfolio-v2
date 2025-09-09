import type { Section } from "@/components/Header"
import { createContext, useContext, useState } from "react"

export interface Edges {
  top: number
  bottom: number
}

type SectionsEdges = Partial<Record<Section, Edges>>

interface SectionsContextProps {
  sectionsEdges: SectionsEdges
  updateSection: (section: string, top: number, bottom: number) => void
}

export const SectionsContext = createContext<SectionsContextProps>({ sectionsEdges: {}, updateSection: () => { } })

export const SectionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [sectionsEdges, setSectionsEdges] = useState<SectionsEdges>({})

  const updateSection = (section: string, top: number, bottom: number) => {
    setSectionsEdges(prev => ({ ...prev, [section]: { top, bottom } }))
  }

  return (
    <SectionsContext.Provider value={{ sectionsEdges, updateSection }}>
      {children}
    </SectionsContext.Provider>
  )
}

export const useSections = () => {
  const sectionsContext = useContext(SectionsContext)
  if (!sectionsContext) {
    throw new Error('SectionsContext not found')
  }
  return sectionsContext
}