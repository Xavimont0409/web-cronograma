/* eslint-disable react/prop-types */
import { InputFiel } from '../../utils/InputFiel'
import { InputSelect } from '../../utils/InputSelect'

export function ModalContent ({
  register,
  control,
  errors,
  level,
  payment,
  schedule
}) {
  return (
    <section>
      <div className='grid grid-cols-6 gap-5 pb-5'>
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
      </div>
      <div className='grid grid-cols-6 gap-5 pb-5'>
        <InputFiel
          register={register} errors={errors} labelText='Phone' name='phone' placeholder='Enter the phone number'
          requiredText='This field is required'
        />
        <InputFiel
          register={register} errors={errors} labelText='Email' name='email'
          placeholder='Enter the email' requiredText='This field is required'
        />
        <InputSelect
          labelText='Class Type' name='classType' control={control} options={schedule}
        />
      </div>
      <div className='grid grid-cols-6 gap-5 pb-5'>
        <InputSelect
          labelText='Payment Type' name='paymentType' control={control} options={payment}
        />
        <InputSelect
          register={register} errors={errors} control={control} name='level' labelText='Nivel' options={level}
        />
      </div>
    </section>
  )
}
