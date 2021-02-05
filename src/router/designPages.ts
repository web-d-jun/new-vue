interface RouterPage {
  path: string;
  component: object;
  name: any;
  meta: object;
}

const designPageRouter: RouterPage[] = [
  {
    path: 'design-1/',
    component: () => import('@/page/design_view/design-1.vue'),
    name: 'Design-1',
    meta: {
      title: 'Design-1',
    },
  },
];

export default designPageRouter;
