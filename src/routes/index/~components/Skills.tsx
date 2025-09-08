import { useSections } from "../~hooks/useSections";
import { useEffect, useRef } from "react";

export default function Skills() {
  const { updateSection } = useSections()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    updateSection('skills', ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight)
  }, [])

  return (
    <div className="min-h-screen text-foreground" ref={ref}>
      <h2>Skills</h2>
    </div>
  )
}