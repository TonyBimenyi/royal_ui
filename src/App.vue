<template>
  <ion-app>
    <div>
      <!-- Check if the user is not logged in -->
      <div v-if="!$store.state.user">
        <!-- Display the registration page -->
        <forget-page v-if="forget"></forget-page>
        <otp-view @registerEmitted="handlerRegisterEmit" v-if="otp "></otp-view>
        <register-page @loginEmitted="handlerLoginEmit" @OTPEmitted="handlerOTPEmit" v-if="register"></register-page>
        <login-page @forgetEmitted="handleForgetEmit" @registerEmitted="handlerRegisterEmit" v-if="login "></login-page>
        <otp-page  @registerEmitted="handlerRegisterEmit" v-if="otp "></otp-page>

        
        
      
      
        <!-- Display the login page -->
       
        
      </div>
      <div v-else class="">
        <navmenu></navmenu>
      </div>
      <!-- If the user is logged in, display the main content -->
 
    </div>

    

    <!-- <div class="" v-if="this.$route.path !== + '/login' || this.$route.path !== + '/register'">
     
    </div>
    <div class="" v-else>
      <p>asdj</p>
    </div> -->
  
  </ion-app>
</template>

<script >
import LoginPage from "./pages/LoginPage.vue"
import RegisterPage from "./pages/RegisterPage.vue"
import otpView from "../src/pages/OTPPage.vue"
import ForgetPage from "./pages/ForgetPage.vue"
import {IonApp, IonRouterOutlet,IonTitle,IonButtons,IonToolbar,IonBackButton, IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton,IonLabel,IonBadge,IonGrid,IonRow,IonCol,IonCardContent} from "@ionic/vue"
import QrcodeVue from 'qrcode.vue'
import navmenu from '../src/components/navigation.vue'
export default {
    components:{
      RegisterPage,
      otpView,
      ForgetPage,
      LoginPage,
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonList,
        IonItem,
        IonInput,
        IonIcon,
        IonButton,  
        IonLabel,
        IonBadge,
        IonGrid,
        IonRow,
        IonCol,
        IonCardContent,
        IonToolbar,
        IonBackButton,
        IonTitle,
        IonButtons,
        QrcodeVue,
        IonApp,
        IonRouterOutlet,
        navmenu
    },
    data(){
      return{
        login:true,register:true,otp:true,forget:true
      }
    },
    methods:{
      init(){
      this.login=false
      this.register=false
      this.otp=false
      this.forget=false
    },
    handlerRegisterEmit(){
      this.init()
      this.register=true
    },
    handlerOTPEmit(){
      this.init()
      this.otp=true
    },
    handlerLoginEmit(){
      this.init()
      this.login=true
    },
    handleForgetEmit(){
      this.init()
      this.forget=true
    }
    },
  mounted(){
      this.$store.commit("initializeStore")
  }
}
</script>