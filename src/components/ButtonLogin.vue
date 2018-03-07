<template>
    <div>
        <button @click="login" class="button is-link">Iniciar Sesión con fb</button>   
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'ButtonLogin',
  methods: {
      login(){
          var provider = new firebase.auth.FacebookAuthProvider();

          firebase.auth().signInWithPopup(provider).then(res =>{
              alert("Bienvenido");
          }).catch(err => {
              alert("Ha ocurrido un error");
          })
      }
  }
}
</script>

<style scoped>

</style>
