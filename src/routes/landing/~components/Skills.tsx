import { type ReactNode } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { useUpdateSectionDimensions } from "@/hooks/useUpdateSectionDimensions";
import { skills } from "@/data/skills";

export default function Skills() {
  const { ref } = useUpdateSectionDimensions('skills')

  return (
    <div
      className="mx-4 xs:mx-15 md:mx-35 text-foreground flex gap-8 flex-col justify-center lg:mb-10 pt-15 lg:pt-25"
      id="skills"
      ref={ref}
    >
      <h2 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center">Skills</h2>
      <div
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 xs:gap-4 justify-items-center w-full sm:w-fit mx-auto"
      >
        {skills.map((skill) => (
          <Card key={skill.name} name={skill.name} icon={skill.icon} link={skill.link} color={skill.color} bgColor={skill.bgColor} />
        ))}
      </div>
    </div>
  )
}

function Card({ name, icon, link, color, bgColor }: { name: string, icon: ReactNode, link: string, color: string, bgColor: string }) {
  const { isDarkMode } = useTheme()

  const grandParentVariant = {
    initial: { scale: 1 },
    tap: {
      scale: 0.95,
    }
  }

  const parnetVariant = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1
      }
    },
    tap: {
      opacity: 1,
      transition: {
        duration: 0.2
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
      className={`relative flex flex-col items-center gap-3 p-4 rounded-2xl bg-primary-foreground w-full sm:w-58 h-60 overflow-hidden`}
      transition={{
        scale: { duration: 0.2 }
      }}
      variants={grandParentVariant}
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
    >
      <div className="w-full h-full flex flex-col gap-4 items-center md:justify-center text-primary">
        <span className="max-md:mt-14">{icon}</span>
        <span className="font-bold text-base xs:text-xl text-center flex md:hidden">{name}</span>
      </div>
      <motion.div
        variants={parnetVariant}
        animate={{
          backgroundColor: isDarkMode ? color : bgColor,
        }}
        className={`text-foreground absolute inset-0 items-center justify-center overflow-hidden hidden md:flex`}
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