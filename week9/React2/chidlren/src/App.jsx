import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return <div style={{ display: "flex" }}>

    <Card><div style={{ color: "green" }}> Har Har Mahadev <br /> <br />
      <input type={"text"}></input>
    </div>
    </Card>
    <Card>
      <div style={{ color: "orange" }}> Jay Ganesh</div>
    </Card>
  </div>
}

function Card({ children }) {
  return <div style={{ background: "black", borderRadius: 10, color: "white", padding: 10, margin: 10 }}>
    {children}
  </div>
}

export default App
