<template>
    <div>SubTestView</div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    export default class SubTestView extends Vue {
        private created() {
            console.log(this.$route.params);
        }
    }
</script>