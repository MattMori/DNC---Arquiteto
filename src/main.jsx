import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { AppProvider } from './contexts/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
  </StrictMode>,
)
