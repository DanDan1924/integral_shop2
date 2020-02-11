import Vue from 'vue'
import Router from 'vue-router'
// import store from 'store'

Vue.use(Router)

import shop from './shop'


const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...shop
  ]
})

export default router
