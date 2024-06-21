<template>
  <div class="messageDetail">
    <!-- <h3>------获取路由参数方式1</h3>
    <p>路由ID:{{$route.params.id}}</p>
    <ul>
      <li>id:{{messageDetail1.id}}</li>
      <li>title:{{messageDetail1.title}}</li>
      <li>content:{{messageDetail1.content}}</li>
    </ul> -->

    <h3>------获取路由参数方式2</h3>
    <p>路由ID:{{$route.query.id}}</p>
    <ul>
      <li>id:{{messageDetail2.id}}</li>
      <li>title:{{messageDetail2.title}}</li>
      <li>content:{{messageDetail2.content}}</li>  
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      messageDetail1:{},
      messageDetail2:{}
    }
  },
  mounted () {
    /* 
      或崎路由参数方式一
    */
    //console.log($route.params.id)
   /*  setTimeout(() => {
      const dataList1 = [
        {id:1,title:'test1',content:'this is life1'},
        {id:2,title:'test2',content:'this is life2'},
        {id:3,title:'test3',content:'this is life3'}
      ]
    }, 1000)
    this.allMessageList1 = dataList1
    const idParma = this.$route.params.id * 1
    this.messageDetail1 = this.allMessageList1.find(item => item.id == idParma)
  */

    /* 
      或崎路由参数方式二
    */
   //console.log($route.query.id)
   //setTimeout(() => {
      const dataList2 = [
        {id:1,title:'test11',content:'this is life11'},
        {id:2,title:'test22',content:'this is life22'},
        {id:3,title:'test33',content:'this is life33'}
      ]
    //}, 1000)
    this.allMessageList2 = dataList2
    const idQuery = this.$route.query.id
    this.messageDetail2 = this.allMessageList2.find(item => item.id == idQuery)
  },
  watch:{
    // $route:function(val){
    //   console.log(val)
    //   const idParma = val.params.id * 1
    //   this.messageDetail1 = this.allMessageList1.find(item => item.id == idParma)
    // },
    $route:function(val){
      console.log(val)
      const idQuery = val.query.id
      this.messageDetail2 = this.allMessageList2.find(item => item.id == idQuery)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
