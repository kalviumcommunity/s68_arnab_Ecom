import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Form, Route, Routes } from 'react-router-dom'
import { Dashboard } from './Page/dashboard'
import { Signup } from './Component/Signup'
import { Login } from './Component/Login'
import { Forms } from './Component/form'
import { Update } from './Component/update'
import { Deletes } from './Component/delete'

function App() {
 

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Forms />} />
      <Route path="/dashboard/:id" element={<Update />} />
      <Route path="/dashboard/:id" element={<Deletes />} />  
    </Routes>  
    </>
  )
}

export default App
