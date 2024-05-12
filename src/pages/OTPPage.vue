<template>
   <ion-content class="otp_content">
    <ion-toolbar class="tootbar">
        <ion-buttons>
          <ion-button default-href="/home"><i class="fa fa-arrow-left" aria-hidden="true"></i></ion-button>
        </ion-buttons>
        <ion-title class="toolbar_title">Verification OTP</ion-title>
    </ion-toolbar>
    <div class="img_">
        <img src="../theme//images/otp.png" alt="Your Image">
    </div>
    <div class="txt_otp">
        <p>Entrez l'OTP envoyer au <span>+257 76 16 97 02</span></p>
    </div>
    <div class="otp-input-container">
        <input
          v-for="(input, index) in otpInputs"
          :key="index"
          v-model="otpInputs[index]"
          type="tel"
          maxlength="1"
          @input="handleInput(index, $event)"
          @paste="handlePaste(index, $event)"
          class="otp-input"
          ref="otpInput"
        />
      </div>
      <div class="resend_otp">
        <p>Vous n'avez pas recu le code? <span>Renvoyer.</span></p>
    </div>
    <ion-button class="done_btn" expand="block">Verifier</ion-button>
   </ion-content>
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
    data() {
      return {
        otpInputs: Array(6).fill(''), // Array to hold OTP input values
      };
    },
    methods: {
      handleInput(index, event) {
        // Move focus to the previous input field on "delete" key press
        if (event.inputType === 'deleteContentBackward' && index > 0) {
          // Delete value in current input field
          this.otpInputs[index] = '';
          // Move focus to the previous input field
          this.$refs.otpInput[index - 1].focus();
        }
        // Move focus to the next input field when a number is entered
        else if (index < 5 && this.otpInputs[index] !== '') {
          this.$refs.otpInput[index + 1].focus();
        }
      },
      handlePaste(index, event) {
        // Prevent pasting multiple characters into a single input field
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text');
        if (/^\d$/.test(pastedData)) {
          this.otpInputs[index] = pastedData;
          // Move focus to the next input field
          if (index < 5) {
            this.$refs.otpInput[index + 1].focus();
          }
        }
      },
    },
  };
  </script>
  
  <style src="../theme/otp.css" scoped>

  </style>
  