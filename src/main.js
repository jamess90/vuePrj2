import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import CommonCss from './mobile/css/common.css'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  store,
  vuetify,
  CommonCss,
  render: h => h(App),
  router
}).$mount('#app')
