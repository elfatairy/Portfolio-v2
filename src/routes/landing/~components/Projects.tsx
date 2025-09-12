import { useSections } from "../~hooks/useSections";
import { useEffect, useRef } from "react";
import MainProjects from "./MainProjects";
import OtherProjects from "./OtherProjects";


export default function Projects() {
  const { updateSection } = useSections()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    updateSection('projects', ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight)
  }, [])

  return (
    <div id="projects" ref={ref}>
      <MainProjects />
      <OtherProjects />
    </div>
  )
}