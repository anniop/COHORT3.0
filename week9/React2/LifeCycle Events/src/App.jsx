import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isShown, setIsShown] = useState(true);
  return <div>
    <div>
      {isShown && <MyComponent />}
    </div>
  </div>
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Rendered or Updated");
  }, [count]);

  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Mounting");
    }
  });

  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <p> Count : {count}</p>
      <button onClick={increaseCount}> Increment</button>
    </div>
  )
}

export default App
