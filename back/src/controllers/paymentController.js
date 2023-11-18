/* eslint-disable camelcase */
const { Payment } = require('../db.js')

const paymentGet = async () => {
  return await Payment.findAll()
}

const paymentPost = async (payment_name, payment_date) => {
  const findPayment = await Payment.findOne({ where: { payment_name } })

  if (findPayment) throw new Error('ALREADY_PAYMENT')

  const newPayment = await Payment.create({ payment_name, payment_date })

  return newPayment
}

const paymentDelete = async (payment_id) => {
  return await Payment.detroy({
    where: {
      payment_id
    }
  })
}

module.exports = {
  paymentGet,
  paymentPost,
  paymentDelete
}
