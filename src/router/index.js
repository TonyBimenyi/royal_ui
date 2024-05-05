import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from "../pages/MemoriesPage.vue"
import LoginPage from "../pages/LoginPage.vue"

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {path:'/memories', component:MemoriesPage},
  {path:'/login', component:LoginPage}
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
