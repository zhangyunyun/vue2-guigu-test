<template>
  <div class="header">
    <div class="header_guide">
      <slot name="left"></slot>
      <span class="header_cent">
        <span class="header_cent_text ellipsis">{{headerTitle}}</span>
      </span>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Header',
    props:{
      headerTitle:String
    }
  }
</script>

<style lang="scss" scoped>
  /*******************头部*****************/
  .header{
    height:45px;
  }
  .header_guide{
    background-color:#da4f49;
    position:fixed;
    z-index:100;
    left:0;
    top:0;
    width:100%;
    height:45px;
    a{
      color:#fff;
    }
    .iconfont{
      font-size: 18px;
      color: #fff;
      width: 100%;
      height: 100%;
      position: relative;
      top: -1px;
    }
  }
  .header_left{
    position:absolute;
    width:20px;
    height:20px;
    left:10px;
    top:calc(50% - .3rem);
    text-align: center;
    vertical-align:middle;
    .iconfont{
      top:-8px;
    }
  }
  .header_cent{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:50%;
    color:#fff;
    text-align:center;
  }
  .header_cent_text{
    font-size:15px;
    color:#fff;
    display:block;
  }
  .header_right{
    font-size:14px;
    color:#fff;
    position:absolute;
    right:10px;
    top:50%;
    transform:translateY(-50%);
  }
</style>
