/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import {
  Appointment,
  BarsNav,
  Doctor,
  Order,
  Patient,
  Setting
} from '../../icons/icons'

export function Nav ({ handleOpen, open }) {
  return (
    <section className='text-stone-600 normal-case pt-10 bg-stone-50/20 border-r border-stone-300 h-full w-full flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center sticky top-10'>
        <div
          className={`flex justify-between items-start w-full pb-10 ${
            open ? 'pb-10' : 'pb-[58px]'
          }`}
        >
          <Link to='/'>
            <img className={`w-32 ${open ? 'block' : 'hidden'}`} alt='logo' />
          </Link>
          <button onClick={handleOpen}>
            <BarsNav />
          </button>
        </div>
        {open
          ? (
            <nav className='flex flex-col items-start gap-4 font-bold text-xl'>
              <Link to='/home' className='flex gap-2 items-center justify-center'>
                <Appointment /> Home
              </Link>
              <Link
                to='/students'
                className='flex gap-2 items-center justify-center'
              >
                <Order />
                Alumnos
              </Link>
              <Link
                to='/calendario'
                className='flex gap-2 items-center justify-center'
              >
                <Patient />
                Calendario
              </Link>
              <Link to='/*' className='flex gap-2 items-center justify-center'>
                <Doctor />
                Otra vista
              </Link>
              <Link to='/*' className='flex gap-2 items-center justify-center'>
                <Setting />
                Otra vista
              </Link>
            </nav>
            )
          : (
            <nav className='flex flex-col items-start gap-4'>
              <Link to='/home' className='flex gap-2 items-center justify-center'>
                <Appointment />
              </Link>
              <Link
                to='/students'
                className='flex gap-2 items-center justify-center'
              >
                <Order />
              </Link>
              <Link
                to='/calendario'
                className='flex gap-2 items-center justify-center'
              >
                <Patient />
              </Link>
              <Link to='/*' className='flex gap-2 items-center justify-center'>
                <Doctor />
              </Link>
              <Link to='/*' className='flex gap-2 items-center justify-center'>
                <Setting />
              </Link>
            </nav>
            )}
      </div>
    </section>
  )
}
