import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  return <div>
    <BrowserRouter>
      <Link to="/shrimanta">shrimanta</Link>
      <br />
      <Link to="/kasbaganpati">kasbaganpati-Manacha Phila</Link>
      <br />
      <Link to="/tambdijogeshwari">TambdiJogeshwari- Manacha Dusra</Link>
      <br />
      <Link to="/gurujitalim">Gurujitalim- Manacha Tisra</Link>
      <br />
      <Link to="/tulshibag">Tulshibag- Manacha Chautha</Link>
      <br />
      <Link to="/kesriwada">Kesriwada- Manacha Pachva</Link>
      <br />
      <Routes>
        <Route path='/ganesh' element={<Ganesh />} />
        <Route path='/kasbaganpati' element={<Manachaphila />} />
        <Route path='/shrimanta' element={<Dagdushet />} />
        <Route path='/tambdijogeshwari' element={<Manachadusra />} />
        <Route path='/gurujitalim' element={<Manachatisra />} />
        <Route path='/tulshibag' element={<Manachachautha />} />
        <Route path='/kesriwada' element={<ManachaPachva />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function HomePage() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return <div style={{ paddingLeft: 100, marginLeft: 20 }}>
    Welcome To Home Page
    <button onClick={redirectUser}>Go Back To Home Page</button>
  </div>
}

function Ganesh() {
  return <div>
    Jay Ganesh
  </div>
}

function Dagdushet() {
  return <div>
    <img src='https://t3.ftcdn.net/jpg/03/48/16/82/240_F_348168290_hy2PfoxHKsEkMTXp5DACH0w0e23Q7g8e.jpg' />
  </div>
}

function Manachaphila() {
  return <div>
    <img src='https://thumbs.dreamstime.com/b/pune-maharashtra-september-people-devotee-famous-kasba-ganpati-ganpati-festival-pune-maharashtra-september-people-291151625.jpg' />
  </div>
}

function Manachadusra() {
  return <div>
    <img src='https://www.shutterstock.com/image-photo/09-september-2024-pune-maharashtra-260nw-2514441563.jpg' />
  </div>
}

function Manachatisra() {
  return <div>
    <img src='https://media.assettype.com/esakal%2Fimport%2Fs3fs-public%2Fnews-story%2Fcover-images%2F1Guruji_Talim.jpg' />
  </div>
}

function Manachachautha() {
  return <div>
    <img src='https://i.pinimg.com/736x/ed/df/b7/eddfb744a5adb3cfddd6a0ed5a1cb7b8.jpg' />
  </div>
}

function ManachaPachva() {
  return <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqmhc0lyBioJV9TQ6sAL1iqp31XVWQ1fElQ&s' />
  </div>
}


export default App
