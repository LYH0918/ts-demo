import Vue from 'vue';
import VueRouter from 'vue-router';
import subMenuChild from '@/views/submenu/router';
import renderChild from '@/views/render/router';
import topicChild from '@/views/topic/router';
import typeChild from '@/views/type/router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/topic',
    name: 'module_index',
  },
  {
    path: '/topic',
    name: 'module_topic',
    component: () => import(/* webpackChunkName: "topic" */ '@/components/router-page/Frame.vue'),
    children: topicChild,
    props: { name: 'topic', flag: true },
    meta: { cn_name: '主题设置' },
  },
  {
    path: '/type',
    name: 'module_type',
    component: () => import(/* webpackChunkName: "type" */ '@/components/router-page/Frame.vue'),
    children: typeChild,
    meta: { cn_name: '类型练习' },
  },
  {
    path: '/render',
    name: 'module_render',
    component: () => import(/* webpackChunkName: "render" */ '@/components/router-page/Frame.vue'),
    children: renderChild,
    meta: { cn_name: '渲染函数' },
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue'),
  },
  {
    path: '/submenu',
    name: 'module_submenu',
    component: () => import(/* webpackChunkName: "error" */ '@/components/router-page/Frame.vue'),
    children: subMenuChild,
    meta: { cn_name: '子页面' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
