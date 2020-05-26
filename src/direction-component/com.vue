<template>
    <div v-if='visible' @click='visible = false'>hahah</div>
</template>

<script lang='ts'>
    import { Vue, Component } from 'vue-property-decorator';
    @Component
    export default class Com extends Vue {
        public visible: boolean = false;
    }
    
</script>

<style></style>