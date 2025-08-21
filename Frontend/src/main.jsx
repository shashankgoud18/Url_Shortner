import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-router'
import { routeTree } from './routing/routeTree'
import { createRootRoute } from '@tanstack/react-router'

const queryClient = new QueryClient()
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
  <QueryClientProvider>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
