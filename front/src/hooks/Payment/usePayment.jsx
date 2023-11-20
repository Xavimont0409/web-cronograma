import { paymentStore } from '../../store/paymentStore'
import { useState, useEffect } from 'react'

export function usePayment () {
  const { payment: paymentData } = paymentStore(state => state)
  const [payment, setPayment] = useState([])

  useEffect(() => {
    const newPayment = paymentData
      ?.map(item => ({
        paymentId: item.payment_id,
        value: item.payment_id,
        paymentName: item.payment_name,
        paymentDate: item.payment_date,
        name: item.payment_name
      }))
    newPayment.unshift({ paymentId: 0, value: 0, name: '[PAGO]' })
    setPayment(newPayment)
  }, [paymentData])

  return {
    payment
  }
}
