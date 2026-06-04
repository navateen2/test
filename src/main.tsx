import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import LoginPage from './components/LoginPage.tsx'
// import FormPage from './components/FormPage.tsx'
// import Chat from './components/chat.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <LoginPage />

  </StrictMode>,
)