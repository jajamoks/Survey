import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import config from './config'

/* eslint import/no-unresolved: 0 */
Vue.config.productionTip = false

firebase.initializeApp(config)

new Vue({
  render: h => h(App),
}).$mount('#app')
