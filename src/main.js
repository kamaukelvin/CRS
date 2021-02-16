import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store';


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://gabbyblog.herokuapp.com/';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  Viewer,
  Vuex,
  store,
  render: h => h(App)
}).$mount('#app')
