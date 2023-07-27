import Vue from 'vue'
import App from './App.vue'
import ContadoresComponent from './ContadoresComponent.vue'

Vue.config.productionTip = false
// Registro Global
Vue.component('app-contadores', ContadoresComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
