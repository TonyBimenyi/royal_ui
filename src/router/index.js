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
import OTPsendPage from "../pages/OTPsendPage.vue"
import RewardsPage from "../pages/RewardsPage.vue"
import NotifiPage from "../pages/NotifiPage.vue"

const routes = [
  
  {
    path: '/',
    redirect: '/home'
  },
  {path:'/memories',name:'memories', component:MemoriesPage},
  {path:'/login', component:LoginPage},
  {path:'/register',name:'register', component:RegisterPage},
  {path:'/home', name:'home',component:HomePage},
  {path:'/receive',component:ReceivePoints},
  {path:'/send',name:'send',component:SendPoints},
  {path:'/profile',component:ProfilePage},
  {path:'/bars',component:BarsPage},
  {path:'/verification',name:'verification',component:OTPPage},
  {path:'/verification-send',name:'verification-send',component:OTPsendPage},
  {path:'/rewards',name:'rewards',component:RewardsPage},
  {path:'/notifications',name:'notifications',component:NotifiPage},
 
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'hash',
  routes,
})

export default router
