import { memo, useEffect, useState } from 'react'
import './App.css'

function App() {

  return (
    <Counter />
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 3000);
  });

  return <div>
    <CurrentCount count={count} />
    <Increase />
    <Decrease />
  </div>
}


const CurrentCount = memo(function ({ count }) {
  return <div>
    {count}
  </div>
})

const Decrease = memo(function () {


  function decrease() {
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})

const Increase = memo(function () {


  function increase() {
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

export default App
