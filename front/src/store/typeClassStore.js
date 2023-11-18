import { create } from 'zustand'
import { getRequest } from '../services/services'

export const typeClassStore = create()((set, get) => {
  const baseUrl = 'typeClass'
  return {
    loading: false,
    typeClass: [],

    getTypeClass: async () => {
      const typeClass = await getRequest(baseUrl)
      set({ typeClass })
    }
  }
},
{
  name: 'typeClass'
})
