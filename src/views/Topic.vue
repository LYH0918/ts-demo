<template>
    <div class='bg'>
        <el-button @click="topicChange('theme1')">theme1</el-button>
        <el-button @click="topicChange('theme2')">theme2</el-button>
        <div class='test'>color</div>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    @Component
    export default class Topic extends Vue {
       private topicChange(theme: string) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }
</script>

<style lang='scss' scoped>
    .bg{
        width:100%;
        height:100%;
        border:1px solid #000;
        @include bg_color(#aaa)
    }
    .test{
        color:$test-color;
    }
</style>