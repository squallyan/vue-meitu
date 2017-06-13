// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index.js'
import router from './router'
import Swiper from 'vue-swiper'
import store from './store'
Vue.use(Swiper)
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Swiper,
  store,
  template: '<App/>',
  components: { App }
})
