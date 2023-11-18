import { create } from 'zustand'
import { getRequest } from '../services/services'

export const levelStore = create()((set, get) => {
  const baseUrl = 'level'
  return {
    level: [],
    loading: false,

    getlevel: async () => {
      const level = await getRequest(baseUrl)
      set({ level })
    }
  }
},
{
  name: 'level'
})
