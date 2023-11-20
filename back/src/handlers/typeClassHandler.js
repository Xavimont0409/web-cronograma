/* eslint-disable camelcase */
const {
  typeClassGet,
  typeClassPost,
  typeClassDelete
} = require('../controllers/typeClassController')

const typeClassHandlerGet = async (req, res) => {
  try {
    res.status(200).json(await typeClassGet())
  } catch (error) {
    res.status(500).json(error)
  }
}

const typeClassHandlerPost = async (req, res) => {
  const { typeClassName } = req.body
  try {
    res.status(200).json(await typeClassPost(typeClassName))
  } catch (error) {
    res.status(500).json(error)
  }
}

const typeClassHandlerDelete = async (req, res) => {
  const { typeClassId } = req.body
  try {
    res.status(200).json(await typeClassDelete(typeClassId))
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  typeClassHandlerGet,
  typeClassHandlerPost,
  typeClassHandlerDelete
}
