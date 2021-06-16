const defaultPageRouter: RouterPage[] = [
  {
    path: 'dashboard/',
    component: () => import('@/page/default_view/dashboard.vue'),
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: 'ai/',
    component: () => import('@/page/default_view/ai.vue'),
    name: 'Ai',
    meta: {
      title: 'Ai',
    },
  },
  {
    path: 'smart-event-list/',
    component: () => import('@/page/default_view/smart_event/smartEventList.vue'),
    name: 'SmartSms',
    meta: {
      title: 'SmartSms',
    },
  },
  {
    path: 'smart-event-list/detail/',
    component: () => import('@/page/default_view/smart_event/smartEventDetail.vue'),
    name: 'SmartViewDetail',
    meta: {
      title: 'SmartViewDetail',
    },
  },
];

export default defaultPageRouter;
