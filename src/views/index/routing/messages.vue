<template>
  <div class="messages">
    <h3>消息</h3>

    <ul>
      <li v-for="(item,index) in messagesList" :key="index">
        <router-link :to="`/info/messages/detail?id=${item.id}`">{{item.title}}</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      messagesList:[
        {
          id:1,
          title:'messages01',
          content:'messages01 content'
        },
        {
          id:2,
          title:'messages02',
          content:'messages02 content'
        },
        {
          id:3,
          title:'messages03',
          content:'messages03 content'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
