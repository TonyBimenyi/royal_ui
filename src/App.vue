<template>
  <ion-app>
    <div>
      <!-- Check if the user is not logged in -->
      <div v-if="!$store.state.user">
        <!-- Display the registration page -->
        <register-page></register-page>
        <!-- Display the login page -->
        <login-page></login-page>
        
      </div>
      <!-- If the user is logged in, display the main content -->
      <div v-else>
        <!-- Check if the current route is not the registration page -->
        <div v-if="$route.path !== '/register'">
          <navmenu></navmenu>
        </div>
        <!-- Display the registration page -->
        <div v-else>
          <register-page></register-page>
        </div>
      </div>
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
import {IonApp, IonRouterOutlet,IonTitle,IonButtons,IonToolbar,IonBackButton, IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton,IonLabel,IonBadge,IonGrid,IonRow,IonCol,IonCardContent} from "@ionic/vue"
import QrcodeVue from 'qrcode.vue'
import navmenu from '../src/components/navigation.vue'
export default {
    components:{
      RegisterPage,
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
  mounted(){
      this.$store.commit("initializeStore")
  }
}
</script>