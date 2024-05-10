<template>
    <ion-content class="login_content">
        <div class="form_bg">
            <img src="../theme/images/royale_logo.png" alt="">
            <div class="content">
                <div class="heading ion-padding" >
                    <h3>Welcome Back!</h3>
                    <p>Start earning points with every single sip of <strong>Amstel Royale !</strong> </p>
                </div>
                
                <div class="login-form ">
                    <div class="form-input">

                        <ion-item class="username">
                            <ion-input class="input" label="Email" label-placement="floating" fill="outline" placeholder="Enter text"></ion-input>
                        </ion-item><br>
                    </div>
        
                    <div class="form-input">
                        <ion-item>
                            <ion-input type="password" class="input" label="Password" label-placement="floating" fill="outline" placeholder="Enter text"></ion-input>
                        </ion-item>

                        <ion-button class="login_btn" expand="block">Login</ion-button>
                        <p>You don't have account? <a href="/register"><span>Register Here</span></a> .</p>
                    </div>
                </div>
            </div>
        </div>
    </ion-content>
</template>
<script>
import { IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton} from "@ionic/vue"
export default {
    methods: {
    goToRegister() {
      this.$router.push('/register');
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