<template>
  <div class="search">
    <Header :headerTitle="headerTitle"></Header>
    <SearchHeader></SearchHeader>
    <SearchContent></SearchContent>
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import SearchHeader from "../../components/searchs/SearchHeader"
  import SearchContent from "../../components/searchs/SearchContent"
  export default {
    name: "Search",
    components:{
      Header,
      SearchHeader,
      SearchContent
    },
    data(){
      return{
        headerTitle:"搜索列表",
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
