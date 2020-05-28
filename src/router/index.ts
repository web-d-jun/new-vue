import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Default from "../views/default.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/default",
    name: "Default",
    component: Default,
    children: [
      {
        path: "/default/dashboard",
        component: () => import("@/page/default_view/dashboard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
