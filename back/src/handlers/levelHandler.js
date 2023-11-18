/* eslint-disable camelcase */
const {
  levelGet,
  levelPost,
  levelDelete
} = require('../controllers/levelController')

const levelHandlerGet = async (req, res) => {
  try {
    res.status(200).json(await levelGet())
  } catch (error) {
    res.status(500).json(error)
  }
}

const levelHanlderPost = async (req, res) => {
  const { levelName } = req.body
  try {
    res.status(200).json(await levelPost(levelName))
  } catch (error) {
    res.status(500).json(error)
  }
}

const levelHandlerDelete = async (req, res) => {
  const { levelId } = req.body
  try {
    res.status(200).json(await levelDelete(levelId))
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  levelHandlerGet,
  levelHanlderPost,
  levelHandlerDelete
}
