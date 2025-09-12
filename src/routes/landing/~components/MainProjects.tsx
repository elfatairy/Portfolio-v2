import { useSections } from "../~hooks/useSections";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";


export default function Projects() {
  const { updateSection } = useSections()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    updateSection('projects', ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight)
  }, [])

  return (
    <div className="text-foreground justify-center flex flex-col mx-4 xs:mx-15 md:mx-25 lx:mx-35 mb-10 pt-15 lg:pt-25" id="projects" ref={ref}>
      <h2 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center">Projects</h2>

      <div className="flex flex-col gap-10 md:gap-30 mt-10 md:mt-30">
        {
          projects.map((project) => (
            <Project key={project.name} {...project} />
          ))
        }
      </div>
    </div>
  )
}

function Project({ name, subtitle, description, link, video }: Project) {
  return (
    <div className="flex flex-col ml:flex-row ml:even:flex-row-reverse gap-4" key={name}>
      <motion.a
        href={link} target="_blank" rel="noopener noreferrer" className="ml:w-3/4"
        whileHover={{ scale: .95 }}
        whileFocus={{ scale: .95 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          scale: { duration: 0.2 }
        }}
      >
        <video
          src={video}
          className="w-full h-auto rounded-lg"
          loop
          autoPlay
          muted
          playsInline
          preload="metadata"
        />
      </motion.a>
      <div key={name} className="">
        <h3 className="text-2xl lg:text-3xl font-bold">{name}</h3>
        <p className="text-2xl lg:text-3xl font-bold">{subtitle}</p>
        <p className="lg:text-base mt-3 md:mt-6 text-balance max-w-150 ml:max-w-100" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="flex flex-row gap-2 mt-3 md:mt-6">
          <Button variant="outline" size="default" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Case Study
            </a>
          </Button>
          <Button variant="outline" size="default" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}