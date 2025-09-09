import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

const getIsDarkMode = () => {
  const savedTheme = localStorage.getItem('isDarkMode')
  if (savedTheme !== null) {
    return savedTheme === 'true'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

document.getElementsByTagName('html')?.[0].classList.toggle('dark', getIsDarkMode())

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(getIsDarkMode)

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode
    setIsDarkMode(newIsDarkMode)
    localStorage.setItem('isDarkMode', newIsDarkMode.toString())
    document.getElementsByTagName('html')?.[0].classList.toggle('dark', newIsDarkMode)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('isDarkMode') === null) {
        setIsDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}