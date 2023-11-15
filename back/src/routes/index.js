const { Router } = require('express')
const levelRouter = require('./levelRouter')
const scheduleRouter = require('./scheduleRouter')
const studentsRouter = require('./studentsRouter')
const typeClassRouter = require('./typeClassRouter')
const userRouter = require('./userRouter')

const router = Router()

router.use('/level', levelRouter)
router.use('/schedule', scheduleRouter)
router.use('/students', studentsRouter)
router.use('/typeClass', typeClassRouter)
router.use('/users', userRouter)

module.exports = router