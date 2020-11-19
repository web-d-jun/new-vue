import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import defaultPages from "./defaultPages";
import mainPageRouter from "./mainPages";
import studyPagesRouter from "./studyPages";
import * as Comm from "../assets/ts/common";

const routes: RouteRecordRaw[] = [
  {
    path: "/login/",
    name: "Login",
    meta: {
      title: "Login | 로그인",
    },
    component: () => import("@/page/login.vue"),
  },
  {
    path: "/main/",
    name: "Main",
    meta: {
      title: "Main | 메인화면",
    },
    component: () => import("@/views/main.vue"),
    children: mainPageRouter,
  },
  {
    path: "/default/",
    name: "Default",
    component: () => import("@/views/default.vue"),
    meta: {
      title: "Default",
    },
    children: defaultPages,
  },
  {
    path: "/study/",
    name: "Study",
    component: () => import("@/views/study.vue"),
    meta: {
      title: "Study | 공부",
    },
    children: studyPagesRouter,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    meta: {
      title: "404",
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

  if (to.path.endsWith("/")) {
    Comm.setCookie("recentPage", to.path, 1);

    if (to.path === "/") {
      next("/main/");
    } else {
      next();
    }

    if (!to.matched.length) {
      next("/not-found/");
    }
  } else {
    next({ path: to.path + "/", query: to.query, hash: to.hash });
  }
});

export default router;
