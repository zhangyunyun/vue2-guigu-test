<template>
  <div class="page">
    <h2>基本信息</h2>
    <div class="boxInfo">
      <div class="boxInfoInner">
        <div class="box_top">
          <ul class="navListInfo">
            <li :class="{current:curIndex == index}" v-for="(item,index) in navList" :key="index" @click="handleChange(index)">
              <router-link :to="item.url">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <div class="box_cont">
          <router-view></router-view>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      curIndex:0,
      navList:[
        {
          title: 'News',
          url: '/info/news'
        },
        {
          title: 'Messages',
          url: '/info/messages'
        }
      ]
    }
  },
  methods: {
    handleChange(index){
      this.curIndex = index
    }
  }
}
</script>

<style lang="scss">
.boxInfo{
  padding:10px;
  .boxInfoInner{
    display: flex;
    &.box_top,&.box_cont{
      flex:1;
    }
  }
  .box_top{
    position:relative;
  }
  .navListInfo{
    width:80px;
    align-items: center;
    justify-content:center;
    border-bottom:1px solid #ddd;
    li{
      width:100%;
      text-align: center;
      border:1px solid #ddd;
      border-bottom:0;
      margin-right:10px;
      line-height:30px;
      font-size:12px;
      a{
        color:#333;
      }
      &.current{
        a{
          color:#3abcf8;
        }
      }
      &:last-child{
        margin-right:0;
      }
    }
  }
  .box_cont{
    margin-top:0;
    padding-left:10px;
  }
}
</style>
