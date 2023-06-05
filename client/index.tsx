import { createRoot } from 'react-dom/client'

import App from './components/App'
import { RouterProvider } from 'react-router-dom'
import routes from './routers'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={routes} />
  )
})
