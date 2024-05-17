<template>
  <ion-page>
    <ion-content class="send_container" ion-padding>
        <ion-toolbar class="tootbar">
          <router-link class="link" to="/home">
            <ion-buttons slot="start">
              <ion-back-button default-href="/home">Back</ion-back-button>
            </ion-buttons>
          </router-link>
            <ion-title class="toolbar_title">Envoyer Points</ion-title>
        </ion-toolbar>

        <div v-if="loading" class="loading-overlay">
            <!-- Loading spinner or animation -->
            <div class="">
                <img src="../theme/images/aaa.gif" alt="Loading Spinner"><br>
            </div>
            <div class="">
                <p>Chargement</p>
            </div>
           
          </div>

          <ion-grid class="grr">
            <ion-row class="ion-justify-content-between">
              <ion-col size="8"> 
                <div class="user">
                    <div class="img">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="username">
                        <p class="welcome_txt">De</p>
                        <p class="username_txt">{{this.$store.getters.user.Fname}} {{this.$store.getters.user.Lname}}</p>
                    </div>
                </div>
            </ion-col>
              <ion-col size="3"> 
                <div class="user">
                    <div class="username">
                        <p class="welcome_txt">Points</p>
                        <p class="username_txt">{{number}}</p>
                    </div>
                </div>    
            </ion-col>
            </ion-row>
          </ion-grid>

          <div class="divider">
            <hr>
            <hr class="ee">
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>


          <ion-grid class="grr">
            <ion-row class="ion-justify-content-between">
              <ion-col size="8"> 
                <div class="user">
                    <div class="img">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="username">
                        <p class="welcome_txt">A</p>
                        <ion-input  class="input_numero"
                        ref="input"
                        type="email"
                        fill="solid"
                        label=""
                        v-model="form.codeReceiver"
                        label-placement="defaut"
                        placeholder="Identifiant..."
                      ></ion-input>
                    </div>
                </div>
            </ion-col>
              <ion-col size="3"> 
                <div class="user">
                    <div class="username">
                        <p class="qrcode"><i class="fa fa-qrcode" aria-hidden="true"></i></p>
                    </div>
                </div>    
            </ion-col>
            </ion-row>
          </ion-grid>

          <div class="montant_text">
            <div v-if="$store.getters.user.type === 0" class="a">
                <!-- <p class="welcome_txt">A</p> -->
                <ion-input  class="input_montant"
                ref="input"
                type="number"
                fill="solid"
                label=""
                v-model="form.points"
                label-placement="defaut"
                placeholder="Entrez les points ici..."
              ></ion-input>
            </div>
            <div v-else-if="$store.getters.user.type !== 0" class="a">
              <!-- <p class="welcome_txt">A</p> -->
              <ion-input  class="input_montant"
              ref="input"
              type="number"
              v-model="form.points"
              fill="solid"
              label-placement="defaut"
              placeholder="Entrez les points ici..."
            ></ion-input>
            <ion-input  class="input_montant"
              ref="input"
              type="number"
              fill="solid"
              v-model="form.qty"
              label=""
              label-placement="defaut"
              placeholder="Entrez la quantite"
            ></ion-input>

            <ion-input  @change="handleFileUpload"  :disabled="loading" class="input_montant"
              ref="input"
              type="file" 
              fill="solid"
            
              label=""
              label-placement="defaut"
              placeholder="E"
            ></ion-input>
      
          </div>
          </div>
          <div class=""  v-if="$store.getters.user.type === 0">
            <router-link  to="/verification-send">
          <ion-button  @click="goToVerif()" class="done_btn" expand="block">Envoyer</ion-button>
       
        </router-link>
      </div>
      <div class=""  v-else-if="$store.getters.user.type === 1">
   
      <ion-button  @click.prevent="sendPoints" class="done_btn" expand="block">Envoyer</ion-button>
  </div>
    </ion-content>  
  </ion-page>
</template>

<script>
import axios from 'axios'
import {IonTitle,IonButtons,IonToolbar,IonBackButton, IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton,IonLabel,IonBadge,IonGrid,IonRow,IonCol,IonCardContent} from "@ionic/vue"
import QrcodeVue from 'qrcode.vue'
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
        QrcodeVue
    },
    data() {
      return {
        form:{
          codeSender:this.$store.getters.user.code,
          codeReceiver:'',
          points:'',
          type:this.$store.getters.user.type,
          invoice:null,
          qty:'',

        },
        value: 'https://example.com',
        size: 300,
        text: "dshjjhsdf637", // Set default text here
        copied: false, // Flag to track whether text has been copied
        errorMessage: "",
        loading: null,
        message: null, // To store the message from the API
        number:{},
        timer: null,
        dat:{
          code:this.$store.getters.user.code,
        },
        
      }
    },
    methods: {
      handleFileUpload(e){
            this.form.invoice = e.target.files[0]
        },
      goToVerif(){
        this.$store.dispatch('updateFormData', this.form)
      },
      async sendPoints(){

      if (!this.form.invoice) {
        alert('Please select a file first');
        return;
      }
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      this.loading = true;
                let data = new FormData()
                data.append('invoice', this.form.invoice)
                data.append('codeSender', this.form.codeSender)
                data.append('codeReceiver', this.form.codeReceiver)
                data.append('points', this.form.points)
                data.append('type', this.form.type)
                data.append('qty', this.form.qty)

        
            await axios.post('https://seesternconsulting.com/royal/agentSend.php', data, config)
            .then((response) => {
                this.loading = false;
                if (response.data[0].Message === 1) {
                this.message = response.data[0].Message;
                // resetting your v-model:
                this.form.codeReceiver='',
                this.form.points='',
                this.form.invoice='',
                this.form.qty='',
                
                this.$router.push('/profile');
                // Clear the message after 5 seconds
                setTimeout(() => {
                    this.message = null;
                }, 5000);
                } else {
                this.message = response.data[0].Message;
                }
            })
            .catch((error) => {
              console.error('Error uploading file', error);
            })
              
               
      },
      copyText() {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = this.text;
        document.body.appendChild(textarea);
        
        // Select and copy the text 
        textarea.select();
        document.execCommand('copy');
        
        // Remove the textarea from the DOM
        document.body.removeChild(textarea);

        // Update copied flag
        this.copied = true;

        // Reset the copy icon after 1 second
        setTimeout(() => {
          this.copied = false;
        }, 1000);
      }, 
      getPoints(){
          axios
            .post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=getPoints',this.dat)
            .then((res)=>{
                // this.$store.state.promos = res.data
                this.number = res.data
              
            })
            .catch((error)=>{
                this.$toast.error(error.response.data.message)
                console.log(error.response.data.message)
            })
      
        },

      
      

  },

     created(){
   this.getPoints();
 },
 watch: {
   // Watch for route changes
   $route(to, from) {
     this.getPoints();
   }
 },
  
}
</script>
<style src="../theme/send.css" scoped>

</style>