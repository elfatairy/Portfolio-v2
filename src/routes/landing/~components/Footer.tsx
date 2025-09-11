import { motion } from "motion/react"

export default function Footer() {
  const variants = {
    hidden: {
      marginBottom: '0',
      paddingTop: '40px',
      marginTop: '0',
      marginLeft: '0',
      marginRight: '0',
      paddingLeft: '60px',
      paddingRight: '60px',
      borderRadius: '0'
    },
    visible: {
      paddingTop: '20px',
      marginBottom: '20px',
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '20px',
      paddingLeft: '40px',
      paddingRight: '40px',
      borderRadius: '20px'
    }
  }

  return (
    <motion.footer
      className="bg-foreground h-[calc(100vh-40px)] px-15 py-35 mb-0"
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{
        duration: 0.8
      }}
      viewport={{
        once: true,
        margin: '0px 0px -90% 0px'
      }}
    >
      <h2 className="text-2xl font-bold text-white">Footer</h2>
    </motion.footer>
  )
}