<template>
    <div>
        <div v-if="!user">
            <button @click="login" class="button is-link">Iniciar Sesión con fb</button>   
        </div>
        <div v-if="user">
            <button @click="logout" class="button is-link">Cerrar Sesión</button>      
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'ButtonLogin',
  data(){
      return {
          user: firebase.auth().currentUser
      }
  },
  beforeMount(){
      this.user = firebase.auth().currentUser;
  },
  methods: {
      login(){
          var provider = new firebase.auth.FacebookAuthProvider();

          firebase.auth().signInWithPopup(provider).then(res =>{
              alert("Bienvenido");
          }).catch(err => {
              alert("Ha ocurrido un error");
          })
      },
      logout(){
          firebase.auth().signOut();
      }
  }
}
</script>

<style scoped>

</style>
