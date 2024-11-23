import { defineStore } from 'pinia'
import { axiosInstance } from '../axios'


export const useInterestsStore = defineStore('InterestsStore', {
  state: () => ({
        user: 1
    }),

  actions: {
    getRecommendationByInterests (interests : string[]) {
       this.user = 2
    }
  }  
})
