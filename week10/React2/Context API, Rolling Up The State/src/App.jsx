import { useState } from "react"

function App() {
  return <div>
    <LightBulb />
  </div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToogleBulbState setBulbOn={setBulbOn} />
  </div>
}

function BulbState({ bulbOn }) {
  return <div>
    {bulbOn ? "Bulb is On" : "Bulb is off"}
  </div>
}

function ToogleBulbState({ setBulbOn }) {
  function toogle() {
    // setBulbOn(currentState => !currentState); // The currentState => !currentState means if the variable is true it will make it false and if it is false it will make it true
    setBulbOn(function (currentState) {
      if (currentState == true) {
        return false;
      } else {
        return true
      }
    })
  }
  return <div>
    <button onClick={toogle}>Toogle The Bulb</button>
  </div>
}


export default App
