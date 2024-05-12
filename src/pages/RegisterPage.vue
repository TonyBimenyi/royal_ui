<template>
    <ion-content class="login_content">
        <div class="form_bg">
            <img src="../theme/images/royale_logo.png" alt="">
            <div class="content">
                <div class="heading ion-padding" >
                    <h3>Welcome Back!</h3>
                    <p>Login to start earning points with every single sip of <strong>Amstel Royale !</strong> </p>
                </div>
                
                <div class="login-form ">
                    <div class="form-input">

                        <ion-item class="username">
                            <ion-input class="input" label="Nom d'Utilisateur" label-placement="floating" fill="outline" placeholder="Enter text" v-model="form.username"></ion-input>
                        </ion-item><br>
                    </div>

                    <div class="form-input">

                        <ion-item class="username">
                            <ion-input class="input" label="Phone" label-placement="floating" fill="outline"  type="number" placeholder="Enter text" v-model="form.number"></ion-input>
                        </ion-item><br>
                    </div>
        
                    <div class="form-input">
                        <ion-item>
                            <ion-input type="password" class="input" label="Password" label-placement="floating" fill="outline" placeholder="Enter text" v-model="form.password"></ion-input>
                        </ion-item>

                        <ion-button @click="submit()" class="login_btn" expand="block">Register</ion-button>
                        <p>You already have an  account? <a href="/login"><span>Login</span></a> .</p>
                    </div>

                    
                </div>
            </div>
        </div>
    </ion-content>
</template>
<script>
import { IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton} from "@ionic/vue"
import  axios from 'axios'
export default {
    data(){
        return{
            form:{
                username:'',
                password:'',
                number:'',
            },
            errorMessage:"",
            loading:false,
        }
    },
    methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    submit(){
            this.loading = true;
            axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=saveCustomer',this.form)
            .then((response)=>{
                this.loading = false;
                if(response.data.success){
                    this.$store.commit("login",JSON.stringify(response.data.data))               
                    alert('good')
                }
                this.$toast.error(`Bienvenue`)
 
               
            })
            .catch((error)=>{
                if (error.message == "Network Error"){
                    this.errorMessage = "Vous n'êtes pas connectzé au serveur"
                  
                }else{
                    this.errorMessage = error.response.data.message;
                    this.loading = false;
                    this.$toast.error(`Verifier vos identifiants!`,{
                        position:"bottom-right"
                    });
                }
                
            })
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