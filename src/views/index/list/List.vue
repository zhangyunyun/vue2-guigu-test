<template>
  <div class="list">
    <Header :headerTitle="headerTitle">
      <span slot="left" class="header_left" v-on:click="$router.go(-1)">
        <i class="iconfont icon-arrow"></i>
      </span>
    </Header>
    <h2 class="title">axios列表</h2>
    <div class="litItem">
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li v-for="(list,index) in lists" :key="index">
          <router-link :to="'/detail?aid='+list.aid">{{list.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import Header from '../../../components/header/Header'
  export default {
    name:'List',
    components:{
      Header
    },
    data(){
      return{
        headerTitle:"axios列表组件",
        loading:false,
        lists:[],
        count:0,
        page:1
      }
    },
    mounted () {
      this.getData()
    },
    methods:{
      loadMore(){
        this.getData()
      },
      getData(){
        this.loading = true;
        const api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;

        axios.get(api).then((response) => {
          console.log(response)

          const resultList = response.data.result
          this.lists = this.lists.concat(response.data.result)
          ++this.page;  //每次请求完成page++

          if(response.data.result.length < 20){
            this.loading = true; //终止请求
          }
          else{
            this.loading = false; //继续请求
          }
        }).catch((error) => {
          console.log(error);
        })
      },
    }
  }
</script>
<style type="text/css" lang="scss" scoped>
  .list{
    height:100%;
    background:#fff;
  }
  .litItem{
    margin:10px;
    ul{
      li{
        position: relative;
        border-bottom: 1px dotted #ddd;
        padding: .2rem 0 .2rem .35rem;
        a{
          font-size: .25rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;            /*设置p元素最大4行，父元素需填写宽度才明显*/
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          word-wrap:break-word;
          word-break:break-all;
        }
        &:before{
          position: absolute;
          content: "";
          left: 0;
          top: calc(50% - .05rem);
          width: .1rem;
          height: .1rem;
          border-radius: 100%;
          background: #da4f49;
        }
      }
    }
  }
</style>
