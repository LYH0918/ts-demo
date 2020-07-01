<template>
    <div class='demo'>
        <h1>demo1</h1>
        <DemoCom text="阿萨和"></DemoCom>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    import { Gerden } from '@/commom/commom';
    import DemoCom from '@/components/DemoCom.vue';
    @Component({
        components: {
            DemoCom,
        },
    })
    export default class Demo extends Vue {
        public gerden: Gerden = Gerden.male;
        private created() {
            console.log(this.gerden);
        }
        private beforeRouteEnter(to: any, from: any, next: any) {
            next((vm: any) => { console.log(vm); });
            console.log(from.name);
        }
    }
</script>