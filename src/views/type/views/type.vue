<template>
    <div class='bg'>
        <div>type page{{userAge}}</div>
        <el-button @click='getMutation'>{{nextAge}}</el-button>
        <!-- <div>123{{getMutation()}}</div> -->
    </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    import { Sport, Man, Sort, Test, TestFun } from '@/commom/commom';
    import TestChild from '@/class/demo';
    import { Getter, Mutation, State, namespace } from 'vuex-class';
    const userModule = namespace('user');
    @Component
    export default class TypeDemo extends Vue {
        private wn: [string, number] = ['string', 0];
        private val: string = '';
        @Getter('nextAge')
        private nextAge: number;
        @userModule.State('userAge')
        private userAge: number;
        @Mutation('getInfo')
        private getInfo: () => void;
        private created() {
            const a: Sport = Sport.basketball;
            const b: string = Sport[8];
            console.log(a);
            console.log(b);
            this.getRand().then((res: string) => {
                this.val = res;
                this.setValue();
            }).catch((err: string) => {
                this.val = err;
                this.setValue();
            });
            this.testInterFace({name: '哈哈', age: 12, color: 'red', sex: 1, isMarry: true, size: 12});
            this.getSort(['haha', 'hehe']);
            // this.setArr();
            this.getClassName();
            console.log(this.TestFun(['ayay']).length);
            this.getState();
        }
        private getRand() {
            const rand = Math.random();
            if (rand > 0.5) {
                return Promise.resolve('resolve');
            } else {
                return Promise.reject('reject');
            }
        }
        private setValue(): void {
            const num: number = ( this.val as string ).length;
            console.log(num);
        }
        private testInterFace(obj: Man): void {
            console.log(obj);
        }
        private getSort(val: Sort) {
            console.log(val[0]);
        }
        // private setArr(): Test {
        //     const fun = function(num: number) { return; } as Test;
        //     fun.prop = 'fun';
        //     fun.index = 0;
        //     fun.other = true;
        //     console.log(fun);
        //     console.log(fun.prop);
        //     return fun;
        // }
        private getClassName() {
            const Lily: TestChild = new TestChild('Lily', 12);
            console.log(Lily);
            console.log(Lily.getName());
            Lily.weight = 32;
            console.log(Lily.weight);
            console.log(Lily);
        }

        private getState() {
            console.log(this.$store.state);
            console.log(this.$store.getters);
        }

        private getMutation() {
            this.getInfo();
        }

        private TestFun: TestFun = function(arg) { return arg; };
    }
</script>

<style lang='scss' scoped>
    .bg {
        @include bg_color(#aaa);
    }
</style>