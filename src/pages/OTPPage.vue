<template>
  <ion-page>
      <div v-if="loading" class="loading-overlay">
          <!-- Loading spinner or animation -->
          <div class="">
              <img src="../theme/images/aaa.gif" alt="Loading Spinner"><br>
          </div>
          <div class="">
              <p>Chargement</p>
          </div>
         
        </div>
   <ion-content class="otp_content">
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
          <p>Connexion avec succés</p>
      </div>
      <div v-else-if="message === 5" class="error_messag">
          <p>Le code et Le mot de passe son obligatoire</p>
      </div>
    </div>
    <ion-toolbar class="tootbar">
        <ion-buttons >
          <ion-back-button default-href="/home">Back</ion-back-button>
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
        <p>Entrez l'OTP envoyer au <span>+257 748343</span></p>
    </div>
    <!-- <p style="color:black">First Name: {{ formData.codeSender }}</p> -->
    <!-- <input type="text" v-model="form.Fname"> -->
    <div class="a">
      <!-- <p class="welcome_txt">A</p> -->
      <ion-input  class="input_montant"
      ref="input"
      type="number"
      fill="solid"
      label=""
      v-model="form.otp"
      label-placement="defaut"
      placeholder="OTP de 4 Chiffres"
    ></ion-input>
  </div>
      <div class="resend_otp">
        <p>Vous n'avez pas recu le code? <span>Renvoyer.</span></p>
    </div>
    <ion-button @click="Register()" class="done_btn" expand="block">Confirmer</ion-button>
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
      return{
          loading: null,
          form:{
            Fname: '',
            Lname: '',
            password: '',
            phone: '',
            otp:'',
            type:0,
          }
      }
    },
    methods:{
      
          Register(){
              this.loading = true;
            if(this.form.otp != '1234'){
              alert('Verifier votre OTP')
              this.loading=false
            }else{
                  axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=saveCustomer', this.form)
          .then((response) => {
              this.loading = false;
              if (response.data[0].Message === 1) {
              this.message = response.data[0].Message;
              alert('Felicitations Enregistrement Reussi')
              this.loading=false
              const userData = response.data[0];
              this.$store.commit("login", JSON.stringify(userData));
              this.$router.push('/home');
              // Clear the message after 5 seconds
              setTimeout(() => {
                  this.message = null;
              }, 5000);
              } else {
              this.message = response.data[0].Message;
              }
          })
          .catch((error) => {
            this.loading=false
              if (error.message == "Network Error") {
              this.errorMessage = "Vous n'êtes pas connectzé au serveur"
              } else {
              this.errorMessage = error.response.data.message;
              this.$toast.error(`Verifier vos identifiants!`, {
                  position: "bottom-right"
              });
              }
              this.loading = false; // Make sure to handle loading state in error case as well
          })
      } 
  }
              
          
    },
  mounted() {
      this.form.Fname = this.$store.getters.formDataReg.Fname
      this.form.Lname = this.$store.getters.formDataReg.Lname
      this.form.password = this.$store.getters.formDataReg.password   
      this.form.phone = this.$store.getters.formDataReg.phone 
        
   },
  computed: {
  formData() {
    return this.$store.getters.formData
  }
}
  };
  </script>
  
  <style src="../theme/otp.css" scoped>

  </style>
  