const { Router } = require('express')
const {
  typeClassHandlerGet,
  typeClassHandlerPost,
  typeClassHandlerDelete
} = require('../handlers/typeClassHandler')

const typeClassRouter = Router()

typeClassRouter.get('/', typeClassHandlerGet)
typeClassRouter.post('/', typeClassHandlerPost)
typeClassRouter.delete('/', typeClassHandlerDelete)

module.exports = typeClassRouter
