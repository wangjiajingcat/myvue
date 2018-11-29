import Vue from 'vue'
import Router from 'vue-router'
import indexNav from '@/pages/indexNav/comTop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: indexNav
    }
  ]
})
