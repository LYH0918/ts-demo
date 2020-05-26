<template>
    <div>
        <div class='line-content' v-if='showLine'>
            <div>这是一行内容</div>
            <el-button size='small' @click='checkMessage'>删除</el-button>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Vue, Component, Prop} from 'vue-property-decorator';
    @Component({
        components: {
        },
    })
    export default class DemoCom extends Vue {
        @Prop({ default: '哈哈哈', type: String })  public text!: string;

        private value: string = '';

        private showLine: boolean = true;

        private checkMessage() {
            this.$YHConfirm({
                title: '警告',
                content: '确认删除此行内容?',
                confirmText: '删除',
                cancelText: '隐藏',
                success: (val: string) => { this.showLine = false; },
                // fail: (val: string) => { return; },
            });
        }
    }
</script>

<style scoped lang='less'>
    .line-content{
        display:flex;
        justify-content: space-between;
        width:800px;
        align-items: center;
        border: 1px solid #ccc;
    }
</style>