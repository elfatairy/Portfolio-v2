import { motion } from "motion/react"

const footerPadding = 16
const footerContentPadding = 100

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
        duration: 0.8,
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
          duration: 0.8,
          ease: 'easeIn'
        }}
      >
        <motion.div
          className="bg-foreground h-full w-full rounded-20"
          variants={childVariants}
          transition={{
            duration: 0.8,
            ease: 'easeIn'
          }}
        >
          <h2 className="text-2xl font-bold text-white">Footer</h2>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}