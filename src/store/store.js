import Vue from "vue";
import Vuex from "vuex";
import trans from "./trans/index";

Vue.use(Vuex);


export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      trans
    }
  });
};
