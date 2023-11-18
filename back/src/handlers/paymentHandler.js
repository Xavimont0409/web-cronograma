/* eslint-disable camelcase */
const { paymentGet, paymentPost, paymentDelete } = require('../controllers/paymentController')

const paymentHandlerGet = async (req, res) => {
  try {
    res.status(200).json(await paymentGet())
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const paymentHandlerPost = async (req, res) => {
  const { paymentName, paymentDate } = req.body
  try {
    res.status(200).json(await paymentPost(paymentName, paymentDate))
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const paymentHandlerDelete = async (req, res) => {
  const { paymentId } = req.query
  try {
    res.status(200).json(await paymentDelete(paymentId))
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

module.exports = {
  paymentHandlerGet,
  paymentHandlerPost,
  paymentHandlerDelete
}
