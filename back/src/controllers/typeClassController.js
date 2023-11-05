const { TypeClass } = require('../db.js')

const typeClassGet = async() => {
	return await TypeClass.findAll()
}

const typeClassPost = async(data) => {
	const newTypeClass = await TypeClass.create(data)
	return newTypeClass
}

const typeClassDelete = async(type_class_id) => {
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