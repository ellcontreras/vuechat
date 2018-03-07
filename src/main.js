// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase';

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyASWDbWQtbYDBoND4bkY-Uu98bbJ_OotmE",
  authDomain: "chatapp-23d17.firebaseapp.com",
  databaseURL: "https://chatapp-23d17.firebaseio.com",
  projectId: "chatapp-23d17",
  storageBucket: "chatapp-23d17.appspot.com",
  messagingSenderId: "1036326077937"
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
