/* eslint-disable react/prop-types */
export function CardsStudents ({ id, nombre, apellido, foto, rangoHorario, estadoPago, edad, bg }) {
  return (
    <div key={id} className={`'container p-6 rounded-lg shadow-md' ${bg}`}>
      <div className='flex flex-col items-center'>
        <p className='text-lg font-semibold mb-4'>
          {nombre} {apellido}
        </p>
        <p className='text-base text-gray-500 mb-4'>Edad: {edad}</p>
        <p className='text-base text-gray-500 mb-4'>
          {rangoHorario[0].start.slice(0, 5)} - {rangoHorario[0].end.slice(0, 5)}
        </p>
        <p className='text-base text-gray-500 mb-4'>
          {estadoPago}
        </p>
      </div>
    </div>
  )
}
