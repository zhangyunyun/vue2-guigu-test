<template>
  <div class="routing">
    <Header :headerTitle="headerTitle">
      <span slot="left" class="header_left" v-on:click="$router.go(-1)">
        <i class="iconfont icon-arrow"></i>
      </span>
    </Header>
    <div class="box">
      <div class="box_top">
        <ul class="navList">
          <li :class="{current:curIndex == index}" v-for="(item, index) in navList" :key="index" @click="handleChange(index)">
            <router-link :to="item.url">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="box_cont">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      headerTitle:'路由传参',
      curIndex:0,
      navList:[
        {
          title: 'About',
          url: '/about'
        },
        {
          title: 'Info',
          url: '/info'
        }
      ] 
    }
  },
  methods:{
    handleChange(index){
      this.curIndex = index
    }
  }
}
</script>

<style lang="scss">
.box{
  padding:10px;
  .box_top{
    position:relative;
  }
  .navList{
    display: flex;
    align-items: center;
    justify-content:center;
    border-bottom:1px solid #ddd;
    li{
      flex:1;
      text-align: center;
      border:1px solid #ddd;
      border-bottom:0;
      margin-right:10px;
      line-height:30px;
      a{
        color:#333;
      }
      &.current{
        a{
          color:#da4f49;
        }
      }
      &:last-child{
        margin-right:0;
      }
    }
  }
  .box_cont{
    margin-top:10px;
  }
}
</style>
