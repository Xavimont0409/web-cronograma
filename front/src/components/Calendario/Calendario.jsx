import { useHookStudents } from '../../hooks/Students/useHookStudents'
import { ModalCalendar } from './ModalCalendar'
import { useLevel } from '../../hooks/Level/useLevel'
import { usePayment } from '../../hooks/Payment/usePayment'
import { useSchedule } from '../../hooks/Schedule/useSchedule'
import { useTypeClass } from '../../hooks/TypeClass/useTypeClass'
import { CalendarTable } from './CalendarTable'
import { useState } from 'react'

export default function Calendario () {
  const { level } = useLevel()
  const { payment } = usePayment()
  const { schedule } = useSchedule()
  const { typeClass } = useTypeClass()
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
  const [startHour, setStartHour] = useState()
  const [endHour, setEndHour] = useState()
  const [levelId, setLevelId] = useState()
  const [typeClassId, setTypeClassId] = useState()
  const [gender, setGender] = useState()
  const [dateCreate, setDateCreate] = useState()
  const [date, setDate] = useState('')
  const [useCreates, setUserCreate] = useState([])
  console.log(useCreates)

  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }
  const handleChangeName = (e) => {
    setGender(e.target.options[e.target.selectedIndex].text)
  }

  const handleOpenModal = () => {
    setUpdateData({ editMode: false })
    showModal()
  }
  return (
    <div className='w-full h-screen'>
      <CalendarTable
        handleOpenModal={handleOpenModal}
        setStartHour={setStartHour}
        setEndHour={setEndHour}
        setDateCreate={setDateCreate}
        setDate={setDate}
      />
      {openModal && (
        <ModalCalendar
          date={date}
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          errors={errors}
          showModal={showModal}
          closeModal={closeModal}
          schedule={schedule}
          level={level}
          payment={payment}
          startHour={startHour}
          endHour={endHour}
          typeClass={typeClass}
          handleChange={handleChange}
          setLevelId={setLevelId}
          setTypeClassId={setTypeClassId}
          levelId={levelId}
          typeClassId={typeClassId}
          handleChangeName={handleChangeName}
          gender={gender}
          dateCreate={dateCreate}
          setUserCreate={setUserCreate}
        />
      )}
    </div>
  )
}
