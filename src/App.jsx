import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './components/Registration/Registration'
import Login from './components/LogIn/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registration/>
      <Login/>
    </>
  )
}

export default App
