
const mainPageRouter: RouterPage[] = [
  {
    path: "dashboard/",
    component: () => import("@/page/main_view/main.vue"),
    name: "dashboard",
    meta: {
      title: "Dashboard",
    },
  },
];

export default mainPageRouter;
