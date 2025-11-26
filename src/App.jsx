import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import logo from "./assets/images/logo.svg"



function App() {

  const [isDark, setIsDark] = useState(false)

  return (
    <main className='app' data-theme={isDark ? "dark" : "light"}>
      
      <header>
        <img src={logo} alt="" />

        <form action="">
          
        </form>

      </header>
      
    </main>
  )
}

export default App
