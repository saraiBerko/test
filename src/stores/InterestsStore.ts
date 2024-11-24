import { defineStore } from 'pinia'
import { axiosInstance } from '../axios'


export const useInterestsStore = defineStore('InterestsStore', {
  state: () => ({
        recommendations: {} ,
        displayedComponent: 'create'
    }),

  actions: {
    setDisplayedComponent (payload : string) {
      this.displayedComponent = payload
    },

    async getRecommendationByInterests (interests : string[], userID : string) {
      const key = Object.keys(interests)[0]
      await this.getUserDataFromCache(key)
      if (!Object.keys(this.recommendations).length) {
        return axiosInstance.post('http://localhost:8080', {
          user_id: userID,
          preferences: interests
        }).then((response : Object) => {
          this.recommendations[key] = []
          this.recommendations[key].push(response.recommendations)
          this.saveRecommendationsInCache()
        }).catch(() => {
          if(key === '0') {
            this.recommendations[key] = [[
            "Book: 'Dune' by Frank Herbert",
            "Article: 'The Future of AI in Space Travel'",
            "Movie: 'Interstellar'"]]
          } else {
             this.recommendations[key] = [[
            "Book: 'sdfnsjmdbf' ",
            "Article: 'sdfsfsdf'",
            "Movie: 'dsdfsdfdsf'"]]
          }
          
             this.saveRecommendationsInCache()
        })
      } else {
        this.setDisplayedComponent('get')
      }
    },
    saveRecommendationsInCache () {
      window.inMemoryCache  = window.inMemoryCache || {}
      window.inMemoryCache.userRecommendations = window.inMemoryCache.userRecommendations || []
      window.inMemoryCache.userRecommendations.push(this.recommendations)
      this.setDisplayedComponent('get')
    },
    getUserDataFromCache (key) {
      if (window.inMemoryCache && window.inMemoryCache.userRecommendations && window.inMemoryCache.userRecommendations[key]) {
        this.recommendations = window.inMemoryCache.userRecommendations[key]
      } else {
        this.recommendations = {}
      }
    }
  }  
})
