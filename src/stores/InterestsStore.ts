import { defineStore } from 'pinia'
import { axiosInstance } from '../axios'


export const useInterestsStore = defineStore('InterestsStore', {
  state: () => ({
        recommendations: {} as Object,
        displayedComponent: 'create' as string,
        recommendationError: '' as string
    }),

  actions: {
     // set the main content component - create or get 
    setDisplayedComponent (payload : string) {
      this.displayedComponent = payload
    },

    async getRecommendationByInterests (interests : string[], userID : string) {
      const key = Object.keys(interests)[0]
      // check if the relevant information is not in cache.
      await this.getUserDataFromCache(key)
      if (!Object.keys(this.recommendations).length) {
        return axiosInstance.post('http://localhost:8080', {
          user_id: userID,
          preferences: interests
        }).then((response : Object) => {
          this.recommendations[key] = []
          this.recommendations[key].push(response.recommendations)
          this.saveRecommendationsInCache()
        }).catch((error) => {
          // error handling
          if (error.statusCode && error.statusCode !== 200) {
            this.recommendationError = error.body['error']
            return
          }
          // mock the llm response
          if(key === '0') {
            this.recommendations[key] = [[
            "Book: 'Dune' by Frank Herbert",
            "Article: 'The Future of AI in Space Travel'",
            "Movie: 'Interstellar'"]]
          } else {
             this.recommendations[key] = [[
            "Book: 'Harry Potter and the Sorcerer's Stone' by J.K. Rowling",
            "Movie: 'The Lord of the Rings' Trilogy'",
            "Game: 'The Legend of Zelda'"]]
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
      // display recommendation component
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
