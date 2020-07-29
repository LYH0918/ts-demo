<template>
  <div class="about">
    <h1 @click='toSon'>this is child1</h1>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator';
  @Component
  export default class GrandsonOne extends Vue {
    private toSon() {
      this.$router.push({name: 'SubTestView', params: {name: 'testTabParams'}});
    }
  }
</script>