import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardContextProvider from './Context/CardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardContextProvider>
    <App />
    </CardContextProvider>
  </StrictMode>,
)
