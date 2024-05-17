<template>
  <ion-page>
    <ion-content class="receive_content">
        <ion-toolbar class="tootbar">
            <ion-buttons slot="start">
              <ion-back-button default-href="/home">Retour</ion-back-button>
            </ion-buttons>
            <ion-title class="toolbar_title">Receivez les Points</ion-title>
          </ion-toolbar>

          <div class="address">
            <h1>Votre  QrCode</h1>
          </div>

          <ion-card class="cardw">
            <div class="qrcode-container">
              <qrcode-vue class="qrcode" :value="$store.getters.user.code" :size="150" level="L" margin="1" background="#B88409" foreground="#FFFCEF"/>
            </div>
            <div class="img_log">
             <img class="overlay-image" src="../theme/images/logo2.png" alt="Overlay Image">
            </div>
          </ion-card>
          <div class="text-with-copy">
            <div class="text"><span>Votre Code:</span> {{this.$store.getters.user.code}}</div>
            <button class="copy-button" @click="copyText">
              <p v-if="!copied"><i  class="fa fa-clone"></i> Copier</p> <!-- Display copy icon if not copied -->
              <p v-else><i  class="fa fa-check"></i> Copié</p> <!-- Display checkmark icon if copied -->
            </button>
          </div>
          <div class="address">
            <h1>Comment recevoir les points</h1>
          </div>
          <div class="listMethod">
            <ul >
                <li >Méthode du code QR
                    <ul>
                         <li>Partagez votre code unique avec l'expéditeur</li>
                         <li>Ils peuvent scanner votre code à l'aide de leur application pour envoyer des points directement sur votre compte</li>
                     </ul>
                 </li>
                 <li >Méthode d'adresse
                     <ul>
                         <li>Vous pouvez également partager votre adresse de réception avec l'expéditeur</li>
                         <li>Ils peuvent saisir votre adresse manuellement dans leur application pour envoyer des points sur votre compte</li>
                     </ul>
                 </li>
            </ul>
          </div>
    </ion-content>
  </ion-page>
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
        value: 'asdsadasdasd',
        size: 300,
        text: this.$store.getters.user.code, // Set default text here
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
<style src="../theme/receive.css" scoped>

</style>