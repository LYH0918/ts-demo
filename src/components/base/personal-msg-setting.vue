<template>
    <div class='btn-box full-box flex-end'>
        <div class='personal-box flex'>
            <div class='personal flex-normal'>
                <div class='avatar'></div>
                <div class='name'>张三丰</div>
                <i class='el-icon-caret-bottom'></i>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';
    export default class Personal extends Vue {}
</script>

<style scoped lang='scss'>
    .btn-box {
        .personal-box {
            padding: 4px 8px;
            border-radius: 6px;
            cursor: pointer;
            &:hover{
                background:#f6f6f6;
            }
            .personal {
                height:28px;
                .avatar {
                    width:28px;
                    height:100%;
                    background:#333;
                    border-radius: 50%;
                }
                .name{
                    font-size:16px;
                    color:#666;
                    margin-left:8px;
                    font-weight:bold;
                }
                i{
                    margin-top:2px;
                    color:#666;
                }
            }
        }
    }
</style>