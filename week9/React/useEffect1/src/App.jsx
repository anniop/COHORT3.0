import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  function increaseCount() {
    console.log("Jay Ganesh")
    setCount(function (currentValue) {
      return currentValue + 1;
    });
  }
  function decreaseCount() {
    setCount2(function (currentValue) {
      return currentValue - 1;
    })
  }
  useEffect(function () {
    console.log("Jay Ganesh")
    setInterval(increaseCount, 1000)
    setInterval(decreaseCount, 1000)

  }, []);

  useEffect(function () {
    console.log("The Count has been updated to " + count);
  }, [count, count2]);

  return (
    <div>
      {count} {count2}
    </div>
  )



}



export default App
