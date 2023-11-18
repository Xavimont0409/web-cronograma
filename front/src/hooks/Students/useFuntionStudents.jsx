import { useForm } from 'react-hook-form'
// import { useEffect, useState } from 'react'
import { studentsStore } from '../../store/studentsStore'

export function useFuntionUsers () {
  const {
    createStudents,
    updateStudents,
    closeModal
  } = studentsStore(state => state)
  const { register, handleSubmit, control, formState: { errors } } = useForm()

  const onSubmit = async (values) => {
    try {
      values.editMode
        ? await updateStudents(values)
        : await createStudents(values)
      closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    onSubmit,
    register,
    handleSubmit,
    control,
    errors
  }
}
