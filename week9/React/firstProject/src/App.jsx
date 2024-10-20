import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PostComponent } from './Post'


function App() {

  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count + 1);
  }
  return <div>
    <div style={{ display: "flex" }}>
      <div style={{ background: "red", borderRadius: 50, width: 20, height: 25, paddingLeft: 10, paddingTop: 5, justifyContent: "center" }}>
        {count}
      </div>
    </div>
    <img style={{ cursor: "pointer" }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXrDYIdCrdQoXJZCETkOEUsuKoAo-DfJ14A&s"} width={40} />
    <button onClick={increaseCount}> Increase The Count</button>
  </div>
}
export default App
