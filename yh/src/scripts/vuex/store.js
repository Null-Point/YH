import Vue from "../libs/vue.js";
import Vuex from "../libs/vuex.min.js";
Vue.use(Vuex);
const state = {
  tabIndex: 0
}

const mutations = {
  CHANGETAB (state, currentTabindex) {
    state.tabIndex = currentTabindex;
  }
}

export default new Vuex.Store({
  state,
  mutations
});
