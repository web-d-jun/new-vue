import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Default from "../views/default.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Default",
    component: Default,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
