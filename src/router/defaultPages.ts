interface RouterPage {
  path: string;
  component: object;
}

const defaultPageRouter: RouterPage[] = [
  {
    path: "dashboard/",
    component: () => import("@/page/default_view/dashboard.vue"),
  },
];

export default defaultPageRouter;
