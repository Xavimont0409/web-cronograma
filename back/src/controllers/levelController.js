const { Level } = require('../db')

const levelGet = async() => {
	return await Level.findAll()
}

const levelPost = async(level_name) => {
	const newLevel = await Level.create({
		level_name
	})
	return newLevel
}

const levelDelete = async(level_id) => {
	return await Level.destroy({
		where: {
			level_id
		}
	})
}

module.exports = {
	levelGet,
	levelPost,
	levelDelete
}