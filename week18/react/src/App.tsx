import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <button onClick={increaseCount}>{count}</button>
  )
}

export default App
