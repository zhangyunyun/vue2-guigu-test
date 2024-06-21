<template>
  <div class="detail">
    <Header :headerTitle="headerTitle">
      <span slot="left" class="header_left" v-on:click="$router.go(-1)">
        <i class="iconfont icon-arrow"></i>
      </span>
    </Header>
    <div class="content">
      <h3 class="line-clamp">{{lists.title}}</h3>
      <p v-html="lists.content"></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import Header from '../../../components/header/Header'
  export default {
    name:"detail",
    components:{
      Header
    },
    data(){
      return{
        headerTitle:'详情',
        lists:[]
      }
    },
    mounted(){
      //this.$route.query
      const aid = this.$route.query.aid

      this.getData(aid)
    },
    methods:{
       getData(aid){
         //get请求如果跨域的话，后台php java里面允许跨域请求
         const api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;

         axios.get(api).then((response) => {

           this.lists = response.data.result[0]

           console.log(this.lists)

         }).catch((err) => {
           //console.log(err)
         })
       }
    }
  }
</script>

<style lang="scss" scoped>
  .detail{
    background:#fff;
  }
  .content{
    padding:.35rem;
    h3{
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
    >p{
      color:#666;
      margin:0!important;
      word-break: break-all;
      >p{
        color:#666!important;
        margin:0!important;
        word-break: break-all;
      }
      >span{
        color: rgb(102, 102,102)!important;
      }
    }
  }
</style>
