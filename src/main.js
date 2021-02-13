import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  Viewer,
  render: h => h(App)
}).$mount('#app')
