const { Router } = require('express')
const {
  createUserPostHandler,
  loginUserPostHandler,
  updateUserHandler,
  deleteUserHandler
} = require('../handlers/userHandler')

const userRouter = Router()

userRouter.post('/', createUserPostHandler)
userRouter.post('/', loginUserPostHandler)
userRouter.put('/', updateUserHandler)
userRouter.delete('/', deleteUserHandler)

module.exports = userRouter
