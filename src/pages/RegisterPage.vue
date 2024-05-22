<template> 
    <ion-page>
    <ion-content class="login_content">
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
        <div v-if="loading" class="loading-overlay">
            <!-- Loading spinner or animation -->
            <div class="">
                <img src="../theme/images/aaa.gif" alt="Loading Spinner"><br>
            </div>
            <div class="">
                <p>Chargement</p>
            </div>
           
          </div>
        <div class="form_bg">
            <img src="../theme/images/logo2.png" alt="">
            <div class="content">
                <div class="heading ion-padding" >
                    <h3>Bienvenue!</h3>
                    <p>Connectez-vous et gagner des points avec<strong> Amstel Royale !</strong> </p>
                </div>
                
                <div class="login-form ">
                    <div class="form-input">

                        <ion-item class="username">
                            <ion-input class="input" v-model="form.Fname" label="Nom" label-placement="floating" fill="outline" placeholder="Enter text" ></ion-input>
                        </ion-item><br>
                    </div>
                    <div class="form-input">

                        <ion-item class="username">
                            <ion-input class="input" v-model="form.Lname" label="Prenom" label-placement="floating" fill="outline" placeholder="Enter text" ></ion-input>
                        </ion-item><br>
                    </div>

                    <div class="form-input">

                        <ion-item class="username">
                            <ion-input class="input" v-model="form.phone" label="Numero" label-placement="floating" fill="outline"  type="number" placeholder="Enter text"></ion-input>
                        </ion-item><br>
                    </div>

                    <div class="form-input">

                        <ion-item class="username">
                            <ion-input class="input" v-model="form.password" label="Mot de passe" label-placement="floating" fill="outline"  type="password" placeholder="Enter text"></ion-input>
                        </ion-item><br>
                    </div>
        
                    <div class="form-input">
                        <ion-item>
                            <ion-input type="password" v-model="form.confirm_pass" class="input" label="Confirmer Mot de Passe" label-placement="floating" fill="outline" placeholder="Enter text" ></ion-input>
                        </ion-item>

                    

                        <ion-button  @click="submitForm()" class="login_btn" expand="block">S'enregistrer</ion-button>
                        <p>Vous avez deja un compte? <span @click="$emit('loginEmitted')">Se connecter</span> .</p>
                    </div>

                    
                </div>
            </div>
        </div>
    </ion-content>
</ion-page>
</template>
<script>
import {IonAlert, IonPage, IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon, IonButton, IonToast } from "@ionic/vue"
import axios from 'axios'

export default {
  data() {
    return {
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
    }
  },
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    submitForm() {  
     if(this.form.password !== this.form.confirm_pass ){
        this.message = 4;
     }else{
        this.$store.dispatch('updateFormDataReg', this.form)
        // this.$router.push('/verification');
        this.$emit('OTPEmitted');
        
     }
    },
    
  },
  components: {
    
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonList,
    IonItem,
    IonInput,
    IonIcon,
    IonButton,
    IonToast,
    IonAlert,
  },


}
</script>

<style src="../theme/login.css"> 

</style>