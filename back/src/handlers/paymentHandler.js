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
  const { payment_name, payment_date } = req.body
  try {
    res.status(200).json(await paymentPost(payment_name, payment_date))
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const paymentHandlerDelete = async (req, res) => {
  const { payment_id } = req.query
  try {
    res.status(200).json(await paymentDelete(payment_id))
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
