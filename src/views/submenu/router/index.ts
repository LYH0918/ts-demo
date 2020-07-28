// 因为路由匹配机制，所有的子路由的path不允许以'/'开头

const routes = [
    {
        path: '',
        redirect: 'page-one',
    },
    {
        path: 'page-one',
        name: 'pageOne',
        component: () => import(/* webpackChunkName: "pageOne" */ '@/components/router-page/Frame.vue'),
        children: [
            {
                path: '',
                redirect: 'grandson-one',
            },
            {
                path: 'grandson-one',
                name: 'grandsonOne',
                component: () => import(/* webpackChunkName: "'grandsonOne" */ '../views/subpage-one/child1.vue'),
                meta: { cn_name: '孙页1', newTab: true },
            },
            {
                path: 'grandson-one/sub-view',
                name: 'subView',
                component: () => import(/* webpackChunkName: "subView" */ '../views/subpage-one/sub-view/test.vue'),
                meta: { derivation: 'grandson-one', parentName: 'grandsonOne', tabName: '孙页1' },
            },
            {
                path: 'grandson-two',
                name: 'grandsonTwo',
                component: () => import(/* webpackChunkName: "grandsonTwo" */ '../views/subpage-one/child2.vue'),
                meta: { cn_name: '孙页2', newTab: true },
            },
        ],
        meta: { cn_name: '子页1', icon: 'el-icon-s-order' },
    },
    {
        path: 'page-two',
        name: 'pageTwo',
        component: () => import(/* webpackChunkName: "pageTwo" */ '../views/subpage-two/index.vue'),
        meta: { cn_name: '子页2', newTab: true },
    },
    {
        path: 'page-two/sub-view',
        name: 'subViewTwo',
        component: () => import(/* webpackChunkName: "subViewTwo" */ '../views/subpage-two/sub-view/test.vue'),
        meta: { newTab: true, tabName: '曾孙页', hideMenu: true, derivation: 'page-two', parentName: 'pageTwo' },
    },
];

export default routes;
