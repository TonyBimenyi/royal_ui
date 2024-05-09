import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from "../pages/MemoriesPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"
import HomePage from "../pages/HomePage.vue"
import ReceivePoints from "../pages/ReceivePoints.vue"

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {path:'/memories', component:MemoriesPage},
  {path:'/login', component:LoginPage},
  {path:'/register', component:RegisterPage},
  {path:'/home', component:HomePage},
  {path:'/receive',component:ReceivePoints}
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
