<template>
  <div class="index">
    <Header :headerTitle="headerTitle"></Header>
    <ul class="itemList">
      <li>
        <router-link to="/comment" v-on:click="$router.replace({path: '/comment'})">
          <div>
            <h3>CommentList</h3>
            <p>添加、删除、存储评论</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/todo" v-on:click="$router.replace({path: '/todo'})">
          <div>
            <h3>TodoList</h3>
            <p>添加、删除、存储完成全选</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/list" v-on:click="$router.replace({path: '/list'})">
          <div>
            <h3>ShowList</h3>
            <p>请求数据并分页</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/routing" v-on:click="$router.replace({path: '/routing'})">
          <div>
            <h3>route Params</h3>
            <p>路由参数传参</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/state" v-on:click="$router.replace({path: '/state'})">
          <div>
            <h3>vuex</h3>
            <p>state状态管理</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/business" v-on:click="$router.replace({path: '/business'})">
          <div>
            <h3>BusinessList</h3>
            <p>业务列表数据</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/client" v-on:click="$router.replace({path: '/client'})">
          <div>
            <h3>ClientList</h3>
            <p>客户画像详情</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/acquired" v-on:click="$router.replace({path: '/acquired'})">
          <div>
            <h3>Acquired</h3>
            <p>首页消息统计</p>
          </div>
        </router-link>
      </li>
    </ul>
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
        headerTitle:"首页"
      }
    }
  }
</script>
<style scoped lang="scss">
  .itemList{
    display:block;
    padding:.15rem;
    &::after{
      display:block;
      overflow:hidden;
      content:"";
      clear:both;
    }
    li{
      float:left;
      width:50%;
      &:nth-of-type(1) a{
        background: rgba(51, 51, 51, 0.82);
      }
      &:nth-of-type(2) a{
        background: rgba(218, 79, 73, 0.88);
      }
      &:nth-of-type(3) a{
        background:#3abcf8;
      }
      &:nth-of-type(4) a{
        background:#f8903a;
      }
      &:nth-of-type(5) a{
        background:#cc3af8;
      }
      &:nth-of-type(6) a{
        background:#f83a73;
      }
      &:nth-of-type(7) a{
        background:#f8dc3a;
      }
      a{
        display:flex;
        color: #fff;
        height:70px;
        align-items:center;
        justify-content: center;
        margin:5px;
        border-radius:5px;
         background:rgba(37, 252, 84, 0.82);
        div{
          flex:1;
          text-align: center;
          padding:.25rem;
          h3{
            color:#fff;
          }
          p{
            font-size:12px;
            height: 20px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            text-overflow: ellipsis;
            overflow: hidden;
            word-wrap:break-word;
            word-break:break-all;
          }
        }
      }
    }
  }
</style>
