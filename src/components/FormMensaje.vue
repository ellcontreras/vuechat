<template>
    <div>
        <hr>
        <label class="label" for="mensaje">Mensaje</label>
        <textarea class="textarea" name="mensaje" placeholder="Ingresa tu mensaje" v-model="mensaje" id="mensaje" cols="30" rows="5"></textarea>
        <br>
        <button @click="enviar" class="button is-link">Enviar</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'FormMensaje',
  data(){
      return {
          mensaje: "",
          user: firebase.auth().currentUser
      }
    },
    beforeMount(){
        this.user = firebase.auth().currentUser;
    },
    methods: {
        enviar(){
            console.log(this.mensaje);

            firebase.database().ref('messages').push({
                userImage: this.user.photoURL,
                username: this.user.displayName,
                mensaje: this.mensaje
            }).then(val => {
                console.log(val);
            }).catch(err => {
                console.log(err);
            })

            this.mensaje = "";
        }
    }
}
</script>

<style scoped>
    div {
        margin-top: 2em;
    }
    textarea {
        resize: none;
    }
</style>
