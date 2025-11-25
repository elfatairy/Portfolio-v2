export interface OtherProject {
  name: string;
  video: string;
  type: "mobile" | "web";
}

export const otherProjects: OtherProject[] = [
  {
    name: "Dashboardy",
    video: "/demos/dashboardy.mp4",
    type: "web",
  },
  {
    name: "Containment",
    video: "/demos/containmentVideo.mov",
    type: "mobile",
  },
  {
    name: "Laundrygo",
    video: "/demos/laundrygo.mp4",
    type: "web",
  },
  {
    name: "fruitstore",
    video: "/demos/fruitstore.mp4",
    type: "web",
  },
  {
    name: "learncoroporate",
    video: "/demos/learncoroporate.mp4",
    type: "web",
  },
];
