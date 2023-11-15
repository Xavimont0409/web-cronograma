import { useState } from 'react'
import { Home } from './home/Home'
import { Routes, Route } from 'react-router-dom'
import Alumnos from './components/Studens/Students'
import { Nav } from './components/Nav/Nav'

function App () {
  const [open, setOpen] = useState(true)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className='flex w-full'>
      <div className={` transition-all duration-200 ${open ? 'w-80' : 'w-20'}`}>
        <Nav handleOpen={handleOpen} open={open} />
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/students' element={<Alumnos />} />
      </Routes>
    </div>
  )
}

export default App
