import { useState, useEffect } from 'react'
import { Home } from './home/Home'
import { Routes, Route } from 'react-router-dom'
import Students from './components/Studens/Students'
import { Nav } from './components/Nav/Nav'
import Calendario from './components/Calendario/Calendario'
import { levelStore } from './store/levelStore'
import { paymentStore } from './store/paymentStore'
import { scheduleStore } from './store/scheduleStore'
import { studentsStore } from './store/studentsStore'
import { typeClassStore } from './store/typeClassStore'

function App () {
  const { getlevel } = levelStore(state => state)
  const { getPayment } = paymentStore(state => state)
  const { getSchedule } = scheduleStore(state => state)
  const { getStudents } = studentsStore(state => state)
  const { getTypeClass } = typeClassStore(state => state)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    getlevel()
    getPayment()
    getSchedule()
    getStudents()
    getTypeClass()
  }, [getPayment, getSchedule, getStudents, getTypeClass, getlevel])
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
        <Route path='/students' element={<Students />} />
        <Route path='/calendario' element={<Calendario />} />
      </Routes>
    </div>
  )
}

export default App
