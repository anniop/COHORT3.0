import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <Postcomponent />
            <br />
          </div>
          <div>
            <Postcomponent />
            <br />
          </div>
          <div>
            <Postcomponent />
            < br />
          </div>
        </div>
      </div>


    </div>
  )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1 }

function Postcomponent() {
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgv-9IviwCaDDguYAxucbkz3VZaILxreUB7w&s"}
        style={{
          width: 30,
          height: 30,
          borderRadius: 20
        }} />
      <div style={{ fontSize: 14, marginLeft: 20 }}>
        <b>
          100xDevs
        </b>
        <div> 23,777 Followers </div>
        <div> 12m </div>
      </div>
    </div>
    <div style={{ fontSize: 17 }}>
      Jay Ganesh Jay Ganesh
    </div>

  </div>

}

export default App
