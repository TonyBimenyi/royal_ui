<template>
    <ion-content class="receive_content">
        <ion-toolbar class="tootbar">
            <ion-buttons slot="start">
              <ion-back-button default-href="/home">Back</ion-back-button>
            </ion-buttons>
            <ion-title class="toolbar_title">Receive Points</ion-title>
          </ion-toolbar>

          <div class="address">
            <h1>Your Address</h1>
          </div>

          <ion-card class="cardw">
            <qrcode-vue class="qrcode" :value="'dshjjhsdf637'" :size="200" level="H" margin="0" background="black" foreground="white"/>
            <div class="img_log">
             <img class="overlay-image" src="../theme/images/royale_logo.png" alt="Overlay Image">
            </div>
          </ion-card>
          <div class="text-with-copy">
            <div class="text"><span>Your Code:</span> {{ text }}</div>
            <button class="copy-button" @click="copyText">
              <p v-if="!copied"><i  class="fa fa-clone"></i> Copy</p> <!-- Display copy icon if not copied -->
              <p v-else><i  class="fa fa-check"></i> Copied</p> <!-- Display checkmark icon if copied -->
            </button>
          </div>
          <div class="address">
            <h1>Receiving Points Guide</h1>
          </div>
          <div class="listMethod">
            <ul >
                <li >QR Code Method
                    <ul>
                        <li>Share your unique code with sender</li>
                        <li>They can scan your code using their app to send points directly to your account</li>
                    </ul>
                </li>
                <li >Address Method
                    <ul>
                        <li>Alternatively, share your receiving address with the sender</li>
                        <li>They can enter your address manually in their app to send points to your account</li>
                    </ul>
                </li>
            </ul>
          </div>
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
<style src="../theme/receive.css" scoped>

</style>