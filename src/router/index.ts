import Vue from 'vue';
import VueRouter from 'vue-router';
import subMenuChild from '@/views/submenu/router/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/topic',
    name: 'index',
  },
  {
    path: '/topic',
    name: 'topic',
    component: () => import(/* webpackChunkName: "topic" */ '../views/Topic.vue'),
    props: { name: 'topic', flag: true },
    meta: { cn_name: '主题设置' },
  },
  {
    path: '/type',
    name: 'type',
    component: () => import(/* webpackChunkName: "type" */ '../views/type.vue'),
    meta: { cn_name: '类型练习' },
  },
  {
    path: '/render',
    name: 'render',
    component: () => import(/* webpackChunkName: "render" */ '../views/Render.vue'),
    children: [],
    meta: { cn_name: '渲染函数' },
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue'),
  },
  {
    path: '/submenu',
    name: 'submenu',
    component: () => import(/* webpackChunkName: "error" */ '../views/submenu/views/index.vue'),
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
