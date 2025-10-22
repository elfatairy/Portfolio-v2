import { useEffect } from "react"

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
  useEffect(() => {
    setTimeout(() => {
      hideLoadingScreen()
    }, 300)
  }, [])

  return null
}
