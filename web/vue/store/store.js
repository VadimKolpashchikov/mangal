import { createStore } from "vuex";
import { phpVariable } from "./phpVariable.js";
import { promo } from "./promo.js";

export default createStore({
  modules: {
    promo,
    phpVariable,
  },
  actions: {},
  mutations: {},
  state: {},
  getters: {},
});
