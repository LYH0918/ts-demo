<template>
  <div class="about">
    <h1 @click='toSon'>This is page2</h1>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator';
  @Component
  export default class GrandsonTwo extends Vue {
    private toSon() {
      this.$router.push({name: 'SubViewTwo', params: {name: 'testTabParams'}});
    }
  }
</script>