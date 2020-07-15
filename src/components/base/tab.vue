<template>
    <div class='tabs-box'>
        <el-tabs v-model="tabName" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
            <el-tab-pane
                v-for="item in tabList"
                :key="item.name"
                :label="item.title"
                :name="item.name">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import { Getter, Mutation, namespace } from 'vuex-class';
    import { Tab } from '@/commom/commom';
    const routeTab = namespace('routeTab');
    @Component
    export default class Tabs extends Vue {

        private tabName: string = '';

        @routeTab.Getter('tabList')
        private tabList: Tab[];

        @routeTab.Getter('currentTabName')
        private currentTabName: string;

        @routeTab.Mutation('removeTab')
        private tabRemove: (val: number) => void;

        @Watch('currentTabName')
        private setTabName(val: string) {
            this.tabName = val;
        }

        private jump(route: Tab) {
            const { query, params, path, name } = route;
            const flag = !!Object.keys(query).length;
            const routeParams = flag ? {path, query} : {name, params};
            this.$router.push(routeParams);
        }

        private tabClick(tab: {name: string}) {
            // console.log(tab)
            const { name } = tab;
            const route: Tab = this.tabList.filter((item: Tab) => item.name === name)[0];
            this.jump(route);
        }

        private removeTab(val: string) {
            const index = this.tabList.findIndex((item: Tab) => item.name === val);
            if (this.currentTabName !== this.tabList[index].name) {
                this.tabRemove(index);
                return;
            }
            const len = this.tabList.length;
            if (len > 1) {
                if (index === 0) {
                    this.jump(this.tabList[1]);
                } else {
                    this.jump(this.tabList[index - 1]);
                }
            } else {
                alert('none');
            }
            this.tabRemove(index);
        }
    }
</script>

<style>
    .el-tabs__item {
        height: 36px !important;
        line-height: 36px !important;
        background: #fff;
    }
</style>

<style lang='scss'>

</style>