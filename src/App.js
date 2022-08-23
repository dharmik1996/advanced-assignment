import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { User } from './Components/View'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
