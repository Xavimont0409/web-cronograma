/* eslint-disable camelcase */
const { createUser, loginUser, userPut, deleteUser } = require('../controllers/userController')

const createUserPostHandler = async (req, res) => {
  const { user_name, password, email } = req.body
  try {
    res.status(200).json(await createUser(user_name, password, email))
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
  const { user_id, user_name, email, password } = req.body
  try {
    res.status(200).json(await userPut(user_id, user_name, email, password))
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
