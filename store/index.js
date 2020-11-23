import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
  websiteId: 13441762852864,
  menuList: []
})

const mutations = {
  getMenuList(state, val) {
    state.menuList = val
  }
}

const actions = {
  getMenuList: ({ commit }, menuList) => {
    commit('getMenuList', menuList)
  }
}

export default {state, mutations, actions}
