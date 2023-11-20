import { studentsStore } from '../../store/studentsStore'
import { useState, useEffect } from 'react'

export function useStudents () {
  const { students: studentsData } = studentsStore(state => state)
  const [students, setStudents] = useState([])

  useEffect(() => {
    const newUser = studentsData
      ?.map(item => ({
        studentId: item.student_id,
        studentName: item.student_name,
        studenLastName: item.studen_last_name,
        age: item.age,
        gender: item.gender,
        email: item.email,
        phone: item.phone,
        guardianName: item.guardian_name,
        typeOfRelation: item.type_of_relation,
        schedules: item.Schedules.map(item => ({
          scheduleId: item.schedule_id,
          start: item.start,
          end: item.end
        })),
        levels: item.Levels.map(item => ({
          levelId: item.level_id,
          levelName: item.level_name
        })),
        typeClasses: item.TypeClasses.map(item => ({
          typeClassId: item.type_class_id,
          typeClassName: item.type_class_name
        })),
        payments: item.Payments.map(item => ({
          paymentId: item.payment_id,
          paymentName: item.payment_name,
          paymentDate: item.payment_date
        }))
      }))
    setStudents(newUser)
  }, [studentsData])
  return {
    students
  }
}
