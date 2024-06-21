<template>
    <div class="todo">
      <Header :headerTitle="headerTitle">
        <span slot="left" class="header_left" v-on:click="$router.go(-1)">
          <i class="iconfont icon-arrow"></i>
        </span>
      </Header>
      <h2 class="title">todos操作</h2>
      <!--<TodoHeader :addTodo="addTodo"></TodoHeader>-->
      <!--<TodoHeader @addTodo="addTodo"></TodoHeader>--> <!--父组件中添加自定义事件传值，子组件中this.$emit接收事件-->
      <TodoHeader ref="todoHeader"></TodoHeader> <!--父组件中ref定义标签元素，this.$refs.header.$on绑定监听传值, 子组件中this.$emit接收事件-->
      <TodoList :todos="todos" :delTodo="delTodo"></TodoList>
      <TodoFooter :todos="todos" :selAllTodo="selAllTodo" :delCompleteTodo="delCompleteTodo"></TodoFooter>
    </div>
</template>
<script>
  import pubSub from 'pubsub-js'
  import storageUtil from '../../../util/storageUtil'

  import Header from '../../../components/header/Header'
  import TodoHeader from '../../../components/todos/TodoHeader.vue'
  import TodoList from '../../../components/todos/TodoList.vue'
  import TodoFooter from '../../../components/todos/TodoFooter.vue'
  export default{
      name: 'Todo',
      components:{
        Header,
        TodoHeader,
        TodoList,
        TodoFooter
      },
      data(){
        return {
          headerTitle:"Todos操作组件",
          //todos:JSON.parse(localStorage.getItem('todo-key') || '[]')
          todos:storageUtil.get('todo-key')
        }
      },
      mounted() {
        //给TodoHeader绑定addTodo事件监听
        //this.$refs.todoHeader.$on('addTodo',this.addTodo)

        //订阅消息
        pubSub.subscribe('addTodo', (mes,todo) =>{ //箭头函数解决this指向问题
          this.addTodo(todo)
        });
      },
      watch:{
        todos:{
          deep:true, //深度监视
          // handler:function(todo){
          //   //localStorage.setItem('todo-key',JSON.stringify(todo))
          //   storageUtil.set('todo-key',todo)
          // }
          handler:storageUtil.set
        }
      },
      methods:{
        //添加记录
        addTodo(todo){
          this.todos.unshift(todo)
        },
        //删除每一条记录
        delTodo(index){
          this.todos.splice(index,1)
        },

        //清除选中的每一条记录，没选中就不清楚
        delCompleteTodo(){
          this.todos = this.todos.filter(function(todo){
            return !todo.complete
          })
        },
        //全选或全不选
        selAllTodo(check){
          this.todos.forEach(function(todo){
            todo.complete = check
          });
        }
      }
  }
</script>
