<template>
    <div id="messages">
        <div v-for="mensaje in mensajes" :key="mensaje.uid">
            <div class="card">
                <div class="card-body">
                    <img :src="mensaje.userImage" width="50" alt="Imagen de usuario">
                    <p><b>{{ mensaje.username }}:</b><br>{{ mensaje.mensaje }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Mensajes',
  data(){
      return {
          mensaje: {},
          mensajes: []
      }
  },
  beforeMount(){
        // firebase.database().ref('messages').
        firebase.database().ref('messages').on('child_added', snapshot => {
            this.mensajes.push(snapshot.val());
            console.log(snapshot.val());
        });

        console.log("Mensajes: ", this.mensajes);
  }
}
</script>

<style scoped>
    #messages {
        max-height: 500px;
        overflow: auto;
        overflow-y: scroll;
    }
    .card {
        background-color: rgb(219, 219, 219);
        /* color: white; */
    }
    .card-body {
        padding: 25px;
        margin: 5px;
    }
    img {
        border-radius: 50% !important;
        float: left;
        margin-right: 15px;
    }
</style>

