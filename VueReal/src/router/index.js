import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    
    },  {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    
    },{
      path: '/danger',
      name: 'danger',
      component: () => import('../views/DangerView.vue')
    
    },{
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue')
    
    }

  ]
})

export default router
