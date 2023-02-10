import { createStore } from "vuex";
import products from "./modules/products";
import vendors from "./modules/vendors";
import purchases from "./modules/purchases";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/msapp";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    vendors,
    purchases,
  },
});
