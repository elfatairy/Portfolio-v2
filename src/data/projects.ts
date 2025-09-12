import dashboardyVideo from "@/assets/demos/dashboardy.mp4";

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  link: string;
  video: string;
}


export const projects: Project[] = [
  {
    name: 'Dashboardy',
    subtitle: 'Management App',
    description: 'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
    link: 'https://dashbaordy.omarhassan.net',
    video: dashboardyVideo
  },
  {
    name: 'Dashboardya',
    subtitle: 'Management App',
    description: 'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
    link: 'https://dashbaordy.omarhassan.net',
    video: dashboardyVideo
  },
]