/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, create, update, destroy } from "../apis/products";
export default {
  namespaced: true,
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts(state: any) {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS(state: any, payload: any) {
      state.products = payload;
    },
  },
  actions: {
    getProducts(context: any) {
      get().then((res: any) => {
        context.commit("SET_PRODUCTS", res.data);
      });
    },
    updateProduct(context: any, payload: any) {
      update(payload).then((res: any) => {
        context.dispatch("getProducts");
        alert("Operation successful !!");
      });
    },
    createProduct(context: any, payload: any) {
      create(payload).then((res: any) => {
        context.dispatch("getProducts");
        alert("Operation successful !!");
      });
    },
    deleteProduct(context: any, payload: any) {
      destroy(payload).then((res: any) => {
        context.dispatch("getProducts");
        alert("Operation successful !!");
      });
    },
  },
};
