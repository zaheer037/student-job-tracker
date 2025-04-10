import { useState } from 'react'
import Home from './pages/Home'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen p-4 bg-gray-100">
        <Home />
      </div>
    </>
  )
}

export default App
