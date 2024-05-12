import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from "../pages/MemoriesPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"
import HomePage from "../pages/HomePage.vue"
import ReceivePoints from "../pages/ReceivePoints.vue"
import SendPoints from "../pages/SendPointsPage.vue"
import ProfilePage from "../pages/ProfilePage.vue"
import BarsPage from "../pages/BarsPage.vue"
import OTPPage from "../pages/OTPPage.vue"

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {path:'/memories', component:MemoriesPage},
  {path:'/login', component:LoginPage},
  {path:'/register', component:RegisterPage},
  {path:'/home', component:HomePage},
  {path:'/receive',component:ReceivePoints},
  {path:'/send',component:SendPoints},
  {path:'/profile',component:ProfilePage},
  {path:'/bars',component:BarsPage},
  {path:'/verification',component:OTPPage},
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
