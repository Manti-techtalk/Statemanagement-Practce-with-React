import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Calculator from './Calculator'
import Todo from './Todo'
import Shopping from './Shopping'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter></Counter>
    <Calculator></Calculator><br />
    <Todo></Todo>
    <Shopping></Shopping>
    </>
  )
}

export default App
