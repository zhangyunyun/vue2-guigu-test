<template>
  <div class="news">
    <h3>新闻</h3>

    <ul>
      <li v-for="(item,index) in newsList" :key="index">{{item.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      newsList:[
        {
          id:1,
          content:'news01'
        },
        {
          id:2,
          content:'news02'
        },
        {
          id:3,
          content:'news03'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
