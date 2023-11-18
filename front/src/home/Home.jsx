import React, { useEffect } from 'react'
import BackGroundImage from '../assets/BackGround/Headear/fondoHeadear.jpeg'
import { levelStore } from '../store/levelStore'
import { paymentStore } from '../store/paymentStore'
import { scheduleStore } from '../store/scheduleStore'
import { studentsStore } from '../store/studentsStore'
import { typeClassStore } from '../store/typeClassStore'

export function Home () {
  const { getlevel } = levelStore(state => state)
  const { getPayment } = paymentStore(state => state)
  const { getSchedule } = scheduleStore(state => state)
  const { getStudents } = studentsStore(state => state)
  const { getTypeClass } = typeClassStore(state => state)

  useEffect(() => {
    getlevel()
    getPayment()
    getSchedule()
    getStudents()
    getTypeClass()
  }, [getPayment, getSchedule, getStudents, getTypeClass, getlevel])

  return (
    <div className='h-screen bg-gray-50 flex flex-col items-center'>
      <section
        className='w-full'
        style={{
          backgroundImage: `url(${BackGroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className='container mx-auto text-center text-white py-24'>
          <h1 className='text-5xl font-black mb-6 uppercase shadow-sm'>
            Escuela de danza
          </h1>
          <p className='text-xl mb-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            viverra euismod odio, gravida pellentesque urna varius vitae.
          </p>
        </div>
      </section>
    </div>
  )
}
