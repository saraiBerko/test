import { defineStore } from 'pinia'

export const useBaseStore = defineStore('BaseStore', {
  state: () => ({
        userID: '123' as string
    })
})
