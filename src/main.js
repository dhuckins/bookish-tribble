import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
// no idea what's needed here for glyphs...
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot'

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
