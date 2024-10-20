import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentTad, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loding, setLoding] = useState(true);

  useEffect(function () {
    setLoding(true);
    fetch('https://jsonplaceholder.typicode.com/todos/' + currentTad)
      .then(async res => {
        const json = await res.json();
        setTabData(json)
        setLoding(false);
      });

  }, [currentTad])
  return <div>
    <button onClick={() => {
      setCurrentTab(1)
    }} style={{ color: currentTad == 1 ? "red" : "black" }}>Todo #1</button>

    <button onClick={() =>
      setCurrentTab(2)} style={{ color: currentTad == 2 ? "red" : "black" }}> Todo #2</button>

    <button onClick={() => {
      setCurrentTab(3)
    }} style={{ color: currentTad == 3 ? "red" : "black" }}> Todo #3</button>

    <button onClick={() => {
      setCurrentTab(4)
    }} style={{ color: currentTad == 4 ? "red" : "black" }} > Todo #4</button>
    <br />
    {loding ? "Loding..." : tabData.title}
  </div>
}
export default App
