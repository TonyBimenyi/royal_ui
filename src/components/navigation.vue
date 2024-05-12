<template>
    <ion-tabs class="menu">
        <ion-router-outlet></ion-router-outlet>
        <!-- Home Tab -->
        <ion-tab-bar class="menu" slot="bottom">
  
          <ion-tab-button href="/home" :class="{ 'active': $route.path === '/home' }"  tab="home">
           <i class="fa fa-home" aria-hidden="true"></i>
            <ion-label  :class="{ 'active': $route.path === '/home' }">Acceuil</ion-label>
          </ion-tab-button>

          <ion-tab-button href="/home" :class="{ 'active': $route.path === '/bars' }" tab="home">
            <i class="fa fa-glass" aria-hidden="true"></i>
             <ion-label :class="{ 'active': $route.path === '/bars' }">Bars</ion-label>
           </ion-tab-button>

           <ion-tab-button :class="{ 'active': $route.path === '/rewards' }" tab="home">
            <i class="fa fa-gift" aria-hidden="true"></i>
             <ion-label :class="{ 'active': $route.path === '/rewards' }">Rewards</ion-label>
           </ion-tab-button>


           <ion-tab-button :class="{ 'active': $route.path === '/notification' }" tab="home">
            <i class="fa fa-bell" aria-hidden="true"></i>
             <ion-label :class="{ 'active': $route.path === '/notification' }">Notifications</ion-label>
           </ion-tab-button>

           <ion-tab-button :class="{ 'active': $route.path === '/profile' }" tab="home">
            <i class="fa fa-user" aria-hidden="true"></i>
             <ion-label :class="{ 'active': $route.path === '/profile' }">Profil</ion-label>
           </ion-tab-button>

  
          <!-- Add more tab buttons for additional tabs -->
  
        </ion-tab-bar>
      </ion-tabs>
</template>
<script>
import {IonTabButton,IonTabBar,IonTabs,IonFooter,IonApp, IonRouterOutlet,IonTitle,IonButtons,IonToolbar,IonBackButton, IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton,IonLabel,IonBadge,IonGrid,IonRow,IonCol,IonCardContent} from "@ionic/vue"

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
        IonApp,
        IonRouterOutlet,
        IonFooter,
        IonTabButton,
        IonTabBar,
        IonTabs,
    },
}
</script>
<style src="../theme/navigation.css"> 

</style>