import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MeshProvider from './context/MeshContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeshProvider>
    <App />
    </MeshProvider>
  </StrictMode>,
)
