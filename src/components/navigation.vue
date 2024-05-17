<template>
    <ion-tabs class="menu">
        <ion-router-outlet></ion-router-outlet>
        <!-- Home Tab -->
        <ion-tab-bar class="menu" slot="bottom">
  
          <ion-tab-button :class="{ 'active': $route.path === '/home' }"  tab="home">
            <router-link  class="link"  to="/home" >
           <i :class="{ 'active': $route.path === '/home'  } " class="fa fa-home" aria-hidden="true"></i><br>
            <ion-label  :class="{ 'active': $route.path === '/home'  }">Acceuil</ion-label></router-link>
          </ion-tab-button>

          <ion-tab-button  :class="{ 'active': $route.path === '/bars' }" tab="home">
            <router-link class="link" to="/bars">
            <i :class="{ 'active': $route.path === '/bars'  } " class="fa fa-glass" aria-hidden="true"></i><br>
             <ion-label :class="{ 'active': $route.path === '/bars' }">Bars</ion-label>
            </router-link>
           </ion-tab-button>

           <ion-tab-button  :class="{ 'active': $route.path === '/rewards' }" tab="home">
            <div class="rew">
              <router-link class="link_r" to="/rewards">
            <i :class="{ 'active_': $route.path === '/rewards'  } "  class="fa fa-gift" aria-hidden="true"></i><br>
             <ion-label class="txt_l" :class="{ 'active': $route.path === '/rewards' }">Prix</ion-label>
            </router-link>
            </div>
         
           </ion-tab-button>


           <ion-tab-button :class="{ 'active': $route.path === '/notifications' }" tab="home">
            <router-link  class="link" to="/notifications">
            <i :class="{ 'active': $route.path === '/notifications'}" class="fa fa-bell" aria-hidden="true"></i>
             <ion-label :class="{ 'active': $route.path === '/notifications' }">Notifications</ion-label>
            </router-link>
           </ion-tab-button>

           
           <ion-tab-button :class="{ 'active': $route.path === '/profile' }" tab="home">
            <router-link  class="link" to="/profile">
            <i :class="{ 'active': $route.path === '/profile' }" class="fa fa-user" aria-hidden="true"></i><br>
             <ion-label :class="{ 'active': $route.path === '/profile' }">Profil</ion-label>
            </router-link>
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