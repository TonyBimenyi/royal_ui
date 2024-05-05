<template>
  <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>All Memories</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonList>
            <IonItem>Max</IonItem>
            <IonItem>Imbecile</IonItem>
            <IonItem>Max</IonItem>
            <IonItem>Max</IonItem>
        </IonList>
    </IonContent>
  </IonPage>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem} from '@ionic/vue'
export default {
   components:{
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonList,
    IonItem
   } 
}
</script>