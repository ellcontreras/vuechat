<template>

<div class="container">
    <div class="box">
        <div class="columns">
            <div v-if="user" class="column">
                <img :src="user.photoURL" alt="foto de usuario">
                <h1>Hola {{ user.displayName }}</h1>
            </div>
            <div class="column end">
                <ButtonLogin></ButtonLogin>
            </div>
        </div>

        <div v-if="user">
            <Mensajes></Mensajes>
            <FormMensaje></FormMensaje>
        </div>
    </div>
</div>

</template>

<script>
import firebase from 'firebase';
import ButtonLogin from './ButtonLogin';
import Mensajes from './Mensajes';
import FormMensaje from './FormMensaje';

export default {
  name: 'Home',
  components: {ButtonLogin, Mensajes, FormMensaje},
  data(){
      return {
          user: firebase.auth().currentUser
      }
  },
  beforeMount(){
      this.user = firebase.auth().currentUser;

      firebase.auth().onAuthStateChanged(user => {
          this.user = user;
          console.log("Usuario", user);
      }, error => {
          console.log(error.message);
      });
  },
  created(){
      this.user = firebase.auth().currentUser;
  }
}
</script>
<style scoped>
    .end {
        display: flex;
        justify-content: end;
    }
</style>
