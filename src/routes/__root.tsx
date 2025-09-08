import { Outlet, createRootRoute } from '@tanstack/react-router'

import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
    </>
  ),
})
