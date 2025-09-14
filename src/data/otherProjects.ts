import dashboardyVideo from "@/assets/demos/dashboardy.mp4";
import rakhaVideo from "@/assets/demos/mobile1.mp4";

export interface OtherProject {
  name: string;
  video: string;
  type: 'mobile' | 'web'
}

export const otherProjects: OtherProject[] = [
  {
    name: 'Dashboardy',
    video: dashboardyVideo,
    type: 'web'
  },
  {
    name: 'rakha',
    video: rakhaVideo,
    type: 'mobile'
  },
  {
    name: 'Dashboardy1',
    video: dashboardyVideo,
    type: 'web'
  },
  {
    name: 'rakha1',
    video: rakhaVideo,
    type: 'mobile'
  },
]