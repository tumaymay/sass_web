// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import ElementUI from 'element-ui'
import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap//dist/js/bootstrap.min.js'
//import 'element-ui/lib/theme-chalk/index.css'
//import './assets/styles/border.css'
//import './assets/styles/reset.css'

Vue.config.productionTip = false
//Vue.use(ElementUI)  //全局安装
Vue.use($)
/*  eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
