import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import State from './Components/05. State/State';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State />
  </StrictMode>,
)
