import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import DefaultLayout from './layouts/DefaultLayout'

import { RouterProvider } from 'react-router-dom'
import router from './router'


function App() {
  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App
