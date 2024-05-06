<template>
    <ion-content class="home_content" >
            <ion-item>
                <ion-badge class="button_order" slot="end"><i class="fa fa-sign-out" aria-hidden="true"></i></ion-badge>
                <ion-label>
                    <div class="user">
                        <div class="img">
                            <img src="../theme/images/login_bg.png" alt="">
                        </div>
                        <div class="username">
                            <p class="welcome_txt">Welcome Back!</p>
                            <p class="username_txt">Arnaud Mugisha</p>
                        </div>
                    </div>
                </ion-label>
            </ion-item>
            <ion-card>
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                        <ion-col class="col_txt">
                            <p>Your Points</p>
                            <h3>0.00</h3>
                        </ion-col>
                        <ion-col></ion-col>
                        <ion-col class="qr_code"><i class="fa fa-qrcode" aria-hidden="true"></i></ion-col>

                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                        <ion-col class="point_txt">
                            <i class="fa fa-outdent" aria-hidden="true"></i>
                            <p>Send Points</p>
                        </ion-col>
                        <ion-col class="point_txt">
                            <i class="fa fa-indent" aria-hidden="true"></i>
                            <p>Receive Points</p>
                        </ion-col>
                        <ion-col class="point_txt">
                            <i class="fa fa-gift" aria-hidden="true"></i>
                            <p>Rewards</p>
                        </ion-col>
                    

                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
            
        <h3 class="title_princi"><span><i class="fa fa-caret-right" aria-hidden="true"></i></span> Requested Ads</h3>
        

        <div class="slides" :style="{transform: `translateX(-${currentIndex * 100}%)`}">
            <!-- Loop through images -->
            <div class="slide" v-for="(image, index) in images" :key="index">
              <div class="card">
                <img :src="image.src" :alt="image.alt">
              </div>
            </div>
          </div>
          <!-- Navigation points -->
        <div class="navigation">
            <span
              class="navigation-point"
              v-for="(image, index) in images"
              :key="index"
              :class="{ 'active': currentIndex === index }"
              @click="goToSlide(index)"
            ></span>
          </div>
        <h3 class="title_princi"> <span><i class="fa fa-caret-right" aria-hidden="true"></i></span>Special Promotions</h3>
        
        <ion-list class="list_pro">
            <ion-item>
                <ion-badge class="button_order" slot="end">Order</ion-badge>
                <ion-label>
                    <div class="list">
                        <div class="img_list">
                            <img src="../theme/images/login_bg.png" alt="">
                        </div>
                        <div class="promo">
                            <p class="username_txt">Limited Time Offer</p>
                            <p class="welcome_txt">Buy 3 Beers and get 1500 points!</p>
                            
                        </div>
                    </div>
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-badge class="button_order" slot="end">Order</ion-badge>
                <ion-label>
                    <div class="list">
                        <div class="img_list">
                            <img src="../theme/images/login_bg.png" alt="">
                        </div>
                        <div class="promo">
                            <p class="username_txt">Limited Time Offer</p>
                            <p class="welcome_txt">Buy 3 Beers and get 1500 points!</p>
                            
                        </div>
                    </div>
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-badge class="button_order" slot="end">Order</ion-badge>
                <ion-label>
                    <div class="list">
                        <div class="img_list">
                            <img src="../theme/images/login_bg.png" alt="">
                        </div>
                        <div class="promo">
                            <p class="username_txt">Limited Time Offer</p>
                            <p class="welcome_txt">Buy 3 Beers and get 1500 points!</p>
                            
                        </div>
                    </div>
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-badge class="button_order" slot="end">Order</ion-badge>
                <ion-label>
                    <div class="list">
                        <div class="img_list">
                            <img src="../theme/images/login_bg.png" alt="">
                        </div>
                        <div class="promo">
                            <p class="username_txt">Limited Time Offer</p>
                            <p class="welcome_txt">Buy 3 Beers and get 1500 points!</p>
                            
                        </div>
                    </div>
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-badge class="button_order" slot="end">Order</ion-badge>
                <ion-label>
                    <div class="list">
                        <div class="img_list">
                            <img src="../theme/images/login_bg.png" alt="">
                        </div>
                        <div class="promo">
                            <p class="username_txt">Limited Time Offer</p>
                            <p class="welcome_txt">Buy 3 Beers and get 1500 points!</p>
                            
                        </div>
                    </div>
                </ion-label>
            </ion-item>
            
        </ion-list>
        
        <ion-grid>
            <ion-row>
            <ion-col class="col_txt">
                <p>Explore the bars</p>
            </ion-col>
            <ion-col></ion-col>
            <ion-col class="qr_code"><i class="fa fa-qrcode" aria-hidden="true"></i></ion-col>

            </ion-row>
        </ion-grid>
    </ion-content>
</template>
<script>
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
        currentIndex: 0,
        images: [
          { src: myImage1, title: 'Slide 1 Title', content: 'Slide 1 Content' },
          { src: myImage2, alt: 'Slide 2', title: 'Slide 2 Title', content: 'Slide 2 Content' },
          { src: myImage3, alt: 'Slide 2', title: 'Slide 3 Title', content: 'Slide 2 Content' },
          { src: myImage4, alt: 'Slide 2', title: 'Slide 4 Title', content: 'Slide 2 Content' },
          // Add more images as needed
        ]
        }
      },
      mounted() {
        this.startSlider();
      },
      methods: {
        startSlider() {
          setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
          }, 3000); // Change slide every 3 seconds (adjust as needed)
        },
        goToSlide(index) {
          this.currentIndex = index;
        }
      }
      
}
</script>
<style src="../theme/home.css" scoped>

</style>