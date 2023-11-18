/* eslint-disable camelcase */
const { createUser, loginUser, userPut, deleteUser } = require('../controllers/userController')

const createUserPostHandler = async (req, res) => {
  const { userName, password, email } = req.body
  try {
    res.status(200).json(await createUser(userName, password, email))
  } catch (error) {
    res.status(500).json(error)
  }
}

const loginUserPostHandler = async (req, res) => {
  const { email, password } = req.body
  try {
    res.status(200).json(await loginUser(email, password))
  } catch (error) {
    res.status(500).json(error)
  }
}

const updateUserHandler = async (req, res) => {
  const { userId, userName, email, password } = req.body
  try {
    res.status(200).json(await userPut(userId, userName, email, password))
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteUserHandler = async (req, res) => {
  const { id } = req.query
  try {
    res.status(200).json(await deleteUser(id))
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  createUserPostHandler,
  loginUserPostHandler,
  updateUserHandler,
  deleteUserHandler
}
