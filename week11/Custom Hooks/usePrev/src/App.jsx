import { useState } from "react"
import { usePrev } from "./hooks/usePrev"

function App() {
  const [state, setState] = useState(0);
  const previous = usePrev(state);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => {
        setState(curr => curr + 1);
      }}>Click Me</button>
      <p>The Previous Value was {previous}</p>
    </div>
  )
}


export default App
