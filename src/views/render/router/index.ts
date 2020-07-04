const routes = [
    {
        path: '',
        redirect: 'render-table',
    },
    {
        path: 'render-table',
        name: 'renderTable',
        component: () => import(/* webpackChunkName: "renderTable" */ '../views/Render.vue'),
        meta: { cn_name: '渲染函数' },
    },
];

export default routes;
