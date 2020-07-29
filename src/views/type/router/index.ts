const routes = [
    {
        path: '',
        redirect: 'type-demo',
    },
    {
        path: 'type-demo',
        name: 'TypeDemo',
        component: () => import(/* webpackChunkName: "typeDemo" */ '../views/type.vue'),
        meta: { cn_name: 'TS小DEMO', newTab: true, keepAlive: true },
    },
];

export default routes;
