<template>
  <div id="app">
      <header class='flex'>
        <div class='logo flex-center'>
          <h2>LOGO</h2>
        </div>
        <nav class='flex'>
          <navs></navs>
          <div class='setting'>
              <personal-msg></personal-msg>
          </div>
        </nav>
      </header>
      <section class='flex'>
        <aside></aside>
        <article>
          <transition name="slide">
            <router-view></router-view>
          </transition>
        </article>
      </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import navs from '@/components/base/nav.vue';
import personalMsg from '@/components/base/personal-msg-setting.vue';

@Component({
  components: {
    navs,
    personalMsg,
  },
})
export default class App extends Vue {
  private mounted() {
    this.$nextTick(() => {
      const theme: string | undefined | null = localStorage.getItem('theme');
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
      }
    });
  }
}
</script>

<style lang='scss'>
  @import './assets/sass/dynamic-response.scss';
  #app{
    overflow-x: hidden;
    height:100%;
    header{
      height:60px;
      width:100%;
      // box-shadow: 0 5px 20px #f2f2f2;
      border-bottom:1px solid #eee;
      .logo {
        width:200px;
        height:100%;
        background:#283444;
        color:#eee;
      }
      nav {
        flex:1;
        padding: 0 16px;
        height:100%;
        .setting {
          width:136px;
          height:32px;
          margin-top:14px;
          border-left:1px solid #ddd;
        }
      }
    }
    section{
      width:100%;
      height: calc(100% - 60px);
      aside{
        width:200px;
        height:100%;
      }
      article{
        flex:1;
        padding:16px;
        height:100%;
        background:#F3F7FD;
      }
    }
  }
  
</style>
