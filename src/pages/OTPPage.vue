<template>
  <ion-page>
   <ion-content class="otp_content">
    
    <ion-toolbar class="tootbar">
        <ion-buttons >
          <ion-button ><i class="fa fa-arrow-left" aria-hidden="true"></i></ion-button>
        </ion-buttons>
        <ion-title class="toolbar_title">Verification OTP</ion-title>
    </ion-toolbar>
    <div v-if="message !== null" class="message-toast">
      <div v-if="message === 0" class="error_messag">
          <p>Numéro detéléphone déja utilisé</p>
      </div>
      <div v-if="message === 2" class="error_messag">
          <p>une erreur est apparu lors de l'enregistrement</p>
      </div>
      <div v-if="message === 4" class="error_messag">
          <p>Les mot de passes ne sont pas identiques</p>
      </div>
      <div v-else-if="message === 1" class="success_messag">
          <p>Ajouté avec succés</p>
      </div>
    </div>        
    <div class="img_">  
        <img src="../theme//images/otp.png" alt="Your Image">
    </div>
    <div class="txt_otp">
        <p>Entrez l'OTP envoyer au <span>+257 76 16 97 02</span></p>
    </div>
    <p style="color:black">First Name: {{ formData.Fname }}</p>
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
    <ion-button @click="submit" class="done_btn" expand="block">Verifier</ion-button>
   </ion-content>
  </ion-page>
  </template>
  
  <script>
  import axios from 'axios'
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
        form: {
          Fname: '',
          Lname: '',
          password: '',
          phone: '',
          confirm_pass :'',
      },
      errorMessage: "",
      loading: null,
      message: null, // To store the message from the API
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
       submit() {
      this.loading = true; // Set loading to true when the button is clicked

      // Simulate loading process (you can replace this with actual loading logic)
      setTimeout(() => {
        this.loading = false; // Set loading to false when your data is loaded
      }, 3000); // Adjust the time as per your requirement
     
        axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=saveCustomer', this.form)
            .then((response) => {
            this.loading = false;
            this.message = response.data[0].Message;
            // Clear the message after 5 seconds
            setTimeout(() => {
                this.message = null;
            }, 5000);
            })
            .catch((error) => {
            if (error.message == "Network Error") {
                this.errorMessage = "Vous n'êtes pas connectzé au serveur"

            } else {
                this.errorMessage = error.response.data.message;
                this.loading = false;

                this.$toast.error(`Verifier vos identifiants!`, {
                position: "bottom-right"
                });
            }

            // Clear the message after 5 seconds
            setTimeout(() => {
                this.message = null;
            }, 5000);
            })
   
    }

    },
    computed: {
    formData() {
      return this.$store.state.formData;
    },
  
  },
  mounted() {
    // Call the API when the component is mounted
    this.fetchMessage();
     console.log("Store Data:", this.$store.state.formData); // Log store data
    this.form.Fname = this.$store.state.formData.Fname;
    this.form.Lname = this.$store.state.formData.Lname; // Corrected assignment
    this.form.phone = this.$store.state.formData.phone;
    this.form.password = this.$store.state.formData.password;
  },
  };
  </script>
  
  <style src="../theme/otp.css" scoped>

  </style>
  