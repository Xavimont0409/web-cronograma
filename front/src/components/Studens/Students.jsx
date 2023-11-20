import { CardsStudents } from './CardsStudents'
import { useHookStudents } from '../../hooks/Students/useHookStudents'

export default function Students () {
  const {
    students
  } = useHookStudents()

  return (
    <div className='container px-3.5 mx-auto m-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
      {
        students.map(item => (
          <CardsStudents
            key={item.studentId}
            id={item.studentId}
            nombre={item.studentName}
            apellido={item.studenLastName}
            rangoHorario={item?.schedules}
            estadoPago={item?.payments[0].paymentName}
            edad={item.age}
            bg={item?.payments[0].paymentName === 'PAGADO' ? 'bg-green-200' : item?.payments[0].paymentName === 'PENDIENTE' ? 'bg-orange-200' : 'bg-red-200'}
          />
        ))
      }
    </div>
  )
}
