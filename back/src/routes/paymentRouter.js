const { Router } = require('express')
const {
  paymentHandlerGet,
  paymentHandlerPost,
  paymentHandlerDelete
} = require('../handlers/paymentHandler')

const paymentRouter = Router()

paymentRouter.get('/', paymentHandlerGet)
paymentRouter.post('/', paymentHandlerPost)
paymentRouter.delete('/', paymentHandlerDelete)

module.exports = paymentRouter
