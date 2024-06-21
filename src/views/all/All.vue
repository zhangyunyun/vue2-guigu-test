<template>
  <div class="all">
    <Header :headerTitle="headerTitle"></Header>
    <h2 class="title">所有</h2>
  </div>
</template>

<script>
  import Header from '../../components/header/Header'
  export default {
    name: 'Index',
    components:{
      Header
    },
    data(){
      return{
        headerTitle:"所有"
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
