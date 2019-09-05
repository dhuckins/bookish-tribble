import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions'
import { ADD_ONE, MINUS_ONE } from './mutations'

const initialState = {
  count: 0
}

export const state = { ...initialState }

export const actions = {
  [INCREMENT_COUNTER] (context) {
    context.commit(ADD_ONE)
  },

  [DECREMENT_COUNTER] (context) {
    context.commit(MINUS_ONE)
  }
}

export const mutations = {
  [ADD_ONE] (state) {
    state.count += 1
  },
  [MINUS_ONE] (state) {
    state.count -= 1
  }
}

const getters = {
  count (state) {
    return state.count
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
