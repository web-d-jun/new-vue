import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import defaultPages from "./defaultPages";
import mainPageRouter from './mainPages';

const routes: RouteRecordRaw[] = [
  {
    path: "/login/",
    name: "Login",
    meta: {
      title: 'Login'
    },
    component: () => import("@/page/login.vue"),
  },
  {
    path: "/main/",
    name: "Main",
    meta: {
      title: 'Main'
    },
    component: () => import('@/views/main.vue'),
    children: mainPageRouter
  },
  {
    path: "/default/",
    name: "Default",
    component: () => import("@/views/default.vue"),
    meta: {
      title: 'Default'
    },
    children: defaultPages,
  },
  {
    path: "/not-found/",
    name: "404",
    meta: {
      title: '404'
    },
    component: () => import("@/page/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {  
  document.title = to.meta.title;
  if (!to.matched.length) {
    next("/not-found/");
  }
  if (to.path.endsWith("/")) next();
  else next({ path: to.path + "/", query: to.query, hash: to.hash });
});

export default router;
