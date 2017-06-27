<template>
  <div id="app">
    <z-header></z-header>
    <router-view></router-view>
    <z-footer></z-footer>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import commodity from './components/commodity.vue'
  import footer from './components/footer.vue'
export default {
      components: {
          'z-header': header,
          'z-commodity': commodity,
          'z-footer': footer
      }
}
</script>

<style>
  @import url('reset.css');
  @import url('./css/font/iconfont.css');
  body,html{
    font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', Arial, sans-serif
  }
</style>
