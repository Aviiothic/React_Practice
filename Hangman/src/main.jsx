import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
//BroserRouter ek component hai

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App /> {/* now we have wrapped App inside the BrowserRouter component*/}
      {/* isse fayda ye hai ki puri ki puri app component ki hierachy me browserRouter ki capabilities enable ho jayegi*/}
    </BrowserRouter>
  </StrictMode>,
)
