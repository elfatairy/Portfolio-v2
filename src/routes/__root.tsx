import { Outlet, createRootRoute, useRouter } from '@tanstack/react-router'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ToastContainer } from 'react-toastify';
import { LoadingProvider } from '@/contexts/LoadingContext';
import LoadingScreen from '@/components/LoadingScreen';
import { useEffect } from 'react';

function RootComponent() {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = router.subscribe('onLoad', () => {
      window.scrollTo(0, 0)
    })

    return unsubscribe
  }, [router])

  return (
    <ThemeProvider>
      <LoadingProvider>
        <LoadingScreen />
        <Outlet />
        <ToastContainer position="top-right" />
      </LoadingProvider>
    </ThemeProvider>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
