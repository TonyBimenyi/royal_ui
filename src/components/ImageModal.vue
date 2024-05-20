<template>
    <ion-page>
        
    <ion-modal :is-open="isOpen" @ionModalDidDismiss="closeModal">
      <ion-content>
        <ion-header>
            <ion-toolbar>
              <ion-title>Image</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="closeModal">
                  <ion-icon slot="icon-only" name="close"></ion-icon>
                  <p>Fermer</p>
                </ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
        <!-- <img src="../theme/images/img4.jpg" alt="Image" style="width: 100%; height: auto;"> -->
        <!-- <img :src="form.img" alt="" style="width: 100%; height: auto;"> -->
        <img :src="imageSrc" alt="Image" style="width: 100%; height: auto;">
        <p>{{form.descri}}</p>
      </ion-content>
    </ion-modal>
</ion-page>

  </template>
  
  <script>
  import { IonModal,IonToolbar,IonButton,IonBackButton, IonContent } from '@ionic/vue';
  
  export default {
    name: 'ImageModal',
    components: {
      IonModal,
      IonContent,
      IonToolbar,
      IonButton,
      IonBackButton,
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      }
    },
    data(){
        return{
            form:{
                img:'',
                descri:''
            }
        }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    },
    mounted() {
        this.form.img = this.$store.getters.promo[5]
        this.form.descri = this.$store.getters.promo.nameBar
     },
     
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  