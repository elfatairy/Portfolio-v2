import { useSections } from "@/app/_contexts/SectionsContext"
import { useEffect, useRef } from "react"

export const useUpdateSectionDimensions = (section: string) => {
  const { updateSection } = useSections()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return;
    updateSection(section, ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight)
  }, [section, updateSection])

  return { ref }
}