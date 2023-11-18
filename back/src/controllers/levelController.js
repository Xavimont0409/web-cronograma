/* eslint-disable camelcase */
const { Level } = require('../db')

const levelGet = async () => {
  return await Level.findAll()
}

const levelPost = async (level_name) => {
  const findLevel = await Level.findOne({
    where: {
      level_name
    }
  })
  if (findLevel) throw new Error('ALREADY_LEVEL')
  const newLevel = await Level.create({ level_name })
  return newLevel
}

const levelDelete = async (level_id) => {
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
