<template>
    <div class='nav-box'>
        <div class='nav-item'>
            <div v-for='(nav, index) in navs' :key='index'>
                <span
                    :class="{br:index!=navs.length-1,pl0:index==0,active:atciveIndex==index}"
                    @click='navClick(index,nav.name)'>
                    {{nav.meta.cn_name}}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';
    interface Route {
        routes: any[];
    }
    interface Navs {
        [propName: string]: any;
        options: Route;
    }
    @Component
    export default class Nav extends Vue {
        get navs(): object[] {
            const myNavs: Navs = {
                options: {routes: []},
                ...this.$router,
            };
            this.atciveIndex = myNavs.options.routes.findIndex((item: any) => {
                return item.name === this.$route.name;
            });
            return myNavs.options.routes.filter((item: {path: string}) => item.path !== '*');
        }
        private atciveIndex: number = 0;
        private navClick(index: number, name: string) {
            if (this.$route.name === name) { return; }
            this.atciveIndex = index;
            this.$router.push({ name });
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