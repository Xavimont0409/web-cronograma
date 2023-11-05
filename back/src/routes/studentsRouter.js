const { Router } = require('express')
const {
	studentsHandlerGet,
	studentsHandletPut,
	studentsHandlerPost,
	studentsHandlerDelete
} = require('../handlers/studentsHandlers')

const studentsRouter = Router()

studentsRouter.get('/', studentsHandlerGet)
studentsRouter.post('/', studentsHandlerPost)
studentsRouter.put('/', studentsHandletPut)
studentsRouter.delete('/', studentsHandlerDelete)

module.exports = studentsRouter