<template>
  <div id="app">
    <el-button>123</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { man } from '@/commom/commom'

@Component({
  components: {
  },
})
export default class App extends Vue {
  public a: string = '';
  private checkArguments(val: man) {
    console.log(val)
  }
  private created(){
    this.checkArguments({ name:'tony',age:12,sex:1,isMarry:true })
  }
}
</script>

<style>
</style>
