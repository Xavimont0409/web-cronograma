const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
	res.send('Hello World!')
	console.log('Hello World!');
})

module.exports = router