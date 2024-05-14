<template>
    <ion-page>
    <ion-content class="bars_content">
        <ion-toolbar class="tootbar">
            <ion-buttons>
              <ion-button default-href="/home"><i class="fa fa-arrow-left" aria-hidden="true"></i></ion-button>
            </ion-buttons>
            <ion-title class="toolbar_title">Envoyer des Points</ion-title>
        </ion-toolbar>

        <ion-card class="card">
            <img  class="logo_" src="../theme/images/logo2.png" alt="">
            <div class="triangle"></div>
                <div class="texts">
                    <div class="bar_name">
                        <h1>Zanzi Bar</h1>
                    </div>
                    <div class="address">
                        <p>Quartier Asiatique, Avenue, No2</p>
                    </div>
                </div>
          </ion-card>

          <ion-card class="card">
            <img  class="logo_" src="../theme/images/logo2.png" alt="">
            <div class="triangle"></div>
                <div class="texts">
                    <div class="bar_name">
                        <h1>Arena Bar</h1>
                    </div>
                    <div class="address">
                        <p>Quartier Rohero, Avenue de la RDC, No6</p>
                    </div>
                </div>
          </ion-card>
    </ion-content>
</ion-page>
</template>
<script >
import {IonTitle,IonButtons,IonToolbar,IonBackButton, IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton,IonLabel,IonBadge,IonGrid,IonRow,IonCol,IonCardContent} from "@ionic/vue"
import QrcodeVue from 'qrcode.vue'
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
        QrcodeVue
    },
}
</script>
<style src="../theme/bars.css" scoped>

</style>