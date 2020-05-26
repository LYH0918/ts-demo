<template>
    <div>type page</div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    import { Sport, Man, Sort, Test, TestFun } from '@/commom/commom';
    import TestChild from '@/class/demo';
    @Component
    export default class TypeDemo extends Vue {
        private wn: [string, number] = ['string', 0];
        private val: string = '';
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

        private TestFun: TestFun = function(arg) { return arg; };
    }
</script>

<style lang='less' scoped></style>