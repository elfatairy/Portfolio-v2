import { useLoading } from '@/contexts/LoadingContext'
import { projects } from '@/data/projects'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/$projectName/')({
  component: Component,
  beforeLoad: ({ params }) => {
    if (!projects.find(project => project.slug === params.projectName)) {
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
  const { projectName } = Route.useParams()
  const { setPageLoaded, setVideosLoaded } = useLoading()

  useEffect(() => {
    setPageLoaded()
    setVideosLoaded()
  }, [])

  return <div>Hello {projectName}</div>
}