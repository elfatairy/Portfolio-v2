import dashboardyVideo from "@/assets/demos/dashboardy.mp4";
import containmentVideo from "@/assets/demos/containmentVideo.mov";
import laundrygoVideo from "@/assets/demos/laundrygo.mp4";
import fruitstoreVideo from "@/assets/demos/fruitstore.mp4";
import learncoroporateVideo from "@/assets/demos/learncoroporate.mp4";

export interface OtherProject {
  name: string;
  video: string;
  type: "mobile" | "web";
}

export const otherProjects: OtherProject[] = [
  {
    name: "Dashboardy",
    video: dashboardyVideo,
    type: "web",
  },
  {
    name: "Containment",
    video: containmentVideo,
    type: "mobile",
  },
  {
    name: "Laundrygo",
    video: laundrygoVideo,
    type: "web",
  },
  {
    name: "fruitstore",
    video: fruitstoreVideo,
    type: "web",
  },
  {
    name: "learncoroporate",
    video: learncoroporateVideo,
    type: "web",
  },
];
