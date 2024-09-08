import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
})
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
      <App />
</QueryClientProvider>
)
