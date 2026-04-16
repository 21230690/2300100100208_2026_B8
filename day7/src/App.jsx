import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  function fun()
  {
    alert ("Welcome in HTML")
  }

  return (
    <>
      <h1>enent handling in react</h1>
      <button onClick="fun()">Click</button>
    </>
  )
}

export default App
