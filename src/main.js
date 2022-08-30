import Vue from 'vue'
import App from './App.vue'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false


new Vue({
  store,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
