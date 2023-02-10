import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Products from "../views/Products.vue";
import Vendors from "../views/Vendors.vue";
import Purchases from "../views/Purchases.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Products,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/vendors",
    component: Vendors,
  },
  {
    path: "/purchases",
    component: Purchases,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
