/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, create, update, destroy } from "../apis/vendors";
export default {
  namespaced: true,
  state: () => ({
    vendors: [],
  }),
  getters: {
    getVendors(state: any) {
      return state.vendors;
    },
  },
  mutations: {
    SET_VENDORS(state: any, payload: any) {
      state.vendors = payload;
    },
  },
  actions: {
    getVendors(context: any) {
      get().then((res: any) => {
        context.commit("SET_VENDORS", res.data);
      });
    },
    updateVendor(context: any, payload: any) {
      update(payload).then((res: any) => {
        context.dispatch("getVendors");
        alert("Operation successful !!");
      });
    },
    createVendor(context: any, payload: any) {
      create(payload).then((res: any) => {
        context.dispatch("getVendors");
        alert("Operation successful !!");
      });
    },
    deleteVendor(context: any, payload: any) {
      destroy(payload).then((res: any) => {
        context.dispatch("getVendors");
        alert("Operation successful !!");
      });
    },
  },
};
