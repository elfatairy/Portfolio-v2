import { GitHub, LinkedIn, LeetCode, X } from "@/components/Icons";

export const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/elfatairy',
    icon: () => <GitHub />,
    color: '#181717',
    darkColor: '#ffffff'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/omar-hassan-81888320b',
    icon: () => <LinkedIn />,
    color: '#0077B1',
    darkColor: '#0077B1'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/elfatairy',
    icon: () => <LeetCode />,
    color: '#FFA116',
    darkColor: '#FFA116'
  },
  {
    name: 'X',
    url: 'https://x.com/intent/follow?screen_name=omar_elfat76510',
    icon: () => <X />,
    color: '#000000',
    darkColor: '#ffffff'
  }
]