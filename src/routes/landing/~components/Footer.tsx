import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "motion/react"
import { toast } from "react-toastify"
import { useState } from "react"
import { EMAIL } from "@/utils/contants"
import { useTheme } from "@/contexts/ThemeContext"
import { SOCIALS } from "@/utils/socials"

const footerPadding = 16
const footerContentHorizontalPadding = window.innerWidth > 640 ? 100 : 20
const footerContentVerticalPadding = window.innerWidth > 480 ? 60 : 30

export default function Footer() {
  const grandParentVariants = {
    hidden: {
      paddingTop: '0',
    },
    visible: {
      paddingTop: `${footerPadding}px`,
    }
  }

  const parentVariants = {
    hidden: {
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '0'
    },
    visible: {
      paddingLeft: `${footerPadding}px`,
      paddingRight: `${footerPadding}px`,
      paddingBottom: `${footerPadding}px`
    }
  }

  const childVariants = {
    hidden: {
      paddingTop: `${footerPadding + footerContentVerticalPadding}px`,
      paddingBottom: `${footerPadding + footerContentVerticalPadding}px`,
      paddingLeft: `${footerPadding + footerContentHorizontalPadding}px`,
      paddingRight: `${footerPadding + footerContentHorizontalPadding}px`,
      borderRadius: '0'
    },
    visible: {
      paddingTop: `${footerContentVerticalPadding}px`,
      paddingBottom: `${footerContentVerticalPadding}px`,
      paddingLeft: `${footerContentHorizontalPadding}px`,
      paddingRight: `${footerContentHorizontalPadding}px`,
      borderRadius: '20px'
    }
  }

  return (
    <motion.footer
      className="bg-background h-auto xs:h-160 lg:h-[100vh]!"
      initial="hidden"
      whileInView="visible"
      variants={grandParentVariants}
      transition={{
        duration: 0.6,
        ease: 'easeIn'
      }}
      viewport={{
        once: true,
        amount: 0.9
      }}
    >
      <motion.div
        className="bg-background h-full w-full relative z-overlay"
        variants={parentVariants}
        transition={{
          duration: 0.6,
          ease: 'easeIn'
        }}
      >
        <motion.div
          className="relative bg-footer-background h-full w-full rounded-20"
          variants={childVariants}
          transition={{
            duration: 0.6,
            ease: 'easeIn'
          }}
        >
          <FooterContent />
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

const verbs = [
  'make',
  'build',
  'create',
  'develop',
]

function FooterContent() {
  return (
    <div className="flex flex-col max-w-200 h-full mx-auto">
      <h2 className="text-3xl xs:text-4xl lg:text-5xl font-semibold text-footer-foreground flex flex-col">
        <span className="">
          Let's
          <span className="">{' '} {verbs[0]}</span>
        </span>
        <span className="text-footer-foreground/70">something great together.</span>
      </h2>
      <div className="flex flex-col gap-4 h-full">
        <FooterForm />
        <FooterSocials />
      </div>
    </div>
  )
}

function FooterForm() {
  const { isDarkMode } = useTheme()
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name) {
      toast.error('Name is required')
      return
    }
    if (!subject) {
      toast.error('Email is required')
      return
    }
    if (!message) {
      toast.error('Message is required')
      return
    }
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${message}`, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full h-full justify-between pt-12 xs:pt-26">
      <div className="flex flex-col gap-8 xs:gap-16 text-footer-foreground pb-10">
        <div className="flex gap-8 xs:gap-4 flex-col xs:flex-row">
          <Input
            type='text'
            autoComplete='name'
            placeholder="What should we call you?"
            className="flex-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            autoComplete='off'
            placeholder="What can we create together?"
            className="flex-1"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <Textarea
          autoComplete='off'
          placeholder="Tell me more about your idea..."
          className="max-h-30"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button variant={isDarkMode ? "outline" : "outline-reverse"} size="lg" type="submit">Send</Button>
    </form>
  )
}

function FooterSocials() {
  const { isDarkMode } = useTheme()
  return (
    <div className="justify-center sm:justify-start mt-4 sm:absolute sm:bottom-15 sm:left-10 flex sm:flex-col gap-6 sm:gap-8">
      {SOCIALS.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className='text-footer-foreground'
          whileHover={{ scale: 1.2, color: isDarkMode ? social.darkColor : social.color }}
          animate={{
            color: 'var(--footer-foreground)'
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
    </div>
  )
}
