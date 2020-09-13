import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    },
    incrementByNum (state, payload) {
      state.count += payload.amount
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          reject(new Error('errorMsg'))
        }, 1000)
      })
    }
  },
  getters: {
    isEven: state => {
      return state.count % 2 === 0
    }
  },
  modules: {
  }
})
