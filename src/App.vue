<template>
  <ion-app>
    <div class="">
      
      <ion-router-outlet />
      <navmenu> </navmenu>
    </div>
    <div class="" >
      <!-- <navmenu>
      </navmenu> -->
    </div>  
    

    <!-- <div class="" v-if="this.$route.path !== + '/login' || this.$route.path !== + '/register'">
     
    </div>
    <div class="" v-else>
      <p>asdj</p>
    </div> -->
  
  </ion-app>
</template>

<script >
import {IonApp, IonRouterOutlet,IonTitle,IonButtons,IonToolbar,IonBackButton, IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton,IonLabel,IonBadge,IonGrid,IonRow,IonCol,IonCardContent} from "@ionic/vue"
import QrcodeVue from 'qrcode.vue'
import navmenu from '../src/components/navigation.vue'
export default {
    components:{
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