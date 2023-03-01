import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import gtOrder from '../views/gt-order.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/order",
    name: "gtOrder",
    component: gtOrder,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;