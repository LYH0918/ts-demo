const routes = [
    {
        path: '',
        redirect: 'render-table',
    },
    {
        path: 'render-table',
        name: 'Render',
        component: () => import(/* webpackChunkName: "Render" */ '../views/Render.vue'),
        meta: { cn_name: '渲染函数', newTab: true },
    },
];

export default routes;
