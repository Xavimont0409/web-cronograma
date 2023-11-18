import { useFuntionUsers } from './useFuntionStudents'
import { studentsStore } from '../../store/studentsStore'
import { useStudents } from './useStudents'

export function useHookStudents () {
  const {
    openModal,
    updateData,
    loading,
    showModal,
    closeModal,
    setUpdateData
  } = studentsStore(state => state)

  const {
    onSubmit,
    register,
    handleSubmit,
    control,
    errors
  } = useFuntionUsers()

  const { students } = useStudents()

  return {
    openModal,
    updateData,
    loading,
    showModal,
    closeModal,
    setUpdateData,
    onSubmit,
    register,
    handleSubmit,
    control,
    errors,
    students
  }
}
