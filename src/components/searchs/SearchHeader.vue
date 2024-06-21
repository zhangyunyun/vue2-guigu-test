<template>
  <div class="searchHeader">
    <h2 class="sTitle">Search Github Users</h2>
    <div class="sSearch">
      <input type="text" placeholder="请输入您要搜索的内容" v-model="content">
      <button v-on:click="searchContent">搜索</button>
    </div>
  </div>
</template>

<script>
  import pubSub from 'pubsub-js'
  export default {
    name: "searchHeader",
    data(){
      return{
        content:''
      }
    },
    methods:{
      searchContent(){
        const content = this.content.trim();
        if(content){
          //发布消息
          pubSub.publish('searchContent',content)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.searchHeader{
  background:rgba(255, 91, 86, 0.07);
  padding:.25rem;
  .sTitle{
    color:#da4f49;
    font-size:.45rem;
  }
  .sSearch{
    position:relative;
    padding:0 2rem 0 .1rem;
    height:.8rem;
    line-height:.8rem;
    border-radius:5px;
    background:#fff;
    input{
      height:100%;
      background:transparent;
      &:-ms-input-placeholder{color:#666;font-size:.3rem;}/* IE浏览器 */
      &::-moz-placeholder{color:#666;font-size:.3rem;} /* Firefox版本19+ */
      &:-moz-placeholder{color:#666;font-size:.3rem;}/* Firefox版本4-18 */
      &::-webkit-input-placeholder{color:#666;font-size:.3rem;}/* 使用webkit内核的浏览器 */
    }
    button{
      position:absolute;
      top:calc(50% - .4rem);
      right:0;
      line-height:.8rem;
      border-radius:0 5px 5px 0;
      @include btn(2rem,#da4f49,#fff,13px);
    }
  }
}
</style>
