import dashboardyVideo from "@/assets/demos/dashboardy.mp4";

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  skills: string[];
  link: string;
  video: string;
  github: string;
}


export const projects: Project[] = [
  {
    slug: 'dashboardy',
    name: 'Dashboardy',
    subtitle: 'Management App',
    description: 'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
    longDescription: 'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>. A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>. A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
    skills: ['Vanilla JavaScript', 'TypeScript', 'Playwright'],
    link: 'https://dashboardy.omarhassan.net',
    github: 'https://github.com/omarhassan/dashboardy',
    video: dashboardyVideo
  },
  {
    slug: 'dashboardya',
    name: 'Dashboardya',
    subtitle: 'Management App',
    description: 'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
    longDescription: 'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>. A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>. A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
    skills: ['Vanilla JavaScript', 'TypeScript', 'Playwright'],
    link: 'https://dashboardy.omarhassan.net',
    github: 'https://github.com/omarhassan/dashboardya',
    video: dashboardyVideo
  },
]