// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './css/header.scss'
import './css/commodiy.scss'
import './css/assess.scss'
import './css/footer.scss'
import App from './App'
import router from './router'
Vue.config.productionTip = false
window.addEventListener('orientationchange', setRem)
window.addEventListener('resize', setRem)
setRem()
function setRem () {
  var html = document.querySelector('html')
  var width = html.getBoundingClientRect().width
  html.style.fontSize = width / 16 + 'px'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

