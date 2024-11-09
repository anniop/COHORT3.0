import { useRef } from "react";

function App() {
  const inputRef = useRef();
  const passRef = useRef();
  function focusOnInput() {
    inputRef.current.focus();
  }
  function focusOnOutput() {
    passRef.current.focus();
  }
  return <div>
    Jay Ganesh
    <br />
    <input ref={inputRef} type="text" ></input>
    <br />
    <input ref={passRef} type="text"></input>
    <br />
    <button onClick={focusOnInput}>Submit</button>
    <button onClick={focusOnOutput}>Jay Ganesh</button>
  </div>
}

export default App
