import Router from 'vue-router';

import pageA from '../component/pageA.vue';
import pageB from '../component/pageB.vue';
import test from '../component/Test';

const routes = [
  {
    path: '/pageA',
    component: pageA
  },
  {
    path: '/pageB',
    component: pageB
  },
  {
    path: '/Test',
    component: test
  }
];

const router = new Router({
  routes: routes
});

export default router;
