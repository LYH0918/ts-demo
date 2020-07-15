const routes = [
    {
        path: '',
        redirect: 'type-demo',
    },
    {
        path: 'type-demo',
        name: 'typeDemo',
        component: () => import(/* webpackChunkName: "typeDemo" */ '../views/type.vue'),
        meta: { cn_name: 'TS小DEMO', newTab: true },
    },
];

export default routes;
