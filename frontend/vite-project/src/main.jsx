import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import BasketProvider from './context/Basketcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BasketProvider>
    <App />
    </BasketProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
