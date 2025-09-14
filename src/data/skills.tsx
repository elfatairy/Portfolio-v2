import { Figma, JavaScript, Motion, React, ReactQuery, ReactRouter, ReactTestingLibrary, Redux, TailwindCSS, TypeScript } from "@/components/Icons";

export const skills = [
  {
    name: 'JavaScript ES6+',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: <JavaScript size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#FDF3CE',
    color: '#DAAB00',
  },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: <TypeScript size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#D9E8F5',
    color: '#3178C6',
  },
  {
    name: 'React JS',
    link: 'https://react.dev/',
    icon: <React size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#D8F6FF',
    color: '#2081C3',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    icon: <TailwindCSS size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#9AD6FE',
    color: '#016FB9',
  },
  {
    name: 'React Query',
    link: 'https://tanstack.com/query/latest/docs/react/overview',
    icon: <ReactQuery size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#FE9AA4',
    color: '#C20114',
  },
  {
    name: 'Redux Toolkit',
    link: 'https://redux-toolkit.js.org/',
    icon: <Redux size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#E788B3',
    color: '#7E1946',
  },
  {
    name: 'React Testing Library',
    link: 'https://testing-library.com/docs/react-testing-library/intro/',
    icon: <ReactTestingLibrary size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#FE8587',
    color: '#A50104',
  },
  {
    name: 'Figma',
    link: 'https://www.figma.com/',
    icon: <Figma size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#F6AD8D',
    color: '#AA3D0E',
  },
  {
    name: 'Motion',
    link: 'https://motion.dev/',
    icon: <Motion size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#FFE570',
    color: '#8F7500',
  },
  {
    name: 'React Router',
    link: 'https://reactrouter.com/en/main',
    icon: <ReactRouter size={window.innerWidth > 480 ? 50 : 40} />,
    bgColor: '#FD87AA',
    color: '#94032E',
  }
]