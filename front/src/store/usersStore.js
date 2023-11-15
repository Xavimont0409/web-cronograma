import { create } from 'zustand'

export const usersStore = create()((set, get) => {
  const baseURL = 'user'

  return {
    user: [],
    openModal: false,
    updateData: {},
    loading: false,
    limit: 500,
    fullRows: 0,
    page: 1,

    createAttention: async (data) => {
      const user = await createRequest(baseURL, data)
      set((state) => ({ user: [...state.user, attention.body.user] }))
    },

    updateAttention: async (data) => {
      const updateUser = await updateRequest(baseURL, data)
      const { user } = get()
      const newUser = structuredClone(user)
      const updateArray = newUser.map(obj => {
        if (obj.student_id === updateUser.body.user.student_id) {
          return updateUser.body.student_id
        } else {
          return obj
        }
      })
      set({ user: updateArray })
    },
    getUser: async () => {
      const user = await getRequest(baseURL)
      set({ user })
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
