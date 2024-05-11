<template>  
        <ion-content class="profile_content">
            <!-- <div class="card">
                <div class="triangle">
                    
                
                </div>
                
              </div> -->

              <ion-card class="card">
                
                <div class="triangle"></div>
                <ion-grid class="grr">
                    <ion-row class="ion-justify-content-between">
                      <ion-col size="8"> 
                        <div class="user">
                            <div class="img">
                                <img src="../theme/images/login_bg.png" alt="">
                            </div>
                            <div class="username">
                                <p class="welcome_txt">Arnaud Mugisha</p>
                                <p class="username_txt">150.00 Points</p>
                            </div>
                        </div>
                    </ion-col>
                      <ion-col size="3"> 
                        <div class="user">
                            <div class="qr">
                                <p class="qrcode"><i class="fa fa-qrcode" aria-hidden="true"></i></p>

                            </div>
                        </div>    
                    </ion-col>
                    </ion-row>
                  </ion-grid>
              </ion-card>
        </ion-content>
</template>
<script >
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
}
</script>
<style src="../theme/profile.css" scoped>

</style>