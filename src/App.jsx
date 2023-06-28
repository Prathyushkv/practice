import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route} from 'react-router-dom'
import One from './pages/One.jsx'
import Two from './pages/Two.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<One/>}/>
        <Route path="/Two" element={<Two/>}/>
      </Routes>
    </>
  )
}

export default App
