<template>
    <transition name='slide'>
        <keep-alive :exclude="notAliveList">
            <router-view></router-view>
        </keep-alive>
    </transition>
</template>

<script lang='ts'>
    import { Component, Vue} from 'vue-property-decorator';
    @Component
    export default class DyRouterView extends Vue {
        get notAliveList() {
            return this.$notAliveList;
        }
    }
</script>

<style scoped lang='scss'>
    @import '../../assets/sass/dynamic-response.scss';
</style>