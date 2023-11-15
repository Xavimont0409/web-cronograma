const { Router } = require('express')
const {
  scheduleHandlerGet,
  scheduleHandlerPost,
  scheduleHandlerDelete
} = require('../handlers/scheduleHandler')

const scheduleRouter = Router()

scheduleRouter.get('/', scheduleHandlerGet)
scheduleRouter.post('/', scheduleHandlerPost)
scheduleRouter.delete('/', scheduleHandlerDelete)

module.exports = scheduleRouter
