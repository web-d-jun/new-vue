interface RouterPage {
    path: string;
    component: object;
    name: any;
    meta: object;
  }
  
  const studyPagesRouter: RouterPage[] = [
    {
      path: "study/",
      component: () => import("@/views/study.vue"),
      name: "study",
      meta: {
        title: "study",
      },
    },
  ];
  
  export default studyPagesRouter;
  