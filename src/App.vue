<template>
  <div id="app">
      <el-button @click="toDemo">toDemo</el-button>
      <el-button @click="toType">toType</el-button>
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Man } from '@/commom/commom';

@Component({
  components: {
  },
})
export default class App extends Vue {
  public a: string = '';
  private checkArguments(val: Man) {
    console.log(val);
  }
  private toDemo() {
    this.$router.push({ name: 'demo' });
  }
  private toType() {
    this.$router.push({ name: 'type' });
  }
  private created() {
    this.checkArguments({ name: 'tony', age: 12, sex: 1, isMarry: true });
  }
}
</script>

<style>
</style>
