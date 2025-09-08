import { useEffect, useState } from 'react'

export const useIsScrolled = (y: number = 50) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > y)
    })
  }, [])

  return isScrolled
}
