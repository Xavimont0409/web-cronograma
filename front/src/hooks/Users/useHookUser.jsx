import { useFuntionUsers } from './useFuntionUser'
import { usersStore } from '../../store/usersStore'
import { useUser } from './useUser'

export function useHookUser () {
  const {
    openModal,
    updateData,
    loading,
    showModal,
    closeModal,
    setUpdateData
  } = usersStore(state => state)

  const {
    onSubmit,
    register,
    handleSubmit,
    control,
    errors
  } = useFuntionUsers()

  const { users } = useUser()

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
    users
  }
}
