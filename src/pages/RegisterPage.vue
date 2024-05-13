<template> 
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
                            <ion-input type="password" class="input" label="Confirmer Mot de Passe" label-placement="floating" fill="outline" placeholder="Enter text" ></ion-input>
                        </ion-item>

                        

                        <ion-button @click="submit()" class="login_btn" expand="block">S'eregistrer</ion-button>
                        <p>You already have an  account? <a href="/login"><span>Login</span></a> .</p>
                    </div>

                    
                </div>
            </div>
        </div>
    </ion-content>
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

  mounted() {
    // Call the API when the component is mounted
    this.fetchMessage();
  },
}
</script>

<style src="../theme/login.css"> 

</style>