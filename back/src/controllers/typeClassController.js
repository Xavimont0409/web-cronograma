/* eslint-disable camelcase */
const { TypeClass } = require('../db.js')

const typeClassGet = async () => {
  return await TypeClass.findAll()
}

const typeClassPost = async (type_class_name) => {
  const findTypeClass = await TypeClass.findOne({
    where: {
      type_class_name
    }
  })
  if (findTypeClass) throw new Error('ALREADY_CATEGORY')

  const newTypeClass = await TypeClass.create({ type_class_name })
  return newTypeClass
}

const typeClassDelete = async (type_class_id) => {
  return await TypeClass.destroy({
    where: {
      type_class_id
    }
  })
}

module.exports = {
  typeClassGet,
  typeClassPost,
  typeClassDelete
}
