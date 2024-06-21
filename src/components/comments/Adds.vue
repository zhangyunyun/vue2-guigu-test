<!--suppress ALL -->
<template>
    <div class="adds">
        <dl class="adds-show">
            <dt>用户名</dt>
            <dd><input type="text" placeholder="用户名" v-model="name"/></dd>
            <dt>评论内容</dt>
            <dd>
                <textarea placeholder="评论内容" v-model="content"></textarea>
            </dd>
        </dl>
        <div class="adds-btn">
            <button v-on:click="add()">提交</button>
        </div>
    </div>
</template>

<script>
  import pubSub from 'pubsub-js'
    export default{
        name: 'Adds',
        props:{
            // addComment:{
            //     type:Function,
            //     required:true
            // }
        },
        data(){
            return{
                name:'',
                content:''
            }
        },
        methods:{
            //提交评论
            add: function () {
                const name = this.name.trim();
                const content = this.content.trim()
                if (!name || !content) {
                    alert('用户名和内容不能为空')
                    return false
                }
                const comment = {
                    name,
                    content
                };
                //this.addComment(comment)

                //发布消息(触发事件)
                pubSub.publish('addComment',comment)

                this.name = ''
                this.content = ''
            }
        }
    }
</script>

<style scoped lang="scss">
  .adds-show {
    padding: 0 10px 10px;
    dt {
      font-size: 13px;
      font-weight: bold;
      margin-top: 10px;
    }
    dd {
      input {
        border: 1px solid #ccc;
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        padding: 0 5px;
        box-sizing: border-box;
      }
      textarea {
        border: 1px solid #ccc;
        width: 100%;
        height: 80px;
        margin-top: 10px;
        padding: 5px;
        color: #666;
        box-sizing: border-box;
      }
    }
  }
  .adds-btn {
    padding:0 10px 10px;
    text-align: right;
    button {
      width: 120px;
      height: 30px;
      border-radius: 5px;
      background: #da4f49;
      color: #fff;
      border: 0 none;
    }
  }
</style>
