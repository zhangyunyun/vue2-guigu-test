<template>
    <div class="comment">
      <Header :headerTitle="headerTitle">
        <span slot="left" class="header_left" v-on:click="$router.go(-1)">
          <i class="iconfont icon-arrow"></i>
        </span>
      </Header>
      <h2 class="title">comments评论</h2>
      <!--<Adds :addComment="addComment"></Adds>-->
      <Adds></Adds>
      <Lists :comments='comments' :delComment="delComment"></Lists>
    </div>
</template>

<script>
  import pubSub from 'pubsub-js'
  import storageUtil from "../../../util/storageUtil";

  import Header from '../../../components/header/Header'
  import Adds from '../../../components/comments/Adds.vue'
  import Lists from '../../../components/comments/Lists.vue'
  export default{
    name: 'Comment',
    components: {
      Header,
      Adds,
      Lists
    },
    data(){
      return{
        headerTitle:"comments评论组件",
        comments:storageUtil.get('comments_key')
      }
    },
    mounted() {
      //订阅消息 添加事件监听
      pubSub.subscribe('addComment', (mes,comment) =>{
        this.addComment(comment)
      })
    },
    watch:{
      comments:{
        deep:true, //深度监视
        handler:function(value){
          //window.localStorage.setItem('comments_key', JSON.stringify(value))
          storageUtil.set('comments_key',value)
        }
      }
    },
    methods:{
      //添加评论
      addComment(comment){
        console.log(this.comments);
        this.comments.unshift(comment);
      },
      //删除评论
      delComment(index){
        this.comments.splice(index,1);
      }
    }
  }
</script>
