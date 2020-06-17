import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/default",
    name: "Default",
    component: () => import("@/views/default.vue"),
    children: [
      {
        path: "/default/dashboard",
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

export default router;
