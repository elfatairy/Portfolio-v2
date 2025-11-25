'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 300)

    const scrollbarTimer = setTimeout(() => {
      const style = document.createElement('style');
      style.innerHTML = `
        ::-webkit-scrollbar-track {
          background: transparent !important;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--color-primary) !important;
        }
      `;
      document.head.appendChild(style);
    }, 1100)

    return () => {
      clearTimeout(timer)
      clearTimeout(scrollbarTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="bg-[#003249] flex justify-center items-center fixed top-0 left-0 z-1000 h-screen w-screen"
        >
          <div className="flex gap-[14px] text-[#9ad1d4] text-2xl">
            <motion.span
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-medium"
            >
              Omar Hassan
            </motion.span>
            <motion.span
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-light"
            >
              Portfolio
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
