/* eslint-disable react/prop-types */
import { InputFiel } from '../../utils/InputFiel'
import { InputSelect } from '../../utils/InputSelect'

export function ModalContent ({
  register,
  control,
  errors,
  level,
  payment,
  schedule,
  typeClass,
  handleChange,
  setLevelId,
  setTypeClassId,
  handleChangeName
}) {
  const gender = [
    { id: 0, name: '[GENERO]', value: 0 },
    { id: 1, name: 'MASCULINO', value: 1 },
    { id: 2, name: 'FEMENINO', value: 2 }
  ]
  return (
    <section>
      <div className='grid grid-cols-6 gap-5 pb-5'>
        <InputFiel
          register={register}
          errors={errors}
          labelText='Nombre'
          name='studentName'
          placeholder='Nombre'
          requiredText='This field is required'
        />
        <InputFiel
          register={register}
          errors={errors}
          labelText='Apellido'
          name='studenLastName'
          placeholder='Apellido'
          requiredText='This field is required'
        />
        <InputFiel
          register={register}
          errors={errors}
          labelText='Edad'
          name='age'
          placeholder='Edad'
          requiredText='This field is required'
        />
      </div>
      <div className='grid grid-cols-6 gap-5 pb-5'>
        <InputFiel
          register={register}
          errors={errors}
          labelText='Nombre del padre o madre'
          name='guardianName'
          placeholder='Nombre del padre o madre'
          requiredText='This field is required'
        />
        <InputFiel
          register={register}
          errors={errors}
          labelText='Parentesco'
          name='typeOfRelation'
          placeholder='Parentesco'
          requiredText='This field is required'
        />
        <InputFiel
          register={register}
          errors={errors}
          labelText='Telefono'
          name='phone'
          placeholder='Telefono'
          requiredText='This field is required'
        />
      </div>
      <div className='grid grid-cols-6 gap-5 pb-5'>
        <InputSelect
          register={register}
          errors={errors}
          control={control}
          name='gender'
          labelText='Genero'
          onChange={e => handleChangeName(e)}
          options={gender}
        />
        <InputSelect
          register={register}
          errors={errors}
          control={control}
          name='level'
          labelText='Nivel'
          options={level}
          onChange={e => handleChange(e, setLevelId)}
        />
        <InputSelect
          register={register}
          errors={errors}
          control={control}
          name='typeClass'
          labelText='tipo de clase'
          options={typeClass}
          onChange={e => handleChange(e, setTypeClassId)}
        />
      </div>
    </section>
  )
}
