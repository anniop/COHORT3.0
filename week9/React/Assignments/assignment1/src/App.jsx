import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  return <div>
    <div style={{ display: "flex" }}>
      <div style={{ background: "#ff80ed", height: 20, width: 20, borderRadius: 50, paddingTop: 5, paddingLeft: 7, paddingBottom: 5, paddingRight: 7 }}>
        {count}
      </div>
    </div>
    <img src={"https://cdn-icons-png.flaticon.com/512/472/472371.png"} style={{ cursor: "pointer", width: 40 }} />
    <div>
      <button onClick={increaseCount}> Click Me!!</button>
    </div>
  </div>
}

export default App
