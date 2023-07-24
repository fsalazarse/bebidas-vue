import { createRouter, createWebHistory } from 'vue-router'
import inicioView from '../views/inicioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicioView
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritoView.vue')
    }
  ]
})

export default router
