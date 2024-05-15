<template> 
  <ion-page> 
        <ion-content class="profile_content">
            <!-- <div class="card">
                <div class="triangle">
                    
                
                </div>
                
              </div> -->

          <ion-grid class="grr">
            <ion-row class="ion-justify-content-between">
              <ion-col size="6"> 
                
            </ion-col>
              <ion-col size="6" class="ion-text-end"> 
                 <div class="logout_icon">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                 </div>
            </ion-col>
            </ion-row>
          </ion-grid>

              <ion-card class="card">
                <img  class="logo_" src="../theme/images/logo2.png" alt="">
                <div class="triangle"></div>
                <ion-grid class="grr">
                    <ion-row class="ion-justify-content-between">
                      <ion-col size="8"> 
                        <div class="user">
                            <div class="img">
                                <img src="../theme/images/login_bg.png" alt="">
                            </div>
                            <div class="username">
                                <p class="welcome_txt">{{this.$store.getters.user.Fname}} {{this.$store.getters.user.Lname}}</p>
                                <p class="username_txt">CODE: {{this.$store.getters.user.code}}</p>
                            </div>
                            
                        </div>
                    </ion-col>
                      <ion-col size="2" > 
                        <div class="user">
                            <div class="qr">
                                <p class="qrcode"><i class="fa fa-qrcode" aria-hidden="true"></i></p>

                            </div>
                        </div>    
                    </ion-col>
                    </ion-row>
                  </ion-grid>

                  <ion-grid class="grr1">
                    <ion-row class="ion-justify-content-between">
                      <ion-col size="8"> 
                        <div class="user">
                            <div class="username">
                                <p class="welcome_txt">Vos Points</p>
                                <p class="username_txt">{{this.$store.getters.user.points}}</p>
                            </div>
                            
                        </div>
                    </ion-col>
                      <ion-col size="3"> 
                        <div class="user">
                           
                        </div>    
                    </ion-col>
                    </ion-row>
                  </ion-grid>

                  <ion-grid class="grr2">
                    <ion-row class="ion-justify-content-between">
                      <ion-col size="8"> 
                        <div class="user">
                            <div class="username">
                                <p class="welcome_txt">Votre Niveau</p>
                                <p class="username_txt">GOLD</p>
                            </div>
                            
                        </div>
                    </ion-col>
                      <ion-col size="3"> 
                        <div class="user">
                           
                        </div>    
                    </ion-col>
                    </ion-row>
                  </ion-grid>
                  
              </ion-card>

              <h3 class="title_princi"> <span><i class="fa fa-caret-right" aria-hidden="true"></i></span>Activités Recentes</h3>
        
        <ion-list class="list_pro">
            <ion-item v-for="hi in hist" :key="hi.idHist">
              <ion-grid class="grr">
                <ion-row class="ion-justify-content-between">
                  <ion-col size="8"> 
                    <ion-label>
                      <div class="list">
                          <div class="img_list">
                              <img :src="hi.img" alt="">
                          </div>
                          <div class="promo">
                            <div v-if="this.$store.getters.user.code === hi.codeSender" class="">
                              <p class="username_txt">@De Moi A {{hi.codeSender}}</p>
                            </div>
                            <div v-else class="">
                              <p class="username_txt">@De{{hi.codeSender}} A Moi</p>
                            </div>
                              <p class="asd">Date: {{hi.dateSent}}</p>
                              
                          </div>
                      </div>
                  </ion-label>
                </ion-col>
                  <ion-col size="3"> 
                    <div class="point">
                      <div v-if="this.$store.getters.user.code === hi.codeSender" class="">
                       <p class="de_points">-{{hi.sentPoints}} Pts</p>
                       </div>
                       <div v-else class="">
                        <p class="in_points">+{{hi.sentPoints}} Pts</p>
                        </div>
                    </div>
                </ion-col>
                </ion-row>
              </ion-grid>
              
                
            </ion-item>

            
        </ion-list>
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
        dat:{
          code:this.$store.getters.user.code,
        },
        hist:[],

        }
      },
      methods:{
        sendData(){
            axios.post('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=getPointHistory ', this.dat)
            .then((res)=>{
                // this.$store.state.promos = res.data
                this.hist = res.data
              
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
<style src="../theme/profile.css" scoped>

</style>