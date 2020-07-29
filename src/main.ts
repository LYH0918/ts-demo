import Vue from 'vue';
import App from './App.vue';
import router from './router/router-hook';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import extend from '@/direction-component/extend.ts';
import Component from 'vue-class-component';
import ahead from './config/ahead';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

Vue.use( ElementUI );

Vue.use( extend );

Vue.use( ahead );

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');



