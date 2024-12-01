import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <div>
        <Button variant='primary' text='Add Content' size='lg' startIcon={<PlusIcon size='lg' />} />
        <Button variant='secondary' text='Share' size='md' startIcon={<ShareIcon size='lg' />} />
      </div>
    </>
  )
}

export default App
