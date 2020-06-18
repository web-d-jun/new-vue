import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/default/",
    name: "Default",
    component: () => import("@/views/default.vue"),
    children: [
      {
        path: "dashboard/",
        component: () => import("@/page/default_view/dashboard.vue"),
      },
      {
        path: "*",
        component: () => import("@/page/default_view/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path.endsWith("/")) next();
  else next({ path: to.path + "/", query: to.query, hash: to.hash });
});

export default router;
