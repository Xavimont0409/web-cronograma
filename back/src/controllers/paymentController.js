/* eslint-disable camelcase */
const { Payment } = require('../db.js')

const paymentGet = async () => {
  return await Payment.findAll()
}

const paymentPost = async (paymentName, paymentDate) => {
  const findPayment = await Payment.findOne({ where: { payment_name: paymentName } })

  if (findPayment) throw new Error('ALREADY_PAYMENT')

  const newPayment = await Payment.create({
    payment_name: paymentName,
    payment_date: paymentDate
  })

  return newPayment
}

const paymentDelete = async (paymentId) => {
  return await Payment.detroy({
    where: {
      payment_id: paymentId
    }
  })
}

module.exports = {
  paymentGet,
  paymentPost,
  paymentDelete
}
