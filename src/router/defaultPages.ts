interface RouterPage {
  path: string;
  component: object;
  name: any;
  meta: object;
}

const defaultPageRouter: RouterPage[] = [
  {
    path: "dashboard/",
    component: () => import("@/page/default_view/dashboard.vue"),
    name: "Dashboard",
    meta: {
      title: "Dashboard",
    },
  },
];

export default defaultPageRouter;
