  
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
  