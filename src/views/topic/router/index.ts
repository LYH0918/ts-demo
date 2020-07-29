const routes = [
    {
        path: '',
        redirect: 'topic-bgcolor',
    },
    {
        path: 'topic-bgcolor',
        name: 'Topic',
        component: () => import(/* webpackChunkName: "Topic" */ '../views/Topic.vue'),
        meta: { cn_name: '背景主题练习', newTab: true },
    },
];

export default routes;
