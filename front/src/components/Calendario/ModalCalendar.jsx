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
  schedule
}) {
  const onSubmitForm = (data) => {
    console.log(data)
  }
  return (
    <div>
      <Modal onSubmit={handleSubmit(onSubmitForm)} closeModal={closeModal} title='Crear Alumno'>
        <ModalContent
          register={register}
          control={control}
          errors={errors}
          level={level}
          payment={payment}
          schedule={schedule}
        />
        <div className='flex gap-4'>
          <Button text='registrar' icon={<Save />} type='submit' className='btn-primary' />
          <Button text='cancelar' icon={<Return />} type='submit' className='btn-cancel' />
        </div>
      </Modal>
    </div>
  )
}
