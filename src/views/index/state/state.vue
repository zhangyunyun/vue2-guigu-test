<template>
  <div class="count">
    <Header :headerTitle="headerTitle">
      <span slot="left" class="header_left" v-on:click="$router.go(-1)">
        <i class="iconfont icon-arrow"></i>
      </span>
    </Header>
    <h3>计时器: {{counter.aaa}}点击了{{counter.count}}次,是{{ttt}}</h3>
    <button @click="getIncrement">+</button>
    <button @click="getDecrement">-</button>
    <button @click="getIncrementIfodd">increment if odd</button>
    <button @click="getIncrementAsync">increment async</button>

    <h3 style="margin-top:10px;">md5加密: {{test.coding}}</h3>
    <button @click="getCoding">点击加密</button>

    <h3 style="margin-top:10px;">
      sm4<br>
      <p style="margin-bottom:0;">加密:</p>
      <p>{{ test.coding1 }}</p>
      <p style="margin-bottom:0;">解密:</p>
      <p>{{ test.coding2 }}</p>
    </h3>
    <button @click="getSmfourEncry">点击加密</button>
    <button @click="getSmfourDecry">点击解密</button>

    <h3 style="margin-top:10px;">测试</h3>
    <p>{{labelNames.split(',')}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Header from '../../../components/header/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      //count:'0',
      headerTitle:'vuex计时器',
      labelNames:'推文,关注后回复,哈哈,哈哈哈哈,a'
    }
  },
  computed:{
    //读取状态
    ...mapState(['counter','test']),
    ...mapGetters(['ttt']),

    // count(){
    //   debugger
    //   console.log(this.$store.state)
    //   return this.$store.state.counter.count
    // },
    // changeCount(){
    //   return this.$store.getters.ttt
    // }
  },
  methods:{
    //分发事件
    ...mapActions(['getIncrement', 'getDecrement', 'getIncrementIfodd', 'getIncrementAsync', 'getCoding', 'getSmfourEncry', 'getSmfourDecry']),

    // increment(){
    //   this.getIncrement()
    // },

    // decrement(){
    //   this.getDecrement()
    // },

    // incrementIfOdd(){
    //   this.getIncrementIfodd()
    // },

    // incrementAsync(){
    //   this.getIncrementAsync()
    // },

    // handleCoding(){
    //   this.getCoding()
    // }
  }
}
</script>

<style lang="scss" scoped>
.count{
  padding:10px;
  button{
    margin:0 3px;
    border-radius:5px;
    height:25px; 
    line-height:25px;
    padding:0 5px;
    &:nth-of-type(1),&:nth-of-type(2){
      width:20px;
    }
  }
}
</style>
