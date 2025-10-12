import dynamicGridlineVideo from "@/assets/demos/dynamic-gridline.mp4";
import ideawallVideo from "@/assets/demos/ideawall.mp4";
import taskaVideo from "@/assets/demos/taska.mp4";
import infotikVideo from "@/assets/demos/infotik.mp4";

export interface Project {
  slug: string;
  name: string;
  type: "mobile" | "web";
  subtitle: string;
  description: string;
  longDescription: string;
  skills: string[];
  link: string;
  video: string;
  github?: string;
}

export const projects: Project[] = [
  // {
  //   slug: "dashboardy",
  //   name: "Dashboardy",
  //   subtitle: "Management App",
  //   description:
  //     'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
  //   longDescription:
  //     'A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>. A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>. A dashboard for managing your projects and tasks. Contains dynamic tables with various filtering and sorting options. Built with <span class="font-semibold">Vanilla JavaScript</span>, and <span class="font-semibold">0 dependencies</span>.',
  //   skills: ["Vanilla JavaScript", "TypeScript", "Playwright"],
  //   link: "https://dashboardy.omarhassan.net",
  //   github: "https://github.com/elfatairy/dashboardy",
  //   video: dashboardyVideo,
  // },
  {
    slug: "infotik",
    name: "Infotik",
    type: "mobile",
    subtitle: "Social Media App",
    description:
      "InfoTik is your new go-to platform for learning, discovery, and staying informed—designed to help you break free from mindless scrolling and step into a smarter digital experience.",
    longDescription: `InfoTik is built for people who crave content that actually adds value. Whether you're curious about world events, tech breakthroughs, psychology hacks, or deep dives—InfoTik gives you everything in an engaging, social format.
      <br /><br />
      Tiks: The short-form video feed brings you informative, entertaining videos backed by facts. 
      <br /><br />
      Pulses: Pulse is your scrollable news and thoughts feed—like Twitter, but with purpose.`,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "React Query",
    ],
    link: "https://apps.apple.com/eg/app/info-tik/id6740635815 ",
    video: infotikVideo,
  },
  {
    slug: "taska",
    name: "Taska",
    type: "web",
    subtitle: "Work Management App",
    description:
      "A work management application that helps teams organize their work, track projects and sprints, and monitor the status of all tasks using visual boards.",
    longDescription:
      "A work management application with role-based team management (CTO, PM, Frontend/Backend Developers, Designer, etc..). CTOs create projects and assign PMs, who then manage teams, create sprints, and monitor progress. Team members can track tasks, indicate completion levels, and report blockers. Features include in-app chat, notifications, calendar-based project tracking, and Kanban boards for visual task management.",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "React Query",
    ],
    link: "https://taska.omarhassan.net",
    github: "https://github.com/elfatairy/taska",
    video: taskaVideo,
  },
  {
    slug: "dynamic-gridline",
    name: "Dynamic Gridline",
    type: "web",
    subtitle: "NPM Package",
    description:
      "A draggable and zoomable grid system for placing items. Built with Motion.dev.",
    longDescription:
      "Dynamic Gridline is a powerful React component library that creates interactive, zoomable, and pannable grid canvases for positioning content. It provides a Grid container with smooth animations and a GridItem component for absolute positioning within grid coordinates. Features include mouse/touch panning, mouse wheel zooming, keyboard navigation, customizable grid appearance, click event handlers, and selective interaction controls. Perfect for creating interactive dashboards, design tools, data visualizations, or any application requiring precise spatial content placement with intuitive navigation controls.",
    skills: ["Motion.dev", "TypeScript", "React"],
    link: "https://www.npmjs.com/package/dynamic-gridline",
    github: "https://github.com/elfatairy/dynamic-gridline",
    video: dynamicGridlineVideo,
  },
  {
    slug: "ideawall",
    name: "Idea Wall",
    type: "web",
    subtitle: "Note Taking App",
    description:
      "Real-time collaborative whiteboard where users create, react to, and share sticky notes together.",
    longDescription: `IdeaWall is an interactive online workspace for team brainstorming and collaboration. Multiple users can work together in real-time on a virtual whiteboard. 
    <br /><br />
    Key Features: 
      <br />
      - Digital Sticky Notes: Create colorful notes (22 colors available) anywhere on the canvas <br />
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
