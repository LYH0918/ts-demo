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
                    title: item.meta ? (item.meta.cn_name ? item.meta.cn_name : item.meta.tabName) : '',
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
            if (!payload.meta.newTab && (!payload.meta.derivation || !payload.meta.parentName)) { return; }
            const flag = state.historyRoutes.some((item: Tab) => item.name === payload.name);
            if (flag) {
                const index = state.historyRoutes.findIndex((item: Tab) => item.name === payload.name);
                if (payload.meta.derivation && payload.meta.parentName) {
                    if (payload.meta.newTab) {
                        if (index > -1) {
                            state.historyRoutes[index] = payload;
                            state.historyRoutes = [...state.historyRoutes];
                            state.currentName = state.historyRoutes[index].name;
                        } else {
                            state.historyRoutes.push(payload);
                            state.currentName = payload.name;
                        }
                    } else {
                        const meta = {...state.historyRoutes[index].meta, parentName: payload.meta.parentName};
                        const item = {...payload, meta};
                        state.historyRoutes[index] = item;
                        state.historyRoutes = [...state.historyRoutes];
                        state.currentName = state.historyRoutes[index].name;
                    }
                } else {
                    state.historyRoutes[index] = payload;
                    state.historyRoutes = [...state.historyRoutes];
                    state.currentName = payload.name;
                }
                return;
            } else {
                if (payload.meta.derivation && payload.meta.parentName) {
                    const sign = state.historyRoutes.some((item: Tab) => {
                        return item.name === payload.meta.parentName;
                    });
                    if (sign) {
                        if (!payload.meta.newTab) {
                            const index = state.historyRoutes.findIndex((child: Tab) => {
                                return child.name === payload.meta.parentName;
                            });
                            const meta = {...state.historyRoutes[index].meta, parentName: payload.meta.parentName};
                            const item = {...payload, meta};
                            state.historyRoutes[index] = item;
                            state.historyRoutes = [...state.historyRoutes];
                            state.currentName = state.historyRoutes[index].name;
                        } else {
                            const index = state.historyRoutes.findIndex((item: Tab) => item.name === payload.name);
                            if (index > -1) {
                                state.historyRoutes[index] = payload;
                                state.historyRoutes = [...state.historyRoutes];
                                state.currentName = state.historyRoutes[index].name;
                            } else {
                                state.historyRoutes.push(payload);
                                state.currentName = payload.name;
                            }
                        }
                        return;
                    } else {
                        const index = state.historyRoutes.findIndex((item: Tab) => {
                            return item.name === payload.meta.parentName;
                        });
                        const child = index > -1 ? payload : {...payload, name: payload.meta.parentName};
                        state.historyRoutes.push(child);
                        state.currentName = payload.meta.parentName;
                    }
                } else {
                    let index = -1;
                    if (!payload.meta.newTab && payload.meta.parentName) {
                        index = state.historyRoutes.findIndex((item: Tab) => item.name === payload.meta.parentName);
                    } else {
                        for (let i = 0; i < state.historyRoutes.length; i++) {
                            const item = state.historyRoutes[i];
                            if (item.meta && item.meta.parentName) {
                                if (payload.name === item.meta.parentName) { index = i; } break;
                            } else {
                                if (payload.name === item.name) { index = i; } break;
                            }
                        }
                    }
                    index > -1 ? state.historyRoutes[index] = payload : state.historyRoutes.push(payload);
                    state.historyRoutes = [...state.historyRoutes];
                    state.currentName = payload.name;
                }
            }
        },
        // tab点击关闭执行
        removeTab(state: any, payload: number) {
            state.historyRoutes.splice(payload, 1);
        },
        // 切换tab执行
        tabChange(state: any, payload: string) {
            state.currentName = payload;
        },
    },
    action: {},
};
