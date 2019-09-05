import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import counter from './counter'
import row from './table'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { counter, row },
  plugins: [createLogger()]
})
