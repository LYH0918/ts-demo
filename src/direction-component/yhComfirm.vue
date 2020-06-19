<template>
    <div class='mask' v-if='visible'>
        <div class='confirm'>
            <div class='inputBox'>
                <div class='title'>{{title}}</div>
                <div class='input-content'>
                    <!-- <el-input></el-input> -->
                    {{content}}
                </div>
                <div class='btn'>
                    <el-button @click='getResult("cancel")' size='small'>{{cancelText}}</el-button>
                    <el-button type='primary' @click='getResult("confirm")' size='small'>{{confirmText}}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Vue, Component, Watch } from 'vue-property-decorator';
    @Component
    export default class YHConfirm extends Vue {
        public visible: boolean = false;
        private title: string = '默认标题';
        private content: string = '默认文案';
        private confirmText: string = '确认';
        private cancelText: string = '取消';

        private success = (val: string) => { return; };
        private fail = (val: string) => { return; };

        private hide() {
            this.visible = false;
        }

        private show(data: {
        title: string,
        content: string,
        confirmText: string,
        cancelText: string,
        success: (val: string) => void,
        fail: (val: string) => void} = {
            title: '默认标题',
            content: '默认文案',
            confirmText: '确认',
            cancelText: '取消',
            success: (val: string) => { return; },
            fail: (val: string) => { return; },
        }) {
            const {
                title = '默认标题',
                content = '默认文案',
                confirmText = '确认',
                cancelText = '取消',
                success = (val: string) => { return; },
                fail = (val: string) => { return; },
            } = data;
            this.title = title;
            this.content = content;
            this.success = success;
            this.fail = fail;
            this.confirmText = confirmText;
            this.cancelText = cancelText;
            this.visible = true;
        }

        private callback(val: string) {
            if (val === 'confirm') {
                this.success(val);
            } else {
                this.fail(val);
            }
        }

        private getResult(result: string) {
            this.callback(result);
            this.visible = false;
        }
    }
</script>

<style lang='scss'>
    .mask{
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,0.3);
        position:fixed;
        top:0;
        left:0;
        .confirm {
            font-size:13px;
            display: flex;
            justify-content: center;
            align-items: center;
            width:100%;
            height:100%;
            padding-bottom: 20vh;
            box-sizing: border-box;
            .inputBox {
                background:#FFFFFF;
                border-radius:6px;
                overflow: hidden;
                min-width:400px;
                .input-content{
                    padding:20px;
                    border-top:1px solid #ddd;
                    border-bottom:1px solid #ddd;
                }
                .title,.btn{
                    width:100%;
                    height:50px;
                }
                .title {
                    line-height:50px;
                    padding-left:12px;
                    font-size:16px;
                    font-weight: 500;
                }
                .btn {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding:0 12px;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>