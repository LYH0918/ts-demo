<template>
  <div id="app">
      <el-button @click="toDemo">toDemo</el-button>
      <el-button @click="toType">toType</el-button>
      <el-button @click="toTopic">toTopic</el-button>
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
  private toTopic() {
    this.$router.push({ name: 'topic' });
  }
  private created() {
    this.checkArguments({ name: 'tony', age: 12, sex: 1, isMarry: true });
  }
  private mounted() {
    this.$nextTick(() => {
      const theme = localStorage.getItem('theme');
      document.documentElement.setAttribute('data-theme', theme || '');
    });
  }
}
</script>

<style>
</style>
