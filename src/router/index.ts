import { createRouter, createWebHistory } from 'vue-router'
import InterestsPanel from '../views/interests-panel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'InterestsPanel',
      component: InterestsPanel,
    }
  ],
})

export default router
