import Vue from 'vue'
import Router from 'vue-router'
import business from './../components/business.vue'
import commodity from './../components/commodity.vue'
import assess from  './../components/assess.vue'
Vue.use(business)
Vue.use(commodity)
Vue.use(assess)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/assess',
      name: 'assess',
      component: assess
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity
    },
    {
      path: '/',
      name: 'commodity',
      component: commodity
    }
  ]
})
