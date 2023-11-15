import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { usersStore } from '../../store/usersStore'

export function useFuntionUsers () {
  const {
    createAttention,
    updateAttention,
    closeModal
  } = usersStore(state => state)
  const { register, handleSubmit, control, formState: { errors } } = useForm()

  const onSubmit = async (values) => {
    try {
      values.editMode
        ? await updateAttention(values)
        : await createAttention(values)
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
