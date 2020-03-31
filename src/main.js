import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// use api
import myplugin from '@/views/startup-api/plugin.js'
Vue.use(myplugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
