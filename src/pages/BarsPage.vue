<template>
    <ion-page>
    <ion-content class="bars_content">
        <ion-toolbar class="tootbar">
            <ion-buttons>
                <ion-back-button default-href="/home">Back</ion-back-button>
            </ion-buttons>
            <ion-title class="toolbar_title">Bars en Partenariat</ion-title>
        </ion-toolbar>

        <ion-card class="card" v-for="bar in bars" :key="bar.idBar">
            <img  class="logo_" src="../theme/images/logo2.png" alt="">
            <div class="triangle"></div>
                <div class="texts">
                    <div class="bar_name">
                        <h1>{{bar.nameBar}}</h1>
                    </div>
                    <div class="address">
                        <p>{{ bar.communeBar }}, {{bar.zoneBar}}, {{bar.quartierBar}}, {{bar.avenuBar}} </p>
                    </div>
                </div>
          </ion-card>

         
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
        bars:[],
            
        }
      },

    methods:{
         getBar(){
            axios
            .get('https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=getBar')
            .then((res)=>{
                // this.$store.state.promos = res.data
                this.bars = res.data
              
            })
            .catch((error)=>{
                this.$toast.error(error.response.data.message)
                console.log(error.response.data.message)
            })
        }, 
    },
 
    mounted() {
    this.getBar();

  },
}
</script>
<style src="../theme/bars.css" scoped>

</style>