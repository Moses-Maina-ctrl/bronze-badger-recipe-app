import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DrinkProvider } from './context/drinks.context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DrinkProvider>
      <App />
    </DrinkProvider>
  </React.StrictMode>,
)
