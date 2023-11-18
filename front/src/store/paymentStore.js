import { create } from 'zustand'
import { getRequest } from '../services/services'

export const paymentStore = create()((set, get) => {
  const baseUrl = 'payment'
  return {
    payment: [],
    loading: false,

    getPayment: async () => {
      const payment = await getRequest(baseUrl)
      set({ payment })
    }
  }
},
{
  name: 'payment'
})
