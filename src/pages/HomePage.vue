<template>
    <ion-content class="home_content" ion-pading>
        <ion-list>
            <ion-item>
                <ion-badge slot="end">22</ion-badge>
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
                        <ion-col>
                            <p>Your Points</p>
                            <p>1.500</p>
                        </ion-col>
                        <ion-col>2</ion-col>

                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
        </ion-list>
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
        IonCardContent
    }
}
</script>
<style src="../theme/home.css" scoped>

</style>