import { Button } from '@/components/ui/button'
import { useLoading } from '@/contexts/LoadingContext'
import { projects } from '@/data/projects'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/$projectSlug/')({
  component: Component,
  beforeLoad: ({ params }) => {
    if (!projects.find(project => project.slug === params.projectSlug)) {
      throw redirect({ to: '/landing' })
    }
  }
})

function Component() {
  return (
    <ComponentContent />
  )
}

function ComponentContent() {
  const { projectSlug } = Route.useParams()
  const { setPageLoaded, setVideosLoaded } = useLoading()
  const project = projects.find(project => project.slug === projectSlug)!

  useEffect(() => {
    setPageLoaded()
    setVideosLoaded()
  }, [])

  return (
    <div className="min-h-dvh p-8 md:p-16">
      <div className="flex flex-col gap-6 justify-center lg:fixed top-0 left-14 right-0 bottom-0 lg:w-1/3">
        <h1 className="text-6xl font-semibold">{project.name}</h1>
        <div className="flex flex-row gap-2">
          {project.skills.map((skill) => (
            <div key={skill} className="text-sm text-foreground border border-foreground rounded-full px-2 py-1 font-[400]">{skill}</div>
          ))}
        </div>
        <p className="text-sm text-foreground/90 text-pretty leading-6" dangerouslySetInnerHTML={{ __html: project.longDescription }} />
        <div className="flex flex-row gap-2">
          <Link to='/landing'>Back</Link>
          <Button variant="outline" size="default" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Try It
            </a>
          </Button>
          <Button variant="outline" size="default" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </Button>
        </div>
      </div>
      <div className="lg:ml-auto lg:w-1/2 py-10 flex flex-col items-center min-h-dvh">
        <video src={project.video} autoPlay loop muted playsInline preload="metadata" />
      </div>
    </div>
  )
}