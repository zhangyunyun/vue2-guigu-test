<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/footer/Footer'
  export default {
    name: 'App',
    components: {
      Footer
    }
  }
</script>
<style lang="scss" scoped>
#app {
  font-size: 14px;
  color: #606060;
  width:100%;
  height:100%;
  background:#fff;
}
</style>
