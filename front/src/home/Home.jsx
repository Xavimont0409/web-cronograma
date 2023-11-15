import React from 'react'
import BackGroundImage from '../assets/BackGround/Headear/fondoHeadear.jpeg'

export function Home () {
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
