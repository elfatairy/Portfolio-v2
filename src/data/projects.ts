import dashboardyVideo from "@/assets/demos/dashboardy.mp4";
import dynamicGridlineVideo from "@/assets/demos/dynamic-gridline.mp4";

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
    slug: "dashboardy",
    name: "Dashboardy",
    subtitle: "Management App",
    description:
      'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
    longDescription:
      'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>. A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>. A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
    skills: ["Vanilla JavaScript", "TypeScript", "Playwright"],
    link: "https://dashboardy.omarhassan.net",
    github: "https://github.com/elfatairy/dashboardy",
    video: dashboardyVideo,
  },
  {
    slug: "dynamic-gridline",
    name: "Dynamic Gridline",
    subtitle: "NPM Package",
    description:
      "A draggable and zoomable grid system for placing items. Built with Motion.dev.",
    longDescription:
      "Dynamic Gridline is a powerful React component library that creates interactive, zoomable, and pannable grid canvases for positioning content with precision. Built with React, Motion (Framer Motion), and TypeScript, it provides a Grid container with smooth animations and a GridItem component for absolute positioning within grid coordinates. Features include mouse/touch panning, mouse wheel zooming, keyboard navigation, customizable grid appearance, click event handlers, and selective interaction controls. Perfect for creating interactive dashboards, design tools, data visualizations, or any application requiring precise spatial content placement with intuitive navigation controls.",
    skills: ["Motion.dev", "TypeScript", "React"],
    link: "https://www.npmjs.com/package/dynamic-gridline",
    github: "https://github.com/elfatairy/dynamic-gridline",
    video: dynamicGridlineVideo,
  },
];
