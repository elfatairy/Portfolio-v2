import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "motion/react"
import { toast } from "react-toastify"
import { useState } from "react"
import { EMAIL } from "@/utils/contants"
import { useTheme } from "@/contexts/ThemeContext"

const footerPadding = 16
const footerContentPadding = 60

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
      padding: `${footerPadding + footerContentPadding}px`,
      borderRadius: '0'
    },
    visible: {
      padding: `${footerContentPadding}px`,
      borderRadius: '20px'
    }
  }

  return (
    <motion.footer
      className="bg-background h-[calc(100vh)]"
      initial="hidden"
      whileInView="visible"
      variants={grandParentVariants}
      transition={{
        duration: 0.6,
        ease: 'easeIn'
      }}
      viewport={{
        once: true,
        margin: '0px 0px -90% 0px'
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
          className="bg-footer-background h-full w-full rounded-20"
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
      <h2 className="text-5xl font-semibold text-footer-foreground flex flex-col">
        <span className="">
          Let's
          <span className="">{' '} {verbs[0]}</span>
        </span>
        <span className="text-footer-foreground/70">something great together.</span>
      </h2>
      <div className="flex gap-4 h-full">
        <FooterForm />
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
    <form onSubmit={handleSubmit} className="flex flex-col w-full h-full justify-between pt-26">
      <div className="flex flex-col gap-16 text-footer-foreground pb-10">
        <div className="flex gap-4">
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