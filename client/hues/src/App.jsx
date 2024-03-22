import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hues from './assets/logos/Hues.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
          <img src={Hues} className="logo" alt="Vite logo" />
        
      
      </div>
      <h1>Hues</h1>
      
    </>
  )
}

export default App
