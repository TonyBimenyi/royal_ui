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
      

      
      <ion-toolbar class="tootbar">
          <ion-buttons >
            <ion-back-button default-href="/home">Back</ion-back-button>
          </ion-buttons>
          <ion-title class="toolbar_title">Verification OTP</ion-title>
      </ion-toolbar>
      <div v-if="message !== null" class="message-toast">
        <div class="error_messag">
            <p>{{message}}</p>
        </div>
        </div>
       
      <div class="img_">  
          <img src="../theme//images/otp.png" alt="Your Image">
      </div>
      <div class="txt_otp">
          <p>Entrez l'OTP envoyer au <span>+257 {{$store.getters.user.phone}}</span></p>
      </div>
      <!-- <p style="color:black">First Name: {{ formData.codeSender }}</p> -->
      <!-- <input type="text" v-model="form.codeSender"> -->
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
      <ion-button @click="sendPoints()" class="done_btn" expand="block">Confirimer</ion-button>
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
            message: null,
            form:{
                codeSender:'',
                codeReceiver:'',
                points:'',
                otp:'',
                type:'',
            }
        }
      },
      methods:{
        
            sendPoints(){
                this.loading = true;
              if(this.form.otp != '1234'){
                alert('Verifier votre OTP')
                this.loading=false
              }else{
                    axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=sendPoints', this.form)
            .then((response) => {
                this.loading = false;
                
                console.log(response.data)

                if (response.data[0].Message === 1) {
                  
                this.message = response.data[0].Message;
                alert('Felicitations points envoyer')
                this.loading=false
                this.$router.push('/home');
                // Clear the message after 5 seconds
                setTimeout(() => {
                    this.message = null;
                }, 1000);
                } else {
                this.message = response.data[0].Message;
                }
            })
            .catch((error) => {
                if (error.message == "Network Error") {
                this.errorMessage = "Vous n'êtes pas connectzé au serveur"
                } else {
                this.errorMessage = error.response.data.message;
                this.$toast.error(`Verifier vos identifiants!`, {
                    position: "bottom-right"
                });
                }
                this.loading = false; // Make sure to handle loading state in error case as well
                this.errorMessage = error.response.data.message;
            })
        } 
    }
                
            
      },
    mounted() {
        this.form.codeSender = this.$store.getters.formData.codeSender
        this.form.codeReceiver = this.$store.getters.formData.codeReceiver
        this.form.points = this.$store.getters.formData.points   
        this.form.type = this.$store.getters.formData.type   
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
    