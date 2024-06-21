<template>
    <div class="todoList">
        <div class="listItem" v-for="(todo,index) in todos" :key="index"
             v-on:mouseenter="mouseEnter(index)"
             v-on:mouseleave="mouseEnter(index)"
             :class="{'bgColor':isShow&&todo.complete}">
          <input type="checkbox" v-model="todo.complete" />
          <span>{{todo.content}}</span>
          <button v-on:click="delItem(index)" v-show="todo.complete">删除</button>
        </div>
    </div>
</template>

<script>
  export default {
    props:{
      todos:Array,
      delTodo:{
        type:Function,
        required:true
      }
    },
    data(){
      return{
        isShow:true,
        isIndex:0
      }
    },
    methods:{
      delItem(index){
        const {todos,delTodo} = this
        if(window.confirm("确定要删除" +todos[index].content+"这条记录吗")){
          delTodo(index)
        }
      },
      mouseEnter(index){
        this.isShow = true
        this.isIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixin";
  .todoList{
    margin:10px;
    background:#fff;
    .bgColor{
      background: rgba(255, 91, 86, 0.07);
    }
    .listItem{
      border:1px solid #ddd;
      padding:8px 5px;
      margin-top:-1px;
      input{
        border:1px solid #ddd;
        width:16px;
        height:16px;
        margin-right: 3px;
      }
      button{
        float: right;
        height: 25px;
        border-radius: 5px;
        border: 1px solid #da4f49;
        @include btn(60px,#fff,#da4f49,13px)
      }
    }
  }
</style>
