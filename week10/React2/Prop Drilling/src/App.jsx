import { useState } from 'react'
import './App.css'

function App() {
  const [bulbOn, setBulbOn] = useState(true)
  return <div>
    <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function Light({ bulbOn, setBulbOn }) {

  return <div>
    {/* bulbOn is a prop to the bulb state component */}
    <LightBulb bulbOn={bulbOn} />
    <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function LightBulb({ bulbOn }) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function LightSwitch({ bulbOn, setBulbOn }) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)

  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
