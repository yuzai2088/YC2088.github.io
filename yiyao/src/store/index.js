import Vue from "vue";
import Vuex from "vuex";
import  home from "./homeModel";
import  shopping from "./shoppingModel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flag:true,
  },
  mutations: {
    setflag(state,flag){
      state.flag = flag;
    }
  },
  actions: {

  },
  modules: {
    home,shopping
  },
  getters:{

  }
});
