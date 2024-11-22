import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {
  return <div>
    <div className='h-screen bg-blue-700 content-center items-center flex flex-col justify-center '>
      <br /> <br /> <br />
      <Input type="text" placeholder={"Username"}></Input>
      <Button disabled={false}>SignUp</Button>
    </div>
  </div>
}

export default App
