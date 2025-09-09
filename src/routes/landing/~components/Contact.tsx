import { useSections } from "../~hooks/useSections";
import { useEffect, useRef } from "react";

export default function Contact() {
  const { updateSection } = useSections()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    updateSection('contact', ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight)
  }, [])

  return (
    <div className="min-h-screen text-foreground justify-center" ref={ref}>
      <h2 className="text-6xl font-bold text-center">Contact</h2>
    </div>
  )
}