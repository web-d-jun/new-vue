import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import defaultPages from "./defaultPages";

const routes: RouteRecordRaw[] = [
  {
    path: "/login/",
    name: "login",
    component: () => import("@/page/login.vue"),
  },
  {
    path: "/default/",
    name: "Default",
    component: () => import("@/views/default.vue"),
    children: defaultPages,
  },
  {
    path: "/not-found/",
    name: "404",
    component: () => import("@/page/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/not-found/");
  }
  if (to.path.endsWith("/")) next();
  else next({ path: to.path + "/", query: to.query, hash: to.hash });
});

export default router;
