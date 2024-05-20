<template>
    <ion-page>
    <ion-content class="home_content" >
            <ion-item>
                <ion-badge @click="logout()" class="button_order" slot="end"><i class="fa fa-sign-out" aria-hidden="true"></i></ion-badge>
                <ion-label>
                    <div class="user">
                        <div class="img">
                            <img src="../theme/images/logo2.png" alt="">
                        </div>
                        <div class="username">
                            <p class="welcome_txt">{{greeting}}</p>
                            <p class="username_txt">{{this.$store.getters.user.Fname}} {{this.$store.getters.user.Lname}}</p> 
                        </div>
                    </div>
                </ion-label>
            </ion-item>
            <ion-card>
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                        <ion-col class="col_txt">
                         
                            <p>Vos Points</p>
                            <h3>{{ hiddenNumber }}</h3>   <p class="eye" @click="toggleDisplay"><i class="fa fa-eye" aria-hidden="true"></i></p>
                        </ion-col>
                        <ion-col></ion-col>
                        <ion-col class="qr_code"><i class="fa fa-qrcode" aria-hidden="true"></i></ion-col>

                        </ion-row>
                    </ion-grid>
                    <ion-grid class="ion-justify-content-between" >
                        <ion-row class="ion-justify-content-between">
                            
                        <ion-col  class="point_txt">
                            <router-link class="link" to="/send">
                            <i class="fa fa-outdent" aria-hidden="true"></i>
                                </router-link>
                            <p>Envoyer Points</p>
                        </ion-col>
                 
                        <ion-col class="point_txt">
                          <router-link class="link" to="/receive">
                            <i class="fa fa-indent" aria-hidden="true"></i>
                            <p>Recevoir Points</p>
                          </router-link>
                        </ion-col>
                        <ion-col class="point_txt">
                          <router-link class="link" to="/rewards">
                            <i class="fa fa-gift" aria-hidden="true"></i>
                            <p>Prix</p>
                          </router-link>
                        </ion-col>
                    

                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
            
        <h3 class="title_princi"><span><i class="fa fa-caret-right" aria-hidden="true"></i></span> Les Publicités </h3>
        

        <div class="slides" :style="{transform: `translateX(-${currentIndex * 100}%)`}">
            <!-- Loop through images -->
            <div class="slide" v-for="(ad, index) in ads" :key="index">
              <div class="card">
                <img :src="ad.img" :alt="ad.imh">
              </div>
            </div>
          </div>
          <!-- Navigation points -->
        <div class="navigation">
            <span
              class="navigation-point"
              v-for="(ad, index) in ads"
              :key="index"
              :class="{ 'active': currentIndex === index }"
              @click="goToSlide(index)"
            ></span>
          </div>
        <h3 class="title_princi"> <span><i class="fa fa-caret-right" aria-hidden="true"></i></span> Promotions Speciales</h3>
        
        <ion-list class="list_pro">
            <ion-item v-for="promo in promos" :key="promo.idPromo">
                <!-- <ion-badge class="button_order" slot="end">Order</ion-badge> -->
                <ion-label>
                    <div class="list">
                        <div class="img_list">
                            <img style="max-width:100%" :src="promo.img" alt="">
                        </div>
                        <div class="promo">
                            <p class="username_txt">{{promo.nameBar}}</p>
                            <p class="welcome_txt">{{promo.description}}</p>
                            
                        </div>
                    </div>
                </ion-label>
            </ion-item>

        </ion-list>
        
        <ion-grid>
            <ion-row>
            <ion-col size="10" class="explor">
                <p>Explorez les bars où vous pouvez obtenir des promotions.</p>
            </ion-col>
            
            <ion-col class="right">
              <router-link to="/bars">
               <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </router-link>
              </ion-col>
           
            </ion-row>
        </ion-grid>
    </ion-content>
</ion-page>
</template>
<script>
import axios from 'axios'
import { IonPage,  IonContent, IonCard, IonCardHeader, IonList, IonItem, IonInput, IonIcon,IonButton,IonLabel,IonBadge,IonGrid,IonRow,IonCol,IonCardContent} from "@ionic/vue"
import myImage1 from '../theme/images/img1.jpg';
import myImage2 from '../theme/images/img2.jpg';
import myImage3 from '../theme/images/img3.jpg';
import myImage4 from '../theme/images/img4.jpg';
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
    },
    data() {
        return{
          dat:{
            code:this.$store.getters.user.code,
        },
        timer:null,
        poin:{},
        greeting: '',
        promos:[],
        ads:[],
        currentIndex: 0,
        number: 0,
      displayComplete: false,
        
        }
      },
      methods: {
        logout(){
        localStorage.removeItem('user')
        // this.$router.push('/login')
        window.location.href = "/login" 
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
        getAds(){
            axios
            .get('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=getAds')
            .then((res)=>{
                // this.$store.state.promos = res.data
                this.ads = res.data
              
            })
            .catch((error)=>{
                this.$toast.error(error.response.data.message)
                console.log(error.response.data.message)
            })
        }, 
        getPromos(){
            axios
            .get('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=getPromotions')
            .then((res)=>{
                // this.$store.state.promos = res.data
                this.promos = res.data
              
            })
            .catch((error)=>{
                this.$toast.error(error.response.data.message)
                console.log(error.response.data.message)
            })
        }, 
        toggleDisplay() {
      this.displayComplete = !this.displayComplete;
      if (!this.displayComplete) {
        setTimeout(() => {
          this.displayComplete = false; // Hide the complete number after 10 seconds
        }, 10000);
      }
    },
        startSlider() {
          setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.ads.length;
          }, 3000); // Change slide every 3 seconds (adjust as needed)
        },
        goToSlide(index) {
          this.currentIndex = index;
        },
        setGreeting() {
      const currentHour = new Date().getHours();

      if (currentHour >= 6 && currentHour < 12) {
        this.greeting = 'Bonjour';
      } else if (currentHour >= 12 && currentHour < 18) {
        this.greeting = 'Bon après-midi';
      } else {
        this.greeting = 'Bonsoir';
      }
    }
      },
      mounted() {
    this.setGreeting();
    this.getPromos();
    this.getAds();
    this.startSlider();
 

   /* this.timer = setInterval(() => {
         this.getPoints();
       }, 5000)*/
  },
  /* beforeDestroy() {
       clearInterval(this.timer)
     }*/
  created(){
    this.getPoints();
  },
  watch: {
    // Watch for route changes
    $route(to, from) {
      this.getPoints();
    }
  },
  computed: {
    hiddenNumber() {
      

      if (!this.displayComplete) {
        const numberString = this.number.toString();
        const hiddenPart = '*'.repeat(numberString.length - 0);
        return hiddenPart ;
      } else if(this.number == 0){
        return '00' }
      else{
        return this.number;
      }
    }
  }

      
}
</script>
<style src="../theme/home.css" scoped>

</style>