import dashboardyVideo from "@/assets/demos/dashboardy.mp4";
import dynamicGridlineVideo from "@/assets/demos/dynamic-gridline.mp4";
import ideawallVideo from "@/assets/demos/ideawall.mp4";

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
  {
    slug: "ideawall",
    name: "Idea Wall",
    subtitle: "Note Taking App",
    description:
      "Real-time collaborative whiteboard where users create, react to, and share sticky notes together.",
    longDescription: `IdeaWall is an interactive online workspace for team brainstorming and collaboration. Multiple users can work together in real-time on a virtual whiteboard, seeing each other's mouse movements as they collaborate.
      <br /><br />
      Key Features: <br />
      - Digital Sticky Notes: Create colorful notes (22 colors available) anywhere on the unlimited canvas <br />
      - Real-Time Reactions: React to teammates' ideas with emojis (👍❤️😂😢😊👎) <br />
      - Live Collaboration: See other users' cursors and changes instantly <br />
      - Flexible Navigation: Pan, zoom, and navigate the large workspace easily <br />
      - User Profiles: Personalized avatars <br />
      - Perfect for brainstorming, project planning, retrospectives, and team workshops. No training needed - just join and start collaborating!`,
    skills: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Playwright",
    ],
    link: "https://ideawall.omarhassan.net",
    github: "https://github.com/elfatairy/ideawall",
    video: ideawallVideo,
  },
];
