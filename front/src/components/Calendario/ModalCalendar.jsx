/* eslint-disable react/prop-types */
import { Modal } from '../../utils/Modal'
import { ModalContent } from './ModalContent'
import { Button } from '../../utils/Button'
import { Save, Return } from '../../icons/icons'
export function ModalCalendar ({
  register,
  control,
  errors,
  handleSubmit,
  closeModal,
  level,
  payment,
  schedule,
  startHour,
  typeClass,
  handleChange,
  setLevelId,
  setTypeClassId,
  levelId,
  typeClassId,
  handleChangeName,
  gender,
  dateCreate,
  date,
  setUserCreate
}) {
  const fechaSeleccionada = new Date(date)
  const esMartesOJueves = (fecha) => {
    const diaDeLaSemana = fecha.getDay()
    return diaDeLaSemana === 2 || diaDeLaSemana === 4
  }
  const createAllSchedules = () => {
    let diasEncontrados = 1
    const fechaActual = new Date(fechaSeleccionada)
    console.log(fechaSeleccionada)
    while (diasEncontrados < 8) {
      // Avanzar al siguiente día
      fechaActual.setDate(fechaActual.getDate() + 1)

      // Verificar si es martes o jueves
      if (esMartesOJueves(fechaActual)) {
        setUserCreate({
          start: fechaActual.toISOString()
        })

        diasEncontrados++
      }
    }
  }

  const idSchedule = () => {
    const findId = schedule.filter(item => item.start === startHour)
    return findId[0].scheduleId
  }
  const onSubmitForm = (data) => {
    createAllSchedules()
    console.log({
      ...data,
      scheduleId: idSchedule(),
      age: Number(data.age),
      levelId: Number(levelId),
      typeClassId: Number(typeClassId),
      gender,
      dateCreate,
      email: fechaSeleccionada // modificar imail por dia de creacion
    })
  }
  return (
    <div>
      <Modal
        onSubmit={handleSubmit(onSubmitForm)}
        closeModal={closeModal}
        title='Crear Alumno'
      >
        <ModalContent
          register={register}
          control={control}
          errors={errors}
          level={level}
          payment={payment}
          schedule={schedule}
          typeClass={typeClass}
          handleChange={handleChange}
          setLevelId={setLevelId}
          setTypeClassId={setTypeClassId}
          handleChangeName={handleChangeName}
        />
        <div className='flex gap-4'>
          <Button
            text='registrar'
            icon={<Save />}
            type='submit'
            className='btn-primary'
          />
          <Button
            text='cancelar'
            icon={<Return />}
            type='submit'
            className='btn-cancel'
          />
        </div>
      </Modal>
    </div>
  )
}
