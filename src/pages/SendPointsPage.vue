<template>
    <ion-content class="send_container" ion-padding>
        <ion-toolbar class="tootbar">
            <ion-buttons slot="start">
              <ion-button default-href="/home"><i class="fa fa-arrow-left" aria-hidden="true"></i></ion-button>
            </ion-buttons>
            <ion-title class="toolbar_title">Envoyer des Points</ion-title>
          </ion-toolbar>

          <ion-grid class="grr">
            <ion-row class="ion-justify-content-between">
              <ion-col size="8"> 
                <div class="user">
                    <div class="img">
                        <img src="../theme/images/login_bg.png" alt="">
                    </div>
                    <div class="username">
                        <p class="welcome_txt">De</p>
                        <p class="username_txt">Arnaud Mugisha</p>
                    </div>
                </div>
            </ion-col>
              <ion-col size="3"> 
                <div class="user">
                    <div class="username">
                        <p class="welcome_txt">Points</p>
                        <p class="username_txt">150.00</p>
                    </div>
                </div>    
            </ion-col>
            </ion-row>
          </ion-grid>

          <div class="divider">
            <hr>
            <hr class="ee">
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>

          <ion-grid class="grr">
            <ion-row class="ion-justify-content-between">
              <ion-col size="8"> 
                <div class="user">
                    <div class="img">
                        <img src="../theme/images/login_bg.png" alt="">
                    </div>
                    <div class="username">
                        <p class="welcome_txt">A</p>
                        <ion-input  class="input_numero"
                        ref="input"
                        type="email"
                        fill="solid"
                        label=""
                        label-placement="defaut"
                        placeholder="Entrez l'identifiant ou scanner"
                      ></ion-input>
                    </div>
                </div>
            </ion-col>
              <ion-col size="3"> 
                <div class="user">
                    <div class="username">
                        <p class="qrcode"><i class="fa fa-qrcode" aria-hidden="true"></i></p>
                    </div>
                </div>    
            </ion-col>
            </ion-row>
          </ion-grid>

          <div class="montant_text">
            <p>Montant A Envoyer</p>
            <div class="a">
                <!-- <p class="welcome_txt">A</p> -->
                <ion-input  class="input_montant"
                ref="input"
                type="number"
                fill="solid"
                label=""
                label-placement="defaut"
                placeholder="Entrez le montant des points ici..."
              ></ion-input>
            </div>
          </div>
          <ion-button class="done_btn" expand="block">Envoyer</ion-button>
    </ion-content>
</template>
<script>
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
    data() {
      return {
        value: 'https://example.com',
        size: 300,
        text: "dshjjhsdf637", // Set default text here
        copied: false // Flag to track whether text has been copied
      }
    },
    methods: {
    copyText() {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
      textarea.value = this.text;
      document.body.appendChild(textarea);
      
      // Select and copy the text
      textarea.select();
      document.execCommand('copy');
      
      // Remove the textarea from the DOM
      document.body.removeChild(textarea);

      // Update copied flag
      this.copied = true;

      // Reset the copy icon after 1 second
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    }
  }

  
}
</script>
<style src="../theme/send.css" scoped>

</style>