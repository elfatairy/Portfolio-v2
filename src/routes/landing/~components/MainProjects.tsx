import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import { Link } from "@tanstack/react-router";


export default function MainProjects() {
  return (
    <div className="text-foreground justify-center flex flex-col mx-4 xs:mx-15 md:mx-25 lx:mx-35 mb-10 pt-15 lg:pt-25" id="projects">
      <h2 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center">Projects</h2>

      <div className="flex flex-col gap-16 md:gap-30 mt-10 md:mt-30">
        {
          projects.map((project) => (
            <Project key={project.name} {...project} />
          ))
        }
      </div>
    </div>
  )
}

function Project({ name, subtitle, description, link, video, slug }: Project) {
  return (
    <div className="flex flex-col ml:flex-row ml:even:flex-row-reverse gap-4" key={name}>
      <motion.div
        className="ml:w-3/4"
        whileHover={{ scale: .95 }}
        whileFocus={{ scale: .95 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          scale: { duration: 0.2 }
        }}
      >
        <Link to='/$projectSlug' params={{ projectSlug: slug }} aria-label={name + ' Demo'}>
          <video
            src={video}
            className="w-full aspect-video rounded-lg"
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
          />
        </Link>
      </motion.div>
      <div key={name} className="">
        <h3 className="text-2xl lg:text-3xl font-bold">{name}</h3>
        <p className="text-2xl lg:text-3xl text-foreground/60 font-bold">{subtitle}</p>
        <p className="lg:text-base mt-3 md:mt-6 text-balance max-w-150 ml:max-w-100" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="flex flex-row gap-2 mt-3 md:mt-6">
          <Button variant="outline" size="default" asChild>
            <Link to='/$projectSlug' params={{ projectSlug: slug }}>
              Case Study
            </Link>
          </Button>
          <Button variant="outline" size="default" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Try It
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}