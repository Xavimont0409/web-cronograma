import { usersStore } from "../../store/usersStore";
import { useState, useEffect } from "react";

export function useUser () {
  const { users: usersData } = usersStore(state => state)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const newUser = usersData
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
    setUsers(newUser)  
  }, [usersData])
  return {
    users
  }
}