import { Button } from '@/components/ui/button'
import { useLoading } from '@/contexts/LoadingContext'
import { projects } from '@/data/projects'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import Markdown from '@/components/ui/markdown'

export const Route = createFileRoute('/$projectSlug/')({
  component: Page,
  beforeLoad: ({ params }) => {
    if (!projects.find(project => project.slug === params.projectSlug)) {
      throw redirect({ to: '/landing' })
    }
  }
})

function Page() {
  return (
    <PageContent />
  )
}

function PageContent() {
  const { projectSlug } = Route.useParams()
  const { setPageLoaded } = useLoading()
  const project = projects.find(project => project.slug === projectSlug)!
  const [showcase, setShowcase] = useState<string>()

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        // Dynamic import of markdown files
        const markdownModule = await import(`../../assets/showcases/${projectSlug}.md?raw`);
        setShowcase(markdownModule.default);
      } catch (error) {
        console.error('Error loading markdown content:', error);
        setShowcase(''); // Set empty string if file not found
      }
    };

    loadMarkdown();
  }, [projectSlug])


  useEffect(() => {
    setPageLoaded()
  }, [])

  return (
    <div className="min-h-dvh p-4 md:p-16">
      <Link to='/landing' className="flex flex-row items-center mb-8 lg:fixed top-16 left-16 z-navigation">
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to home page
      </Link>
      <div className="flex flex-col gap-6 justify-center lg:fixed top-0 left-14 right-0 bottom-0 lg:w-1/3">
        <h1 className="text-4xl md:text-6xl font-semibold">{project.name}</h1>
        <div className="flex flex-row gap-2">
          {project.skills.map((skill) => (
            <div key={skill} className="text-sm text-foreground border border-foreground rounded-full px-2 py-1 font-[400]">{skill}</div>
          ))}
        </div>
        <p className="text-sm text-foreground/90 text-pretty leading-6" dangerouslySetInnerHTML={{ __html: project.longDescription }} />
        <div className="flex flex-row gap-2">
          <Button variant="outline" size="default" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Try It
            </a>
          </Button>
          {
            project.github && (<Button variant="outline" size="default" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </Button>)
          }
        </div>
      </div>
      <div className="lg:ml-auto lg:w-1/2">
        {/* <video src={project.video} autoPlay loop muted playsInline preload="metadata" /> */}
        <Markdown>{showcase ?? ''}</Markdown>
      </div>
    </div>
  )
}