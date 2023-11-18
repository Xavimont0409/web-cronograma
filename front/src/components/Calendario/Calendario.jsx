import { useState } from 'react'
import { Modal } from '../../utils/Modal'
import { InputFiel } from '../../utils/InputFiel'
import { InputSelect } from '../../utils/InputSelect'
import { useHookUser } from '../../hooks/Users/useHookUser'
import { Button } from '../../utils/Button'
import { Save, Return } from '../../icons/icons'

export default function Calendario () {
  const {
    // openModal,
    // updateData,
    // loading,
    // showModal,
    // closeModal,
    // setUpdateData,
    // onSubmit,
    register,
    handleSubmit,
    control,
    errors
    // users
  } = useHookUser()
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const onSubmitForm = (data) => {
    console.log(data)
    handleCloseModal()
  }

  const optionsClassType = [
    { value: 'class1', name: 'Class 1' },
    { value: 'class2', name: 'Class 2' }
    // Add more options as needed
  ]

  const optionPayment = [
    { value: 'Payment 1', name: 'Payment 1' },
    { value: 'Payment 2', name: 'Payment 2' }
    // Add more options as needed
  ]
  return (
    <div>
      {/* Open the modal when clicking a button or link */}
      <button onClick={handleOpenModal}>Add/Update Student</button>

      {/* Modal for adding or updating a student */}
      {openModal && (
        <Modal closeModal={handleCloseModal} title='Add/Update Student' onSubmit={handleSubmit(onSubmitForm)}>
          {/* First Row */}
          <InputFiel
            register={register} errors={errors} labelText='Name' name='name'
            placeholder='Enter the name' requiredText='This field is required'
          />
          <InputFiel
            register={register} errors={errors} labelText='Last Name' name='lastName'
            placeholder='Enter the last name' requiredText='This field is required'
          />
          <InputFiel
            register={register} errors={errors} labelText="Guardian's Name" name='guardianName'
            placeholder="Enter the guardian's name" requiredText='This field is required'
          />

          {/* Second Row */}
          <InputFiel
            register={register} errors={errors} labelText='Phone' name='phone' placeholder='Enter the phone number'
            requiredText='This field is required'
          />
          <InputFiel
            register={register} errors={errors} labelText='Email' name='email'
            placeholder='Enter the email' requiredText='This field is required'
          />
          <InputSelect
            labelText='Class Type' name='classType' control={control} options={optionsClassType}
          />

          {/* Third Row */}
          <InputSelect
            labelText='Payment Type' name='paymentType' control={control} options={optionPayment}
          />
          <InputFiel
            register={register} errors={errors} labelText='Level' name='level' placeholder='Enter the level'
            requiredText='This field is required'
          />

          {/* Buttons */}
          <div className='col-span-3 flex justify-end items-center mt-4'>
            <Button type='submit' text='registrar' className='btn-primary' icon={<Save />} />
            <Button text='Cancelar' type='button' handleClick={handleCloseModal} className='btn-cancel' icon={<Return />} />
          </div>
        </Modal>
      )}
    </div>
  )
}
