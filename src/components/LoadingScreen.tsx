import { useLoading } from "@/contexts/LoadingContext"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [timeoutted, setTimeoutted] = useState(false)
  const { isLoading } = useLoading()

  const hideLoadingScreen = () => {
    document.getElementById('static-loading-text-name')?.classList.add('opacity-0', 'transition-opacity', 'duration-500')
    document.getElementById('static-loading-text-portfolio')?.classList.add('opacity-0', 'transition-opacity', 'duration-500', 'delay-200')
    setTimeout(() => {
      document.getElementById('static-loading')?.classList.add('opacity-0', 'transition-opacity', 'duration-300')
      setTimeout(() => {
        document.getElementById('static-loading')?.remove()
      }, 300)
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
      setTimeoutted(true)
    }, 1500)

    setTimeout(() => {
      hideLoadingScreen()
    }, 5000)
  }, [])

  useEffect(() => {
    if (!isLoading && !timeoutted) {
      // hideLoadingScreen()
    }
  }, [isLoading, timeoutted])

  return null
}
