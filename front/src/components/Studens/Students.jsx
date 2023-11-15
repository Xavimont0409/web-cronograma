import { CardsStudents } from './CardsStudents'

const StudentsData = [
  {
    id: 1,
    nombre: 'John',
    apellido: 'Doe',
    foto: 'https://via.placeholder.com/150',
    rangoHorario: 'Mañana',
    estadoPago: 'Aldia',
    edad: 25
  },
  {
    id: 2,
    nombre: 'Jane',
    apellido: 'Smith',
    foto: 'https://via.placeholder.com/150',
    rangoHorario: 'Tarde',
    estadoPago: 'PorVencer',
    edad: 30
  },
  {
    id: 2,
    nombre: 'Jane',
    apellido: 'Smith',
    foto: 'https://via.placeholder.com/150',
    rangoHorario: 'Tarde',
    estadoPago: 'Atrasado',
    edad: 30
  },
  {
    id: 2,
    nombre: 'Jane',
    apellido: 'Smith',
    foto: 'https://via.placeholder.com/150',
    rangoHorario: 'Tarde',
    estadoPago: 'Aldia',
    edad: 30
  },
  {
    id: 2,
    nombre: 'Jane',
    apellido: 'Smith',
    foto: 'https://via.placeholder.com/150',
    rangoHorario: 'Tarde',
    estadoPago: 'PorVencer',
    edad: 30
  },
  {
    id: 2,
    nombre: 'Jane',
    apellido: 'Smith',
    foto: 'https://via.placeholder.com/150',
    rangoHorario: 'Tarde',
    estadoPago: 'Atrasado',
    edad: 30
  },
  {
    id: 2,
    nombre: 'Jane',
    apellido: 'Smith',
    foto: 'https://via.placeholder.com/150',
    rangoHorario: 'Tarde',
    estadoPago: 'PorVencer',
    edad: 30
  }
]

export default function Alumnos () {
  return (
    <div className='container px-3.5 mx-auto m-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
      {
        StudentsData.map(item => (
          <CardsStudents
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            apellido={item.apellido}
            foto={item.foto}
            rangoHorario={item.rangoHorario}
            estadoPago={item.estadoPago}
            edad={item.edad}
            bg={item?.estadoPago === 'Aldia' ? 'bg-green-200' : item?.estadoPago === 'PorVencer' ? 'bg-orange-200' : 'bg-red-200'}
          />
        ))
      }
    </div>
  )
}
