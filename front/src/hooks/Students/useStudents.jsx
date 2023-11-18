import { studentsStore } from '../../store/studentsStore'
import { useState, useEffect } from 'react'

export function useStudents () {
  const { students: studentsData } = studentsStore(state => state)
  const [students, setStudents] = useState([])

  useEffect(() => {
    const newUser = studentsData
      ?.filter(item => item.status === true)
      ?.map(item => ({
        studentId: item.student_id,
        studentName: item.student_name,
        studenLastName: item.studen_last_name,
        age: item.age,
        gender: item.gender,
        email: item.email,
        phone: item.phone,
        guardianName: item.guardian_name,
        typeOfRelation: item.type_of_relation
      }))
    setStudents(newUser)
  }, [studentsData])
  return {
    students
  }
}
