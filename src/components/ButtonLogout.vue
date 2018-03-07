<template>
    <div>
        <button @click="logout" class="button is-link">Cerrar Sesión</button>              
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'ButtonLogout',
  methods: {
      logout(){
          firebase.auth().signOut();
      }
  }
}
</script>

<style scoped>

</style>

