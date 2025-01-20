import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Authprovider} from "./context/Authprovider.jsx"
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './context/SocketContext.jsx';
import { Buffer } from 'buffer';
window.Buffer = Buffer; // Polyfill Buffer in the global window object


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Authprovider>
      <SocketProvider>
      <App />
      </SocketProvider>
    </Authprovider>
  </BrowserRouter>
  
)
