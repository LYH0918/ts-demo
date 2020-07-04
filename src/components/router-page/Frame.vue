<template>
  <div class="about">
    <dy-routerview></dy-routerview>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import dyRouterview from '@/components/base/dy-routerview.vue';

  @Component({ components: { dyRouterview } })
  export default class SubPageIndex extends Vue {}
</script>