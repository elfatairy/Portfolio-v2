import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'motion/react'
import { EMAIL } from '@/utils/contants'
import { SOCIALS } from '@/utils/socials'

export function SocialsStrip() {
  const { isDarkMode } = useTheme()

  return (
    <div className="flex-col items-center fixed gap-8 bottom-0 left-10 z-navigation hidden md:flex">
      {SOCIALS.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className='text-foreground'
          whileHover={{ scale: 1.2, color: isDarkMode ? social.darkColor : social.color }}
          animate={{
            color: 'var(--foreground)'
          }}
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
        href={`mailto:${EMAIL}`}
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
        {EMAIL}
      </motion.a>
      <div className="w-[1px] h-20 bg-foreground rounded-full" />
    </div >
  )
}