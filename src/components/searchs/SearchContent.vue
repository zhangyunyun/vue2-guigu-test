<template>
  <div class="searchContent">
    <div class="tip">
      <p v-if="sNo" class="sNo">暂无信息，请输入搜索内容</p>
      <p v-if="sLoading" class="sLoading">加载中...</p>
      <p v-if="sError" class="sError">{{sError}}</p>
    </div>
    <ul class="list">
      <li v-for="(search,index) in searchs" :key="index">
        <a :href="search.link_url" class="listInner">
          <div class="imgBox">
            <img v-lazy="search.img_url"/>
          </div>
          <h3>{{search.name}}</h3>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import pubSub from 'pubsub-js'
import storageUtil from "../../util/storageUtil";
import axios from 'axios'
export default {
  name:"searchContent",
  data(){
    return{
      sNo:true,
      sLoading:false,
      sError:'',
      //searchs:[]  //[link_url:'', img_url:'', name:'']
      searchs:storageUtil.get('search-key')
    }
  },
  mounted() {
    //是否在此发ajax请求，不是，是在点击searchContent之后
    //订阅消息
    pubSub.subscribe('searchContent',(mes,content) => {
      const api = 'https://douban.uieee.com/v2/book/search?q='+ content   //豆瓣电影

      //发送请求前改变状(请求中)
      this.sNo = false
      this.sLoading = true
      this.searchs = null
      this.sError = ''
      //开始发送请求
      axios.get(api).then((response) => {
        console.log(response)
        const result = response.data.books
        const searchs = result.map(item => ({
          link_url:item.mobile_link,
          img_url:item.image,
          name:item.title
        }))
        //请求成功改变状态
        this.sLoading = false
        this.searchs = searchs
        console.log(this.searchs)
      }).catch((error) => {
        //请求失败
        //console.log(error)
        this.sLoading = false
        this.sError = '请求失败'
      })
    });
  },
  watch:{
    searchs:{
      deep:true, //深度监视
      handler:function(content){
        storageUtil.set('searchContent',content)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.searchContent{
  padding:.15rem;
  .tip{
    display:flex;
    align-items:center;
    justify-content: center;
    p{
      padding:.25rem .1rem;
      color:#999;
      font-size:.25rem;
    }
  }
  .list{
    display: -webkit-box;
    flex-wrap: wrap;
    li{
      flex:1 1 33.333%;
      .listInner{
        display:block;
        background:#fff;
        border-radius:5px;
        margin:.1rem;
        border:1px solid #ddd;
        .imgBox{
          position: relative;
          border-bottom: 1px solid #ddd;
          text-align: center;
          padding: .1rem;
          height: 2.5rem;
          img{
            display:block;
            width:100%;
            height:100%;
            margin:0 auto;
          }
        }
        h3{
          margin:.15rem;
          font-size:.3rem;
          line-height:1.2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp:1;            /*设置p元素最大4行，父元素需填写宽度才明显*/
          text-overflow: ellipsis;
          overflow: hidden;
          /* autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          /*因为代码环境的关系-webkit-box-orient被过滤掉了 autoprefixer 这个关键字可以免除被过滤的动作*/
      　　word-wrap:break-word;
      　　word-break:break-all;
        }
      }
    }
  }
}
</style>
