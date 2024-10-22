import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <MyComponent />
  </div>
}
const MyComponentstyle = { backgroundColor: 'orange', color: 'green', fontSize: 23, padding: 10, borderRadius: 10 }
function MyComponent() {
  return (
    <div style={MyComponentstyle}>
      Jay Ganesh
      <br />
      Har Har Mahadev
      <br />
      Jay Shri Ram
      <br />
      Jay Shri Krishna
    </div>
  );
}
export default App
