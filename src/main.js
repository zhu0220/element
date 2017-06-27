// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import './assets/css/header.scss';
import commodity from './components/commodity.vue'
import assess from './components/assess.vue'
import business from './components/business.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(commodity)
Vue.use(assess)
Vue.use(business)
/* eslint-disable no-new */
const routers = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: commodity},
    {path: '/commodity', component: commodity},
    {path: '/assess', component: assess}  ,
    {path: '/business', component: business}
  ]
})
new Vue({
  el: '#app',
  router,routers,
  template: '<App/>',
  components: { App }
})

window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
setRem();
function setRem () {
  let html = document.querySelector('html');
  let width = html.getBoundingClientRect().width;
  html.style.fontsize = width / 15 + 'px';
}
