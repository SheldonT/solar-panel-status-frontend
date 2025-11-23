import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { SocketProvider } from './contexts/socketContext'

createRoot(document.getElementById('root')).render(
  <SocketProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </SocketProvider>
);