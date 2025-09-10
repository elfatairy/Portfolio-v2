import { Figma, JavaScript, Motion, React, ReactQuery, ReactRouter, ReactTestingLibrary, Redux, TailwindCSS, TypeScript } from "@/components/Icons";
import { useSections } from "../~hooks/useSections";
import { useEffect, useRef, type ReactNode } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";

const skills = [
  {
    name: 'JavaScript ES6+',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: <JavaScript size={50} />,
    bgColor: '#FDF3CE',
    color: '#DAAB00',
  },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: <TypeScript size={50} />,
    bgColor: '#D9E8F5',
    color: '#3178C6',
  },
  {
    name: 'React JS',
    link: 'https://react.dev/',
    icon: <React size={50} />,
    bgColor: '#D8F6FF',
    color: '#2081C3',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    icon: <TailwindCSS size={50} />,
    bgColor: '#9AD6FE',
    color: '#016FB9',
  },
  {
    name: 'React Query',
    link: 'https://tanstack.com/query/latest/docs/react/overview',
    icon: <ReactQuery size={50} />,
    bgColor: '#FE9AA4',
    color: '#C20114',
  },
  {
    name: 'Redux Toolkit',
    link: 'https://redux-toolkit.js.org/',
    icon: <Redux size={50} />,
    bgColor: '#E788B3',
    color: '#7E1946',
  },
  {
    name: 'React Testing Library',
    link: 'https://testing-library.com/docs/react-testing-library/intro/',
    icon: <ReactTestingLibrary size={50} />,
    bgColor: '#FE8587',
    color: '#A50104',
  },
  {
    name: 'Figma',
    link: 'https://www.figma.com/',
    icon: <Figma size={50} />,
    bgColor: '#F6AD8D',
    color: '#AA3D0E',
  },
  {
    name: 'Motion',
    link: 'https://motion.dev/',
    icon: <Motion size={50} />,
    bgColor: '#FFE570',
    color: '#8F7500',
  },
  {
    name: 'React Router',
    link: 'https://reactrouter.com/en/main',
    icon: <ReactRouter size={50} />,
    bgColor: '#FD87AA',
    color: '#93032E',
  }
]

export default function Skills() {
  const { updateSection } = useSections()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    updateSection('skills', ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight)
  }, [])

  return (
    <div className="mx-5 xs:mx-15 md:mx-35 text-foreground mb-15 lg:mb-35 flex gap-8 flex-col justify-center" ref={ref}>
      <h2 className="text-5xl font-bold text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
        {skills.map((skill) => (
          <Card key={skill.name} name={skill.name} icon={skill.icon} link={skill.link} color={skill.color} bgColor={skill.bgColor} />
        ))}
      </div>
    </div>
  )
}

function Card({ name, icon, link, color, bgColor }: { name: string, icon: ReactNode, link: string, color: string, bgColor: string }) {
  const { isDarkMode } = useTheme()

  const parnetVariant = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1
      }
    }
  }
  const childVariant = {
    initial: {
      y: 100
    },
    hover: {
      y: 0,
      transition: {
        duration: 0.2
      }
    },
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full flex flex-col items-center gap-3 p-4 rounded-2xl bg-primary-foreground min-w-30 h-60 overflow-hidden"
      whileTap={{ scale: 0.95 }}
      transition={{
        scale: { duration: 0.2 }
      }}
    >
      <div className="w-full h-full flex items-center justify-center text-primary">
        {icon}
      </div>
      <motion.div
        variants={parnetVariant}
        animate={{
          backgroundColor: isDarkMode ? color : bgColor,
        }}
        initial="initial"
        whileHover="hover"
        className={`text-foreground absolute inset-0 flex items-center justify-center overflow-hidden`}
      >
        <motion.div
          className="font-bold text-2xl max-w-50 text-center"
          variants={childVariant}
          animate={{
            color: isDarkMode ? bgColor : color,
          }}
        >
          {name}
        </motion.div>
      </motion.div>
    </motion.a>
  )
}