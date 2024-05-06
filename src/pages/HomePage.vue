<template>
    <ion-content class="home_content" ion-pading>
            <ion-item>
                <ion-badge class="button_order" slot="end">as</ion-badge>
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
   

        <h2>Special Promotions</h2>
        
        <ion-list>
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
    }
}
</script>
<style src="../theme/home.css" scoped>

</style>