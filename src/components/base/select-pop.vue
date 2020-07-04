<!--个人技术以及时间原因，此组件并不能作为通用组件-->
<template>
    <div class='content-box'>
        <div class='pop-box'>
            <div class='msg border-bottom'>
                <div class='msg-item flex' v-for='(item,index) in msgItem' :key='index'>
                    <div class='item-label'>{{item.label}}</div>
                    <div class='item-value'>{{item.value}}</div>
                </div>
            </div>
            <div class='content-item'>
                <div :class="{'item-menu':true,'border-bottom':key!=typeList.length-1}" v-for='(menu,key) in typeList' :key='key'>
                    <div class='menu-item flex-normal' v-for='(item,index) in menu' :key='index'>
                        <div class='menu-label'>{{item.label}}</div>
                        <i class='el-icon-caret-right' v-if='item.subMenu && item.subMenu.length'></i>
                        <div class='sub-menu' v-if='item.subMenu && item.subMenu.length'>
                            <div class='sub-menu-item flex-center' v-for='(subItem,i) in item.subMenu' :key='i' @click='subMenuClick(subItem.id)'>
                                <div class='label-bar' v-if='subItem.id==theme'></div>
                                <div :class='{"sub-menu-text":true,active:subItem.id==theme}'>{{subItem.label}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';
    @Component
    export default class SelectPop extends Vue {
        private msgItem: object[] = [
            {label: 'UID：', value: 'ex_zhangsan'},
            {label: 'TEL：', value: '1343456702'},
        ];
        private typeList: object[][] = [
            [{
                label: '个人信息',
                id: 'personal-info',
            }, {
                label: '主题设置',
                id: 'theme-setting',
                subMenu: [
                    {label: '深海蓝', id: 'theme1'},
                    {label: '太阳红', id: 'theme2'},
                    {label: '活力橙', id: 'theme3'},
                ],
            }],
        ];
        private theme: string = '';
        private subMenuClick(val: string) {
            localStorage.setItem('theme', val);
            document.documentElement.setAttribute('data-theme', val);
            this.theme = val;
        }
        private created() {
            this.theme = localStorage.getItem('theme') || '';
            console.log(this.theme);
        }
    }
</script>

<style scoped lang='scss'>
    .content-box{
        position:absolute;
        z-index:999;
        top:56px;
        background:#fff;
        border-radius:6px;
        .pop-box{
            position:relative;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            padding:16px 0;
            &::after{
                content:'';
                display:block;
                position: absolute;
                top:-6px;
                right:40px;
                transform: rotate(45deg);
                width:12px;
                height:12px;
                background:#fff;
            }
            .msg {
                margin-bottom:12px;
                font-size:14px;
                padding:0 12px;
                background:#fff;
                .msg-item{
                    height:30px;
                    .item-label{
                        white-space:nowrap;
                        width:40px;
                    }
                    .item-value{
                        white-space:nowrap;
                        color:#999;
                    }
                }
            }
            .content-item{
                font-size:14px;
                background:#fff;
                .item-menu{
                    .menu-item{
                        position:relative;
                        padding:0 12px;
                        height:30px;
                        &:hover{
                            background:#eee;
                            .sub-menu {
                                display: block;
                            }
                        }
                        .sub-menu{
                            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                            border-radius:6px;
                            position:absolute;
                            display: none;
                            padding: 16px 0;
                            background:#fff;
                            left:-91px;
                            top:-16px;
                            .sub-menu-item{
                                position: relative;
                                height:30px;
                                padding:0 24px;
                                &:hover{
                                    background:#eee;
                                }
                                .label-bar{
                                    position:absolute;
                                    top:3px;
                                    left:0;
                                    height:80%;
                                    width:4px;
                                    @include control_color('#000');
                                }
                                .active{
                                    @include font_color('#000');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
</style>