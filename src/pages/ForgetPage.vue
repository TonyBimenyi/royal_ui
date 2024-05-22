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
            <!-- <ion-back-button @click="navigateToLogin">Back</ion-back-button> -->
          </ion-buttons>
          <ion-title class="toolbar_title">Mot de Passe Oublié?</ion-title>
      </ion-toolbar>
      <div v-if="message !== null" class="message-toast">
        <div v-if="message === 0" class="error_messag">
            <p>{{message}}</p>
        </div>
        
      </div>        
      <div class="img_">  
          <img src="../theme//images/otp.png" alt="Your Image">
      </div>
      <div v-if="showPhone" >
        <div class="txt_otp">
            <p>Entrez votre numero de téléphone</p>
        </div>
        <!-- <p style="color:black">First Name: {{ formData.codeSender }}</p> -->
        <!-- <input type="text" v-model="form.Fname"> -->
        
        <div class="a" >
          <!-- <p class="welcome_txt">A</p> -->
          <ion-input  class="input_montant"
          ref="input"
          type="number"
          fill="solid"
          label=""
          v-model="form.phone"
          label-placement="defaut"
          placeholder="+257"
        ></ion-input>
      </div>
    
      <ion-button @click="sendOtp()" class="done_btn" expand="block">Confirmer</ion-button>
    
  </div>
  <div v-if="showOtp" >
    <div class="txt_otp">
        <p>Entrez l'OTP envoyer au <span>{{form.phone}}</span></p>
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
    <ion-button @click="verifyOtp()" class="done_btn" expand="block">Confirmer</ion-button>
    
  </div>

  <div v-if="showPass" >
    <div class="txt_otp">
            <p>Changer votre Mot de Passe</p>
        </div>
                
                <div class="login-form ">
                    <div class="form-input">

                        <ion-item class="username">
                            <ion-input class="input" v-model="form.password" label="Mot de passe" label-placement="floating" fill="outline"  type="password" placeholder="Enter text"></ion-input>
                        </ion-item><br>
                    </div>
        
                    <div class="form-input">
                        <ion-item>
                            <ion-input type="password" v-model="form.confirm_pass" class="input" label="Confirmer Mot de Passe" label-placement="floating" fill="outline" placeholder="Enter text" ></ion-input>
                        </ion-item>

                    

                        <ion-button  @click="sendDatas()" class="login_btn" expand="block">Envoyer</ion-button>
                    </div>

                    
                </div>
            </div>
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
            showOtp: false,
            showPass:false,
            showPhone: true,
            form:{
              phone:'',
              code:'',
              password: '',
              confirm_pass :'',
             
            }

        }
      },
      methods:{
        navigateToLogin() {
      this.$router.push('/login');
    },
       async sendDatas() {
            this.loading = true;
          if (this.form.confirm_pass && this.form.password && (this.form.confirm_pass === this.form.password)) {
           await axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=forgetPassword', this.form)
              .then((response) => {
                this.loading = false;
                console.log(response.data)
                if (response.data[0].Message === 1) {
                 alert("Mot de Passe modifié avec succés")
                  window.location.href="/login";
                  // Clear the message after 5 seconds
                  setTimeout(() => {
                    this.message = null;
                  }, 5000);
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
              })
          } else {
            this.loading = false;
            this.message = 'Les Mots de Passe ne correspondent pas';
          }
          // Prevent default form submission
          event.preventDefault();
        },
        
            sendOtp(){
                this.loading = true;
             
                    axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=getCustomer', this.form)
                .then((response) => {
                    this.loading = false;
                      console.log(response.data)
                    if (response.data[0].Message === 1) {

                      this.message = response.data[0].Message;
                      this.form.code = response.data[0].code;
                      this.showPass =false;
                      this.showOtp = true;
                      this.showPhone =false;
                      this.loading=false
                  
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

              },

            verifyOtp(){

                this.loading = true;

            if(this.form.otp != '1234'){
              alert('Verifier votre OTP')
              this.loading=false

            }else{
             
                  this.showPass =true;
                  this.showOtp = false;
                  this.showPhone =false;

                  this.loading=false
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
    