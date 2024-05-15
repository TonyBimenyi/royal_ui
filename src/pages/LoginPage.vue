<template>
    <ion-page>
    <ion-content class="login_content">
        <div v-if="message !== null" class="message-toast">
            <div v-if="message === 0" class="error_messag">
                <p>Verifier vos identifiants</p>
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
        <div v-if="loading" class="loading-overlay">
            <!-- Loading spinner or animation -->
            <div class="">
                <img src="../theme/images/aaa.gif" alt="Loading Spinner"><br>
            </div>
            <div class="">
                <p>Chargement</p>
            </div>
           
          </div>
          <form action="">
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
                            <ion-input class="input" label="Code" label-placement="floating" v-model="form.code" fill="outline" placeholder="Enter text" required ></ion-input>
                        </ion-item><br>
                    </div>
        
                    <div class="form-input">
                        <ion-item>
                            <ion-input type="password" class="input" label="Mot de Passe" label-placement="floating" fill="outline" placeholder="Enter text" required v-model="form.password"></ion-input>
                        </ion-item>

                        <ion-button @click="submit()" class="login_btn" expand="block" :disabled="loading">Se Connecter</ion-button>
                        <p>Vous n'avez pas de compte? <a href="/register"><span>Enregistrez-vous ici.</span></a> </p>
                    </div>
                </div>
            </div>
            
        </div>
    </form>
    </ion-content>
</ion-page>
</template>
<script>
import axios from 'axios'
import { IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton} from "@ionic/vue"
export default {
    data(){
        return{
            form:{
                code:'',
                password:'',
            },
            errorMessage: "",
                loading: null,
                message: null, // To store the message from the API
        }
    },
    methods: {
        submit() {
  this.loading = true;
  if (this.form.code && this.form.password) {
    axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=login', this.form)
      .then((response) => {
        this.loading = false;
        if (response.data[0].Message === 1) {
          const userData = response.data[0];
          this.$store.commit("login", JSON.stringify(userData));
          this.$router.push('/home');
          this.message = response.data[0].Message;
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
    this.message = 5;
  }
  // Prevent default form submission
  event.preventDefault();
},

    goToRegister() {
    //   this.$router.push('/register');
    this.$router.navigate(["/verification"], {replaceUrl:true});
    }
  },
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
    }
}
</script>
<style src="../theme/login.css"> 


</style>