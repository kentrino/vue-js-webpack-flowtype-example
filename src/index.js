import Vue from 'vue';
import Router from 'vue-router';

import App from './component/app.vue';
import router from './router/index';

Vue.use(Router);

new Vue({
  router,
  ...App
}).$mount("#app");
