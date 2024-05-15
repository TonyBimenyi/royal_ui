<template> 
    <ion-page> 
          <ion-content class="profile_content">
              <!-- <div class="card">
                  <div class="triangle">
                      
                  
                  </div>
                  
                </div> -->
                <ion-toolbar class="tootbar">
                    <router-link class="link" to="/home">
                      <ion-buttons slot="start">
                        <ion-back-button default-href="/home">Back</ion-back-button>
                      </ion-buttons>
                    </router-link>
                      <ion-title class="toolbar_title">Prix</ion-title>
                  </ion-toolbar>
  
            
                  <div class="" v-for="rew in rewards" :key="rew.idRew">
                <ion-card class="card">
                  <img  class="logo_" src="../theme/images/logo2.png" alt="">
                  <div class="triangle"></div>
                  <ion-grid class="grr">
                      <ion-row class="ion-justify-content-between">
                        <ion-col size="11"> 
                          <div class="user">
                              <div class="img">
                                  <img :src="rew.img" alt="">
                              </div>
                              <div class="username">
                                  <p class="welcome_txt">{{rew.titre}}</p>
                                  <p class="username_txt">{{rew.description}}</p>
                              </div>
                              
                          </div>
                      </ion-col>
                        <ion-col size="2" > 
                          <div class="user">
                              <div class="qr">
                                  <!-- <p class="qrcode"><i class="fa fa-qrcode" aria-hidden="true"></i></p> -->
  
                              </div>
                          </div>    
                      </ion-col>
                      </ion-row>
                    </ion-grid>         
                    
                </ion-card>
            </div>
              
          </ion-content>
        </ion-page>
  </template>
  <script >
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
          return{
          
          rewards:[],
  
          }
        },
        methods:{
          sendData(){
              axios.get('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=getRewards ', this.dat)
              .then((res)=>{
                  // this.$store.state.promos = res.data
                  this.rewards = res.data
                
              })
              .catch((error)=>{
                  this.$toast.error(error.response.data.message)
                  console.log(error.response.data.message)
              })
          }
      },
      mounted() {
      this.sendData();
  
    },
  }
  </script>
  <style src="../theme/rewards.css" scoped>
  
  </style>