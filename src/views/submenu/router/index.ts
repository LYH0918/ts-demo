// 因为路由匹配机制，所有的子路由的path不允许以'/'开头

const routes = [
    {
        path: '',
        redirect: 'page-one',
    },
    {
        path: 'page-one',
        name: 'PageOne',
        component: () => import(/* webpackChunkName: "PageOne" */ '@/components/router-page/Frame.vue'),
        children: [
            {
                path: '',
                redirect: 'grandson-one',
            },
            {
                path: 'grandson-one',
                name: 'GrandsonOne',
                component: () => import(/* webpackChunkName: "'GrandsonOne" */ '../views/subpage-one/child1.vue'),
                meta: { cn_name: '孙页1', newTab: true },
            },
            {
                path: 'grandson-one/sub-view',
                name: 'SubTestView',
                component: () => import(/* webpackChunkName: "SubTestView" */ '../views/subpage-one/sub-view/test.vue'),
                meta: { derivation: 'grandson-one', parentName: 'GrandsonOne', tabName: '孙页1' },
            },
            {
                path: 'grandson-two',
                name: 'GrandsonTwo',
                component: () => import(/* webpackChunkName: "GrandsonTwo" */ '../views/subpage-one/child2.vue'),
                meta: { cn_name: '孙页2', newTab: true },
            },
        ],
        meta: { cn_name: '子页1', icon: 'el-icon-s-order' },
    },
    {
        path: 'page-two',
        name: 'PageTwo',
        component: () => import(/* webpackChunkName: "PageTwo" */ '../views/subpage-two/index.vue'),
        meta: { cn_name: '子页2', newTab: true },
    },
    {
        path: 'page-two/sub-view',
        name: 'SubViewTwo',
        component: () => import(/* webpackChunkName: "SubViewTwo" */ '../views/subpage-two/sub-view/test.vue'),
        meta: { newTab: true, tabName: '曾孙页', hideMenu: true, derivation: 'page-two', parentName: 'PageTwo' },
    },
];

export default routes;
