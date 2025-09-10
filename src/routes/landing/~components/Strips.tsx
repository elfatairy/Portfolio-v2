import { useTheme } from '@/contexts/ThemeContext'
import { X, LinkedIn, GitHub, LeetCode } from './SocialIcons'
import { motion } from 'motion/react'

const email = 'elfatairy@omarhassan.net'

export function SocialsStrip() {
  const { isDarkMode } = useTheme()

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/elfatairy',
      icon: () => <GitHub />,
      color: isDarkMode ? '#ffffff' : '#181717'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/omar-hassan-81888320b',
      icon: () => <LinkedIn />,
      color: '#0077B1'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/omar13102005',
      icon: () => <LeetCode />,
      color: '#FFA116'
    },
    {
      name: 'X',
      url: 'https://x.com/intent/follow?screen_name=omar_elfat76510',
      icon: () => <X />,
      color: isDarkMode ? '#ffffff' : '#000000'
    }
  ]

  return (
    <div className="flex-col items-center fixed gap-8 bottom-0 left-10 z-navigation hidden md:flex">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className='text-foreground'
          whileHover={{ scale: 1.2, color: social.color }}
          whileTap={{ scale: 0.9 }}
          transition={{
            color: { duration: 0 },
            scale: { duration: 0.2 }
          }}
        >
          {social.icon()}
        </motion.a>
      ))}
      <div className="w-[1px] h-20 bg-foreground rounded-full" />
    </div>
  )
}

export function EmailStrip() {
  return (
    <div className="flex-col items-center fixed gap-8 bottom-0 right-10 z-navigation hidden md:flex">
      <motion.a
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        className='text-foreground pl-2 pr-1'
        style={{
          letterSpacing: '0.1em',
          WebkitWritingMode: 'vertical-rl',
          writingMode: 'vertical-rl'
        }}
        whileHover={{ y: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        {email}
      </motion.a>
      <div className="w-[1px] h-20 bg-foreground rounded-full" />
    </div >
  )
}