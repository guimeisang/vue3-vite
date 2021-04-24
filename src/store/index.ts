import { createStore } from 'vuex'

const defaultState = {
  count: 0,
}

const storeConfig = {
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    },
  },
  actions: {
    increment(context: any) {
      context.commit('increment')
    },
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    },
  },
}

export default createStore(storeConfig)
