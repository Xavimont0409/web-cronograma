import { create } from 'zustand'
import { getRequest } from '../services/services'

export const scheduleStore = create()((set, get) => {
  const baseUrl = 'schedule'
  return {
    loading: false,
    schedule: [],

    getSchedule: async () => {
      const schedule = await getRequest(baseUrl)
      set({ schedule })
    }
  }
},
{
  name: 'schedule'
})
