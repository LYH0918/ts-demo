<template>
    <div class='nav-box'>
        <div class='nav-item'>
            <div v-for='(nav, index) in navs' :key='index'>
                <span
                    :class="{br:index!=navs.length-1,pl0:index==0,active:atciveIndex==index}"
                    @click='navClick(index,nav.name,nav.path)'>
                    {{nav.meta.cn_name}}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import { Navs, Router } from '@/commom/routerType';
    @Component
    export default class Nav extends Vue {

        // 当前选中模块数组下标
        private atciveIndex: number = 0;

        // 适配router ts校验规则
        get router(): Router {
            return { history: {current: { matched: [{ name: '' }] } }, ...this.$router };
        }

        // 默认选中模块、提醒父组件更换侧边栏菜单内容
        get navs(): object[] {
            const myNavs: Navs = {
                options: {routes: []},
                ...this.router,
            };
            const nav = myNavs.options.routes.filter((item: {meta: {cn_name: string}}) => item.meta && item.meta.cn_name);
            const sessionModule = sessionStorage.getItem('currentModule');
            let currentModule: string = '';
            if (sessionModule) {
                currentModule = sessionModule;
            } else {
                currentModule = nav[0] ? nav[0].name : '';
                sessionStorage.setItem('currentModule', currentModule);
            }
            this.$emit('moduleChange', { name: currentModule, type: 'get' });
            this.atciveIndex = nav.findIndex((item: any) => {
               return item.name === currentModule;
           });
            return nav;
        }

        // 点击模块操作
        private navClick(index: number, name: string, path: string) {
            if (this.router.history.current.matched[0].name === name) { return; }
            sessionStorage.setItem('currentModule', name);
            this.atciveIndex = index;
            this.$router.push({ path });
            this.$emit('moduleChange', { name, type: 'click'});
        }
    }
</script>

<style scoped lang='scss'>
    .nav-box {
        width:100%;
        height:100%;
        overflow-x: auto;
        .nav-item {
            display: flex;
            align-items: center;
            height:100%;
            span {
                padding:0 40px;
                cursor: pointer;
                color:#000;
                white-space:nowrap;
            }
            .br {
                border-right: 1px solid #ddd;
            }
            .pl0 {
                padding-left:24px;
            }
            .active {
                @include font_color(#000);
            }
        }
    }
</style>