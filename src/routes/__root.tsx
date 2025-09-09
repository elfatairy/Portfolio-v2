import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <div>
        <Outlet />
      </div>
    </ThemeProvider>
  ),
})
