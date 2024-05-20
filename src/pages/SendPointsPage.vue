<template>
  <ion-page>
    <ion-content class="send_container" ion-padding>
      <div v-if="message !== null" class="message-toast">
            <div v-if="message === 1" class="error_messag">
                <p>Points envoyés avec succes</p>
            </div>
            <div v-if="message === 2" class="error_messag">
                <p>Vous n'avez pas assez des points pour effectuer ce transfert</p>
            </div>
            <div v-if="message === 3" class="error_messag">
                <p>Client n'existe pas</p>
            </div>
            
            <div v-else-if="message === 5" class="error_messag">
                <p>Vous pouvez seulement transferer les points aux autres</p>
            </div>
      </div>
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
                        <div class="" v-if="number == 0">
                          <p class="username_txt"> 0 </p>
                        </div>
                        <div class="" v-else>
                        <p class="username_txt"> {{ number }} </p>
                       
                      </div>
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
                        <p class="username_txt">{{decodedString?decodedString:'Identifiant...' }}</p>
                    </div>
                </div>
            </ion-col>
              <ion-col size="3"> 
                <div class="user">
                    <div class="username">
                        <p  @click="openScanner" class="qrcode"><i class="fa fa-qrcode" aria-hidden="true"></i></p>
                    </div>
                   
                </div>    
            </ion-col>

            <div v-if="showScanner" class="scanner-container">
                      <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>
                      <ion-button @click="closeScanner" expand="full" color="danger" class="close-button">Close Scanner</ion-button>
                </div>
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
            <router-link  class="link_to" to="/verification-send">
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
import { QrcodeStream } from 'vue3-qrcode-reader';
import {IonTitle,IonButtons,IonToolbar,IonBackButton, IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton,IonLabel,IonBadge,IonGrid,IonRow,IonCol,IonCardContent} from "@ionic/vue"
import QrcodeVue from 'qrcode.vue'
export default {
    components:{
      QrcodeStream,
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
          scannedData: null
        },
        
        showScanner: false,
        value: 'https://example.com',
        size: 300,
        text: "dshjjhsdf637", // Set default text here
        copied: false, // Flag to track whether text has been copied
        errorMessage: "",
        error:"",
        decodedString:"",
        loading: null,
        message: null, // To store the message from the API
        number:'...',
        timer: null,
        dat:{
          code:this.$store.getters.user.code,
        },
        
      }
    },
    methods: {
      openScanner() {
      this.showScanner = true;
    },
    closeScanner() {
      this.showScanner = false;
    },
      onDecode(decodedString) {

        this.form.codeReceiver= decodedString;

       const  datas ={
          
          code: decodedString
        }

        axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=getName',datas)
              .then((res)=>{
                  
                this.decodedString = res.data;
                
              })
              .catch((error)=>{
                  this.$toast.error(error.response.data.message)
                  console.log(error.response.data.message)
              })

     
      
      this.showScanner = false; // Close scanner after decoding
      
    },

    async onInit(promise) {

     try{

      const {capabilities} = await promise



     }catch(error){

        if (error.name === 'NotAllowedError') {

          alert('Camera access was denied. Please allow camera access.');

        } else if (error.name === 'NotFoundError') {

          alert('No camera was found on this device.');

        } else {

          alert('An error occurred while trying to access the camera.');

        }
      };
    },
      handleFileUpload(e){
            this.form.invoice = e.target.files[0]
        },
      goToVerif(){
        this.$store.dispatch('updateFormData', this.form)
      },
      async sendPoints(){

      if (!this.form.invoice) {
        alert('Choisir la facture SVP!');
        return;
      }
      if (!this.form.codeSender == this.form.codeReceiver) {
        alert('');
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
                this.decodedString=''
                
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
.scanner-container {
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>