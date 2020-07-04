<template>
    <div class='menu-box'>
        <el-menu
            background-color="#1A2155"
            text-color='#eee'
            :collapse="isCollapse"
            router
            :default-active='activeNav'>
            <component
                v-for='nav in menu'
                :key='nav.path'
                :index='nav.fullPath'
                :style='!(nav.children && nav.children.length) && minWidth'
                :is='nav.children && nav.children.length ? "el-submenu" : "el-menu-item"'>
                <template v-if='nav.children && nav.children.length'>
                    <template slot="title">
                        <i :class="nav.meta && nav.meta.icon ? nav.meta.icon : 'el-icon-setting'"></i>
                        <span slot="title">{{nav.meta && nav.meta.cn_name ? nav.meta.cn_name : '默认文案'}}</span>
                    </template>
                    <el-menu-item
                        v-for='(child,index) in filterNav(nav.children)'
                        :key='index' :index='nav.fullPath+"/"+child.path'>
                        <div class='placeholder'></div>
                        <span slot="title">{{child.meta && child.meta.cn_name ? child.meta.cn_name: '默认文案'}}</span>
                    </el-menu-item>
                </template>
                <template v-else>
                    <i :class="nav.meta && nav.meta.icon ? nav.meta.icon : 'el-icon-location'"></i>
                    <span slot="title">{{nav.meta && nav.meta.cn_name ? nav.meta.cn_name : '默认文案'}}</span>
                </template>
            </component>
        </el-menu>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';
    @Component
    export default class SlideMenu extends Vue {

        // 控制是否折叠
        @Prop({ default: false })
        private isCollapse: boolean;

        // 菜单内容
        @Prop({ default: [] })
        private menu: any[];

        // 默认选中
        @Prop({ default: '' })
        private activeNav: string;

        // 控制折叠与展开内容展示的大小
        get minWidth(): any {
            return {
                minWidth: this.isCollapse ? '64px' : '200px',
            };
        }

        // 过滤无用路由
        private filterNav(arr: any[]) {
            return arr.filter((item: any) => {
                return item.meta && item.meta.cn_name;
            });
        }

    }
</script>

<style scoped lang='scss'>
    .placeholder {
        width:10px;
        display:inline-block;
    }
</style>

<style>
    /* menu动效bug以及样式bug处理 */
    .menu-box .el-menu {
        border-right: none !important;
    }
    .menu-box .el-menu .el-submenu .el-submenu__title{
        min-width:200px;
        border-bottom: 1px solid #0D1236;
    }
    .menu-box .el-menu .el-menu-item {
        border-bottom: 1px solid #0D1236;
    }
    /* .menu-box .el-submenu__icon-arrow {
        display: none;
    } */
   /* .menu-box .collapse-transition {
        -webkit-transition: 0s height, 0s padding-top, 0s padding-bottom;
        transition: 0s height, 0s padding-top, 0s padding-bottom
    } */
    .menu-box .horizontal-collapse-transition {
        -webkit-transition: 0s width, 0s padding-left, 0s padding-right;
        transition: 0s width, 0s padding-left, 0s padding-right
    }
</style>
