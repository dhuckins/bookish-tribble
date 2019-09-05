import { EDIT_ROW_MODE, INIT_ROW } from './actions.type'
import { SET_ROW_MODE, SET_ROW_INDEX } from './mutations.type'

const initialState = {
  rowIndex: null,
  isEditMode: false
}

export const state = { ...initialState }

export const actions = {
  [EDIT_ROW_MODE] (context, { isEditMode }) {
    // if validation/etc errors, show err popup or something...
    context.commit(SET_ROW_MODE, {
      isEditMode: !isEditMode
    })
  },

  [INIT_ROW] (context, { rowIndex }) {
    context.commit(SET_ROW_INDEX, { rowIndex })
  }
}

export const mutations = {
  [SET_ROW_MODE] (state, { isEditMode }) {
    state.isEditMode = isEditMode
  },

  [SET_ROW_INDEX] (state, { rowIndex }) {
    state.rowIndex = rowIndex
  }
}

const getters = {
  isEditMode (state) {
    return state.isEditMode
  },

  rowIndex (state) {
    return state.rowIndex
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
