<template>
  <div class="footer_guide">
    <ul class="footer">
      <li>
        <router-link to="/index" class="guide_item" v-bind:class="{'on':'/index'===$route.path}">
          <i class="iconfont icon-home"></i>
          <span class="item_icon">首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/search" class="guide_item" v-bind:class="{'on':'/search'===$route.path}">
          <i class="iconfont icon-search_icon"></i>
          <span class="item_icon">搜索</span>
        </router-link>
      </li>
      <li>
        <router-link to="/all" class="guide_item" v-bind:class="{'on':'/all'===$route.path}">
          <i class="iconfont icon-orderform"></i>
          <span class="item_icon">所有</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  .footer_guide{
    height:50px;
    .footer{
      position:fixed;
      z-index:100;
      left:0;
      right:0;
      bottom:0;
      background:#fff;
      width:100%;
      height:50px;
      display:flex;
      border-top:1px solid #ddd;
      li{
        flex:1;
        .guide_item {
          display: flex;
          flex: 1;
          text-align: center;
          flex-direction: column;
          align-items: center;
          margin: 5px;
          color: #999999;
          &.on {
            color: #DA4F49;
            .iconfont{
              color: #DA4F49;
            }
          }
          .iconfont {
            display:inline-block;
            width: 20px;
            height:20px;
            font-size:18px;
            color:#999999;
          }
          span {
            display:block;
            font-size:12px;
            margin-top:5px;
          }
        }
      }
    }
  }
</style>
