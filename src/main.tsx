// main.tsx or main.js (depending on your setup)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Policy } from './pages/Policy' // Adjust the path as needed
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="./policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
