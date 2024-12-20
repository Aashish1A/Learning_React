import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
// import App from './App.jsx'

import Render from "./Components/01. Render_MultipleElements/Render.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Render />
  </StrictMode>,
)
