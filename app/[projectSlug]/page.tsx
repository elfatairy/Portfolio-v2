'use cache'
// import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
// import Markdown from '@/components/ui/markdown'
import { redirect } from "next/navigation"
import fs from 'fs';
import path from 'path';
import { Button } from "@/components/ui/button";
import { cacheLife } from "next/cache"
import Markdown from "@/components/ui/markdown"

export async function generateStaticParams() {
  return await Promise.all(projects.map(async (project) => {
    return {
      projectSlug: project.slug,
    }
  }))
}

export default async function ProjectPage({ params }: PageProps<'/[projectSlug]'>) {
  cacheLife('max')
  
  const { projectSlug } = await params
  const project = projects.find((project) => project.slug === projectSlug)
  if (!project) {
    redirect('/')
  }
  const showcaseDirectory = path.join(process.cwd(), 'public/showcases');
  const markdownContent = fs.readFileSync(path.join(showcaseDirectory, `${project.slug}.md`), 'utf8')

  return (
    <div className="min-h-dvh p-4 md:p-16">
      <Link href='/' className="flex flex-row items-center mb-8 lg:fixed top-16 left-16 z-navigation">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to home page
      </Link>
      <div className="flex flex-col gap-6 justify-center lg:fixed top-0 left-14 right-0 bottom-0 lg:w-1/3">
        <h1 className="text-4xl md:text-6xl font-semibold">{project.name}</h1>
        <div className="flex flex-row flex-wrap gap-2">
          {project.skills.map((skill) => (
            <div key={skill} className="text-sm text-foreground border border-foreground rounded-full px-2 py-1 font-normal no-wrap">{skill}</div>
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
        <Markdown>{markdownContent ?? ''}</Markdown>
      </div>
    </div>
  )
}