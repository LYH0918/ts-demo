const routes = [
    {
        path: '',
        redirect: 'topic-bgcolor',
    },
    {
        path: 'topic-bgcolor',
        name: 'topicBgcolor',
        component: () => import(/* webpackChunkName: "topicBgcolor" */ '../views/Topic.vue'),
        meta: { cn_name: '背景主题练习', newTab: true },
    },
];

export default routes;
