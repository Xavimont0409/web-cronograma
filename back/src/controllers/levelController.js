/* eslint-disable camelcase */
const { Level } = require('../db')

const levelGet = async () => {
  return await Level.findAll()
}

const levelPost = async (levelName) => {
  const findLevel = await Level.findOne({
    where: {
      level_name: levelName
    }
  })
  if (findLevel) throw new Error('ALREADY_LEVEL')
  const newLevel = await Level.create({ level_name: levelName })
  return newLevel
}

const levelDelete = async (levelId) => {
  return await Level.destroy({
    where: {
      level_id: levelId
    }
  })
}

module.exports = {
  levelGet,
  levelPost,
  levelDelete
}
