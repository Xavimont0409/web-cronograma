import { create } from 'zustand'

export const usersStore = create()((set, get) => ({
	users: [],
}))