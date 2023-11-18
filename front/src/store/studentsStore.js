import { create } from 'zustand'
import { getRequest, createRequest, updateRequest } from '../services/services'

export const studentsStore = create()((set, get) => {
  const baseURL = 'students'

  return {
    students: [],
    openModal: false,
    updateData: {},
    loading: false,
    limit: 500,
    fullRows: 0,
    page: 1,

    getStudents: async () => {
      const students = await getRequest(baseURL)
      set({ students })
    },

    createStudents: async (data) => {
      const students = await createRequest(baseURL, data)
      set((state) => ({ user: [...state.students, students] }))
    },

    updateStudents: async (data) => {
      const updateStudents = await updateRequest(baseURL, data)
      const { students } = get()
      const newUser = structuredClone(students)
      const updateArray = newUser.map(obj => {
        if (obj.student_id === updateStudents.student_id) {
          return updateStudents.student_id
        } else {
          return obj
        }
      })
      set({ students: updateArray })
    },
    showModal: async () => {
      set({ openModal: true })
    },

    closeModal: async () => {
      set({ openModal: false })
    },

    setUpdateData: async (data) => {
      set({ updateData: data })
    }
  }
})
