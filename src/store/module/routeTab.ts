import { Tab } from '@/commom/commom';

export default {
    namespaced: true,
    state: {
        historyRoutes: [], // 历史记录
        currentName: '', // 当前路由name
    },
    getters: {
        // 展示的tabs
        tabList(state: any) {
            return state.historyRoutes.map((item: any) => {
                return {
                    title: item.meta ? item.meta.cn_name : '',
                    ...item,
                };
            });
        },
        // 当前name
        currentTabName(state: any) {
            return state.currentName;
        },
    },
    mutations: {
        // 路由跳转执行
        toPage(state: any, payload: Tab) {
            if (!payload.meta.newTab) { return; }
            const flag = state.historyRoutes.some((item: Tab) => item.name === payload.name);
            if (flag) {
                const index = state.historyRoutes.findIndex((item: Tab) => item.name === payload.name);
                state.historyRoutes[index] = payload;
                return;
            } else {
                state.historyRoutes.push(payload);
                state.currentName = payload.name;
            }
        },
        // tab点击关闭执行
        removeTab(state: any, payload: number) {
            // const index = state.historyRoutes.findIndex((item: any) => item.name === payload);
            state.historyRoutes.splice(payload, 1);
        },
        // 切换tab执行
        tabChange(state: any, payload: string) {
            state.currentName = payload;
        },
    },
    action: {},
};
