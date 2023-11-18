/* eslint-disable camelcase */
const { User } = require('../db.js')
const { encrypt, verified } = require('../utils/password.js')
const { generateToken } = require('../utils/jwt.js')

const createUser = async (userName, password, email) => {
  const findUser = await User.findOne({ where: { user_name: userName, email } })

  if (findUser) throw new Error('ALREADY_USER')

  const passHash = await encrypt(password)

  const registerNewUser = await User.create({ user_name: userName, password: passHash, email })

  return registerNewUser
}

const loginUser = async (email, password) => {
  const checkUser = await User.findOne({ where: { email } })

  if (!checkUser) throw new Error('NOT_FOUND_USER')

  const passwordHash = await checkUser.password
  const isCorrect = await verified(password, passwordHash)

  if (!isCorrect) throw new Error('NOT_FOUND_USER')

  const token = generateToken(checkUser.user_id)

  const data = {
    token,
    user: checkUser
  }
  return data
}

const userPut = async (userId, userName, email, password) => {
  const checkUser = await User.findOne({ where: { user_id: userId } })

  const passHash = await encrypt(password)

  if (userName) checkUser.user_name = userName
  if (email) checkUser.email = email
  if (password) checkUser.password = passHash

  const updateUser = await checkUser.save()

  return updateUser
}

const deleteUser = async (id) => {
  return await User.destroy({ where: { id } })
}

module.exports = {
  createUser,
  loginUser,
  userPut,
  deleteUser
}
