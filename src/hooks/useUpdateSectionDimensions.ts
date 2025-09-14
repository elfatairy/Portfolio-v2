import { useSections } from "@/routes/landing/~hooks/useSections"
import { useEffect, useRef } from "react"

export const useUpdateSectionDimensions = (section: string) => {
  const { updateSection } = useSections()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    updateSection(section, ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight)
  }, [])

  return { ref }
}