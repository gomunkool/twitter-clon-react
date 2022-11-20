import React from 'react'
import { Button } from '@mui/material'
import SignIn from './pages/signIn/SignIn'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
