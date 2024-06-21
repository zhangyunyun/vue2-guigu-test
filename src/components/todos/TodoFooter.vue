<template>
    <div class="todoFooter">
        <div class="footLt">
            <input type="checkbox" v-model="selCompleteTodo" />
            <span>已完成{{completeSize}}/全部{{todos.length}}</span>
        </div>
        <div class="footRt">
            <button v-show="completeSize" v-on:click="delCompleteTodo">清除已完成任务</button>
        </div>
    </div>
</template>

<script>
  export default {
    props:{
      todos:Array,
      selAllTodo:Function,
      delCompleteTodo:Function
    },
    computed:{
      completeSize(){
        return this.todos.reduce(function(total,todo){
          return total + (todo.complete?1:0)
        },0);
      },
      selCompleteTodo:{
        get(){
          return this.completeSize === this.todos.length && this.completeSize > 0
        },
        set(value){
          return this.selAllTodo(value)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/mixin";
  .todoFooter{
    margin:10px;
    margin-top:.25rem;
    border:1px solid #ddd;
    padding:5px 5px;
    background:#fff;
    &:after{
      clear: both;
      height:0;
      display:block;
      overflow: hidden;
      content:""
    }
    .footLt{
      float: left;
      line-height:30px;
      input{
        position:relative;
        top:-2px;
        border:1px solid #ddd;
        width:16px;
        height:16px;
        margin-right: 3px;
      }
    }
    .footRt{
      float: right;
      button{
        height: 30px;
        border-radius:5px;
        @include btn(120px,#da4f49,#fff,13px)
      }
    }
  }
</style>
