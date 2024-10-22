import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      {[
        <Todo key={1} title={"Go To Gym"} done={false} />,

        <Todo key={2} title={"Eat Food"} done={true} />
      ]}
    </div>
  )
}

function Todo({ title, done }) {
  return <div>
    {title} - {done ? "Done!!" : "Not Done!!"}
  </div>
}

export default App
