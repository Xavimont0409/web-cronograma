/* eslint-disable react/prop-types */
export function CardsStudents ({ id, nombre, apellido, foto, rangoHorario, estadoPago, edad, bg }) {
  return (
    <div key={id} className={`'container p-6 rounded-lg shadow-md' ${bg}`}>
      <img
        src={foto}
        alt={`Foto de ${nombre} ${apellido}`}
        className='w-30 h-30 rounded-full mb-4 mx-auto'
      />
      <div className='flex flex-col items-center'>
        <p className='text-lg font-semibold mb-2'>
          {nombre} {apellido}
        </p>
        <p className='text-base text-gray-500'>Edad: {edad}</p>
        <p className='text-base text-gray-500 mb-2'>
          Rango Horario: {rangoHorario}
        </p>
        <p className='text-base text-gray-500 mb-2'>
          Estado de pago: {estadoPago}
        </p>
      </div>
    </div>
  )
}
