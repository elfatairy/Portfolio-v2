import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ToastContainer } from 'react-toastify';
import { LoadingProvider } from '@/contexts/LoadingContext';
import LoadingScreen from '@/components/LoadingScreen';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <LoadingProvider>
        <LoadingScreen />
        <Outlet />
        <ToastContainer position="top-right" />
      </LoadingProvider>
    </ThemeProvider>
  ),
})
