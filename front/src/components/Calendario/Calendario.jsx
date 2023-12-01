import { useHookStudents } from '../../hooks/Students/useHookStudents'
import { ModalCalendar } from './ModalCalendar'
import { Button } from '../../utils/Button'
import { useLevel } from '../../hooks/Level/useLevel'
import { usePayment } from '../../hooks/Payment/usePayment'
import { useSchedule } from '../../hooks/Schedule/useSchedule'
import { CalendarTable } from './CalendarTable'

export default function Calendario () {
  const { level } = useLevel()
  const { payment } = usePayment()
  const { schedule } = useSchedule()
  const {
    openModal,
    // updateData,
    // loading,
    showModal,
    closeModal,
    setUpdateData,
    // onSubmit,
    register,
    handleSubmit,
    control,
    errors
  } = useHookStudents()

  const handleOpenModal = () => {
    setUpdateData({ editMode: false })
    showModal()
  }
  return (
    <div className='w-full h-screen'>
      <Button
        text='registrar'
        type='submit'
        className='btn-primary'
        handleClick={handleOpenModal}
      />
      <CalendarTable />
      {openModal && (
        <ModalCalendar
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          errors={errors}
          showModal={showModal}
          closeModal={closeModal}
          schedule={schedule}
          level={level}
          payment={payment}
        />
      )}
    </div>
  )
}
