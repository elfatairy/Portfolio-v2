import { useLoading } from "@/contexts/LoadingContext"
import { useEffect, useState } from "react"

const hideLoadingScreen = () => {
  document.getElementById('static-loading-text-name')?.classList.add('opacity-0', 'transition-opacity', 'duration-500')
  document.getElementById('static-loading-text-portfolio')?.classList.add('opacity-0', 'transition-opacity', 'duration-500', 'delay-200')
  setTimeout(() => {
    document.getElementById('static-loading')?.classList.add('opacity-0', 'transition-opacity', 'duration-300')
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
    setTimeout(() => {
      document.getElementById('static-loading')?.remove()
    }, 300)
  }, 500)
}

export default function LoadingScreen() {
  const [timeoutted, setTimeoutted] = useState(false)
  const { isLoading } = useLoading()

  useEffect(() => {
    setTimeout(() => {
      setTimeoutted(true)
    }, 500)

    setTimeout(() => {
      hideLoadingScreen()
    }, 4000)
  }, [])

  useEffect(() => {
    if (!isLoading && timeoutted) {
      hideLoadingScreen()
    }
  }, [isLoading, timeoutted])

  return null
}
