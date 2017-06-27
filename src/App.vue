<template>
  <div id="app">
    <z-header></z-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import commodity from './components/commodity.vue'
export default {
      components: {
          'z-header': header,
          'z-commodity': commodity
      }
}
</script>

<style>
  @import url('reset.css');
</style>
