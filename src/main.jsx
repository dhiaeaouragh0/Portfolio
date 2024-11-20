/**
 * @copyright 2024 DHIAEAOURAGH
 * @license apache-2.0
 */

/**
 * Node Modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Components
 */
import App from './App.jsx'

/**
 * CSS
 */
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
