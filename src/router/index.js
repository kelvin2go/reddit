import Vue from 'vue'
import Router from 'vue-router'
import Reddit from '@/components/Reddit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reddit',
      component: Reddit
    }
  ]
})
