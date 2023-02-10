/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, create, update, destroy } from "../apis/purchases";
export default {
  namespaced: true,
  state: () => ({
    purchases: [],
  }),
  getters: {
    getPurchases(state: any) {
      return state.purchases;
    },
  },
  mutations: {
    SET_PURCHASES(state: any, payload: any) {
      state.purchases = payload;
    },
  },
  actions: {
    getPurchases(context: any) {
      get().then((res: any) => {
        context.commit("SET_PURCHASES", res.data);
      });
    },
    updatePurchase(context: any, payload: any) {
      update(payload).then((res: any) => {
        context.dispatch("getPurchases");
        alert("Operation successful !!");
      });
    },
    createPurchase(context: any, payload: any) {
      create(payload).then((res: any) => {
        context.dispatch("getPurchases");
        alert("Operation successful !!");
      });
    },
    deletePurchase(context: any, payload: any) {
      destroy(payload).then((res: any) => {
        context.dispatch("getPurchases");
        alert("Operation successful !!");
      });
    },
  },
};
