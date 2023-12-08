import { typeClassStore } from '../../store/typeClassStore'
import { useState, useEffect } from 'react'

export function useTypeClass () {
  const { typeClass: typeClassData } = typeClassStore(state => state)
  const [typeClass, setTypeClass] = useState([])

  useEffect(() => {
    const newTypeClass = typeClassData
      ?.map(item => ({
        typeClassId: item.type_class_id,
        typeClassName: item.type_class_name,
        name: String(item.type_class_name).toUpperCase(),
        value: item.type_class_id
      }))
    newTypeClass.unshift({ spuId: 0, value: 0, name: '[TIPO DE CLASE]' })
    setTypeClass(newTypeClass)
  }, [typeClassData])
  return {
    typeClass
  }
}
