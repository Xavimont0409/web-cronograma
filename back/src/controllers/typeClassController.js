/* eslint-disable camelcase */
const { TypeClass } = require('../db.js')

const typeClassGet = async () => {
  return await TypeClass.findAll()
}

const typeClassPost = async (typeClassName) => {
  const findTypeClass = await TypeClass.findOne({
    where: {
      type_class_name: typeClassName
    }
  })
  if (findTypeClass) throw new Error('ALREADY_CATEGORY')

  const newTypeClass = await TypeClass.create({ type_class_name: typeClassName })
  return newTypeClass
}

const typeClassDelete = async (typeClassId) => {
  return await TypeClass.destroy({
    where: {
      type_class_id: typeClassId
    }
  })
}

module.exports = {
  typeClassGet,
  typeClassPost,
  typeClassDelete
}
