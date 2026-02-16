import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardsHome from './components/CardsFolder/CardsHome'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<CardsHome/>}/>
      </Routes>
    </>
  )
}

export default App
