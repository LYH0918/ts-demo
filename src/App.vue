<template>
  <div id="app">
      <header class='flex'>
        <div class='logo flex-center' id='logo' :style='!menu.length && {width:"200px"}'>
          <h2 v-if='!isCollapse'>LOGO</h2>
          <h4 v-else>LOGO</h4>
        </div>
        <nav class='flex'>
          <navs @moduleChange='moduleChange'></navs>
          <div class='setting'>
              <personal-msg></personal-msg>
          </div>
        </nav>
      </header>
      <section class='flex'>
        <aside :style='!menu.length && {minWidth:"200px",paddingBottom:"0px"}'>
          <div class='slide-box' :style='maxWidth'>
              <slide-menu :isCollapse='isCollapse' :menu='menu' :activeNav='activeNav'></slide-menu>
          </div>
          <div class='side-bot flex-end' v-if='menu.length'>
            <i :class='{
              "el-icon-d-arrow-right":isCollapse,
              "el-icon-d-arrow-left":!isCollapse,
              "collapse-icon":true}' 
              @click='collapse'></i>
          </div>
        </aside>
        <article>
          <dy-routerview></dy-routerview>
        </article>
      </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import navs from '@/components/base/nav.vue';
import personalMsg from '@/components/base/personal-msg-setting.vue';
import slideMenu from '@/components/base/side-menu.vue';
import dyRouterview from '@/components/base/dy-routerview.vue';

@Component({
  components: {
    navs,
    personalMsg,
    slideMenu,
    dyRouterview,
  },
})
export default class App extends Vue {

  // 菜单是否折叠
  private isCollapse: boolean = false;

  private menu: any[] = [];

  private activeNav: string = '';

  get router(): any { return this.$router; }

  // 点击折叠按钮触发
  private collapse() {
    const nav = document.getElementById('logo');
    this.isCollapse = !this.isCollapse;
    if (nav) { nav.style.width = this.isCollapse ? '64px' : '200px'; }
  }

  // 当菜单过多出现滚动条时，需设置菜单盒子宽度（包括折叠与展开状态），否则，滚动条会出现在盒子外面
  get maxWidth(): object {
    return this.isCollapse ? {maxWidth: '64px'} : {maxWidth: '200px'};
  }

  // 导航切换模块时触发，提醒侧边导航栏更新导航内容
  private moduleChange(option: {name: string, type: string}) {
    const routes = this.router.options.routes || [];
    const currentModule = routes.filter((item: any) => option.name === item.name )[0] || {};
    const basePath = currentModule.path;
    const menu = currentModule.children ? currentModule.children.filter((item: any) => {
      return !item.redirect && item.path.indexOf('*') === -1;
    }) : [];
    menu.map((item: any) => {
      item.fullPath = `${basePath}/${item.path}`;
    });
    this.activeNav = this.$route.path;
    this.isCollapse = option.type === 'click' ? false : this.isCollapse;
    this.menu = menu;
    // console.log(menu);
  }

  // 从localStorage中获取用户之前保存的主题信息（暂无接口调取，先local代替）
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
  #app{
    overflow-x: hidden;
    height:100%;
    header{
      height:60px;
      width:100%;
      .logo {
        width:200px;
        height:100%;
        background: #0D1236;
        color:#eee;
        border-bottom:1px solid #050D3B;
        overflow: hidden;
      }
      nav {
        flex:1;
        padding: 0 16px;
        height:100%;
        border-bottom:1px solid #eee;
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
        height:100%;
        background: $slide-bg-theme1;
        padding-bottom:50px;
        position:relative;
        .slide-box {
          overflow-y: auto;
          overflow-x: hidden;
          box-sizing: border-box;
          height:100%;
        }
        .side-bot {
          position: absolute;
          bottom:0;
          left:0;
          height:50px;
          width:100%;
          background:#0D1236;
          .collapse-icon{
            display: inline-block;
            width:64px;
            height:100%;
            color:#fff;
            padding:17px 24px;
            cursor: pointer;
          }
        }
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
