<template>
    <div class="todoHeader">
        <div class="headerBox">
            <input type="text" placeholder="输入您要添加的内容并回车" v-model="content" maxlength="18" v-on:keyup="addItem($event)"/>
            <span>{{tip}}</span>
        </div>
    </div>
</template>

<script>
  import pubSub from 'pubsub-js'
  export default {
    name:'todoHeader',
    props:{
      // addTodo:{
      //   type:Function,
      //   required:true
      // }
    },
    data(){
      return {
        content:"",
        tip:""
      }
    },
    methods:{
      card(){
        const content = this.content.trim()
        const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        const Tsval = content.replace(/\s/g, '');
        if(reg.test(Tsval)){
          this.tip = "√"
        }else{
          this.tip = "身份证号码错误"
        }
      },
      addItem(event){
        //this.card.apply(this.content)
        const ev = event.keyCode
        if(ev == 13){
          const content = this.content.trim()
          if(!content){
            alert("请输入内容");
          }else{
            const todo = {
              content
            }
            const {addTodo} = this
            //addTodo(todo)
            //触发事件
            //this.$emit('addTodo',todo)

            //发布消息
            pubSub.publish('addTodo',todo)

            this.content = ""
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .todoHeader{
    margin:10px;
  }
  .headerBox{
    border:1px solid #ddd;
    padding:5px;
    background:#fff;
    input{
        width:100%;
        height:25px;
        line-height:25px;
    }
  }
</style>
