interface RouterPage {
  path: string;
  component: object;
  name: any;
}

const defaultPageRouter: RouterPage[] = [
  {
    path: "dashboard/",
    component: () => import("@/page/default_view/dashboard.vue"),
    name: "Dashboard"
  },
];

export default defaultPageRouter;
