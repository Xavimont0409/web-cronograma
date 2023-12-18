/* eslint-disable react/prop-types */
import { Modal } from '../../utils/Modal'
import { InputFiel } from '../../utils/InputFiel'
import { InputSelect } from '../../utils/InputSelect'

export function ModalAddStudent ({ closeModal, register, control, errors }) {
  return (
    <div>
      <Modal closeModal={closeModal} title='Crear Alumno' />
      <InputFiel name='name' register={register} errors={errors} labelText='Nombre' />
      <InputFiel name='name' register={register} errors={errors} labelText='Apellido' />
      <InputFiel name='name' register={register} errors={errors} labelText='Nombre apoderado' />
      <InputFiel name='name' register={register} errors={errors} labelText='Edad' />
      <InputFiel name='name' register={register} errors={errors} labelText='Telefono' />
      <InputFiel type='date' name='name' register={register} errors={errors} labelText='Fecha de nacimiento' />
      <InputSelect name='name' register={register} errors={errors} control={control} />
    </div>
  )
}
