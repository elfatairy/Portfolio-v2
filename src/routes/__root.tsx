import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ToastContainer } from 'react-toastify';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <div>
        <Outlet />
        <ToastContainer position="top-right" />
      </div>
    </ThemeProvider>
  ),
})
