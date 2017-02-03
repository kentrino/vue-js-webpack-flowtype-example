const Vue = require('vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);
import App from './component/app.vue';
import pageA from './component/pageA.vue';
import pageB from './component/pageB.vue';
import test from './component/test';

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

const router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  ...App
}).$mount("#app");
