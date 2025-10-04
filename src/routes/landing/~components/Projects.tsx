import MainProjects from "./MainProjects";
// import OtherProjects from "./OtherProjects";
import { useUpdateSectionDimensions } from "@/hooks/useUpdateSectionDimensions";


export default function Projects() {
  const { ref } = useUpdateSectionDimensions('projects')

  return (
    <div id="projects" ref={ref}>
      <MainProjects />
      {/* <OtherProjects /> */}
    </div>
  )
}