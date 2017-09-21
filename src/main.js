// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import router from './router'
import store from './store'
import { getAllMessages } from './store/actions'

Vue.config.productionTip = false
Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueMaterial)

Vue.material.registerTheme({
  blue: {
    primary: 'blue',
    accent: 'pink',
    warn: 'whatever'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

getAllMessages(store)
