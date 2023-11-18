const { Router } = require('express')
const levelRouter = require('./levelRouter')
const scheduleRouter = require('./scheduleRouter')
const studentsRouter = require('./studentsRouter')
const typeClassRouter = require('./typeClassRouter')
const userRouter = require('./userRouter')
const paymentRouter = require('./paymentRouter')

const router = Router()

router.use('/level', levelRouter)
router.use('/schedule', scheduleRouter)
router.use('/students', studentsRouter)
router.use('/typeClass', typeClassRouter)
router.use('/users', userRouter)
router.use('/payment', paymentRouter)

module.exports = router
