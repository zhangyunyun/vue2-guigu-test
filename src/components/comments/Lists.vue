<template>
    <div class="lists">
        <div class="lists-show">
            <h3>评论回复：</h3>
            <div class="lists-item">
                <div class="lists-tip" v-if="comments.length==0">
                    <p>暂无评论信息哦！</p>
                </div>
                <dl v-for="(comment,index) in comments" :key="index">
                    <dt>
                        <span v-text="comment.name.substring(0,3)"></span>说:
                        <button v-on:click="delItem(index)">删除</button>
                    </dt>
                    <dd>
                        {{comment.content}}
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Lists',
        props:{
            comments:Array,
            delComment:{
                type:Function,
                required:true
            }
        },
        methods:{
            delItem(index){
                const {delComment} = this
                delComment(index)
            }
        }
    }
</script>

<style scoped lang="scss">
  .lists-show {
    padding: 0 10px 10px;
    h3 {
      font-size: 13px;
      font-weight: bold;
    }
  }
  .lists-item {
    .lists-tip{
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 10px;
      display:flex;
      align-items: center;
      justify-content: center;
      background:#fff;
      p{
          flex:1;
      }
    }
    dl {
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 10px;
      background:#fff;
      dt {
        font-size: 15px;
        span {
          color: #da4f49;
        }
        button {
          width: 60px;
          height: 25px;
          border-radius: 5px;
          border: 1px solid #da4f49;
          color: #da4f49;
          float: right;
          background: #fff;
          font-size: 12px;
        }
      }
      dd {
         text-indent: 1em;
      }
    }
  }
</style>
