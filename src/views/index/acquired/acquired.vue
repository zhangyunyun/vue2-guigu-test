<template>
  <div class="Business">
    <Header :headerTitle="headerTitle">
      <span slot="left" class="header_left" v-on:click="$router.go(-1)">
        <i class="iconfont icon-arrow"></i>
      </span>
    </Header>
    <!-- 获取首页消息统计 -->
    <a-spin :spinning='allSpinning'>
      <!-- by zyy 2023-1-28 -->
      <a-row :gutter='24' style='margin-top: 25px'>
        <a-col :sort='1' :sm='24' :md='12' :xl='8'>
          <chart-card>
            <template v-slot:title>
              <span class='title'>客户日活量</span>
              <div class='account-countSel'>
                <a-select size='default' placeholder='选择日期' default-value='day' v-model='customerSelValue' @change='customerSelChange' style='width: 100%;'>
                  <a-select-option value='day'>
                    今日
                  </a-select-option>
                  <a-select-option value='week'>
                    本周
                  </a-select-option>
                  <a-select-option value='month'>
                    本月
                  </a-select-option>
                </a-select>
              </div>
            </template>
            <template v-slot:chart>
              <Pie id='containterPie1' :data='proportionDataO' :statisticText='statisticTextO' :color='colorO' />
            </template>
            <template v-slot:footer>
              <!-- <span>有收发消息的客户数：0</span>
              <span class='offline'>无收发消息的客户数：0</span> -->
              <span v-for='(item,index) in proportionDataO' :key='index' class="totslShow">{{item.name}}{{item.value}}</span>
            </template>
          </chart-card>
        </a-col>
        <a-col :sort='2' :sm='24' :md='12' :xl='8'>
          <chart-card>
            <template v-slot:title>
              <span class='title'>员工日活量</span>
              <div class="account-countSel">
                <a-select size='default' placeholder='选择日期' default-value='day' v-model='employeeSelValue' @change='employeeSelChange' style='width: 100%;'>
                  <a-select-option value='day'>
                    今日
                  </a-select-option>
                  <a-select-option value='week'>
                    本周
                  </a-select-option>
                  <a-select-option value='month'>
                    本月
                  </a-select-option>
                </a-select>
              </div>
            </template>
            <template v-slot:chart>
              <Pie id='containterPie2' :data='proportionDataT' :statisticText='statisticTextT' :color='colorT' />
            </template>
            <template v-slot:footer>
              <!-- <span>有收发消息的员工数：0</span>
              <span class='offline'>全部员工数：0 </span> -->
               <span v-for='(item,index) in proportionDataT' :key='index' class="totslShow">{{item.name}}{{item.value}}</span>
            </template>
          </chart-card>
        </a-col>
        <a-col :sort='3' :sm='24' :md='12' :xl='8'>
          <chart-card>
            <template v-slot:title>
              <span class='title'>聊天统计</span>
            </template>
            <template v-slot:num>
              <div class="accountInner">
                <div class='account-count account-text'>今日好友消息数:<span>{{acquiredTotal.todayCustomerNum}}</span></div>
                <div class='account-count account-text'>今日群聊消息数:<span>{{acquiredTotal.todayGroupNum}}</span></div>
                <div class='account-count account-text'>7天好友消息数:<span>{{acquiredTotal.weekCustomerNum}}</span></div>
                <div class='account-count account-text'>7天群聊消息数:<span>{{acquiredTotal.weekGroupNum}}</span></div>
                <div class='account-count account-text'>30天好友消息数:<span>{{acquiredTotal.monthCustomerNum}}</span></div>
                <div class='account-count account-text'>30天群聊消息数:<span>{{acquiredTotal.monthGroupNum}}</span></div>
              </div>
            </template>
            <template v-slot:footer>
              <span></span>
            </template>
          </chart-card>
        </a-col>
      </a-row>
    </a-spin>  
  </div>
</template>

<script>
import Header from '../../../components/header/Header'
import ChartCard from '../../../components/ChartCard'
import Pie from '../../../components/Pie' //饼图
import { reqAcquiredTotal } from '../../../api'
export default {
  name: "acquired",
  components: {
    Header,
    'chart-card': ChartCard,
    Pie
  },
  data() {
    return {
      headerTitle:'数据统计',
      allSpinning: false,

      acquiredTotal:{}, //首页消息统计数据
      customerSelValue:'day', //客户
      proportionDataO:[], //客户日活量饼图数据
      statisticTextO:'客户日活量',
      colorO:['#0dddaf','#4697f9'],

      employeeSelValue:'day', //员工
      proportionDataT:[], //员工日活量饼图数据
      statisticTextT:'员工日活量',
      colorT:['#0dddaf','#4697f9']
    }
  },
  mounted(){
    this.getAcquiredTotal()
  },
  methods: {
    //获取首页消息统计
    getAcquiredTotal(){
      const params = {}
      reqAcquiredTotal(params)
      .then(res => {
        if (res.code == 0) {
          this.acquiredTotal = res.data //对象数据
          //客户日活量 
          this.proportionDataO.push(
            {name: '收发消息客户数', value:this.acquiredTotal.todaySendCustomerNum}, 
            {name: '无收发消息客户数', value:this.acquiredTotal.todayNotSendCustomerNum}
          )
          console.log(this.proportionDataO)

          //员工日活量
          this.proportionDataT.push(
            {name: '收发消息员工数', value:this.acquiredTotal.todaySendContactNum},
            {name: '无收发消息员工数', value:this.acquiredTotal.todayNotSendContactNum}
          )
          console.log(this.proportionDataT)
        }
      })
      .catch(err => {
        this.$message.error(err.msg)
      })
    },

    //选择客户日活量
    customerSelChange(e){
      if(this.customerSelValue == 'day'){
        this.customerSelValue = 'day'
        //客户日活量(日)
        this.proportionDataO = [
          {name: '收发消息客户数', value:this.acquiredTotal.todaySendCustomerNum},
          {name: '无收发消息客户数', value:this.acquiredTotal.todayNotSendCustomerNum}
        ]
        this.colorO = ['#0dddaf','#4697f9']
      }
      if(this.customerSelValue == 'week'){
        this.customerSelValue = 'week'
        //客户日活量(周)
        this.proportionDataO = [
          {name: '收发消息客户数', value:this.acquiredTotal.weekSendCustomerNum},
          {name: '无收发消息客户数', value:this.acquiredTotal.weekNotSendCustomerNum}
        ]
        this.colorO = ['#3bcdee', '#ffbe10']
      }
      if(this.customerSelValue == 'month'){
        this.customerSelValue = 'month'
        //客户日活量(月)
        this.proportionDataO = [
          {name: '收发消息客户数', value:this.acquiredTotal.monthSendCustomerNum},
          {name: '无收发消息客户数', value:this.acquiredTotal.monthNotSendCustomerNum}
        ]
        this.colorO = ['#ff785f', '#5fd2f0']
      }
    },

    //选择员工日活量
    employeeSelChange(e){
      console.log(e)
      if(this.employeeSelValue == 'day'){
        this.employeeSelValue = 'day'
        //客户日活量(日)
        this.proportionDataT = [
          {name: '收发消息客户数', value:this.acquiredTotal.todaySendContactNum},
          {name: '无收发消息客户数', value:this.acquiredTotal.todayNotSendContactNum}
        ]
        this.colorT = ['#0dddaf','#4697f9']
      }
      if(this.employeeSelValue == 'week'){
        this.employeeSelValue = 'week'
        //客户日活量(周)
        this.proportionDataT = [
          {name: '收发消息客户数', value:this.acquiredTotal.weekSendContactNum},
          {name: '无收发消息客户数', value:this.acquiredTotal.weekNotSendContactNum}
        ]
        this.colorT = ['#3bcdee', '#ffbe10']
      }
      if(this.employeeSelValue == 'month'){
        this.employeeSelValue = 'month'
        //客户日活量(月)
        this.proportionDataT = [
          {name: '收发消息客户数', value:this.acquiredTotal.monthSendContactNum},
          {name: '无收发消息客户数', value:this.acquiredTotal.monthNotSendContactNum}
        ]
        this.colorT = ['#ff785f', '#5fd2f0']
      }
    }
  },
}  
</script>

<style lang="scss" scoped>
.title {
  color: #0000006d;
  font-size: 14px;
}

.account {
  display: flex;
  justify-content: left;
  align-items: center;
  .account-count {
    color: #0000008d;
    font-size: 30px;
    font-weight: bold;
  }
  .main-count {
    margin-left: 0px;
  }
}

.account{
  .accountInner{
    margin-top:15px;
    .account-text{
      font-size: 15px;
      margin-top: 1px;
      margin-bottom: 0;
      span{
        font-size: 26px;
        font-weight: 700;
      }
    }
  }
}

.online {
  .offline {
    margin-left: 30px;
  }
}

.c_header {
  width: 100%;
  display: flex;
  height: 75px;
  background-color: #fff;
  border-bottom: 1px solid #cccccc;
}

.h_title {
  flex: 20%;
  margin-left: 30px;
  width: 200px;
  height: 75px;
  border-bottom: 2px solid #02a7f0;
  text-align: center;
  font-size: 16px;
  color: #02a7f0;
  line-height: 73px;
}

.h_select {
  flex: 80%;
  height: 75px;
  line-height: 75px;
  text-align: right;
  margin-right: 15px;
}

.hc_title {
  color: #0000006d;
  font-size: 14px;
}

.taskNum {
  margin-top: 45px;
}

.ts_title {
  font-size: 15px;
  color: #909399;
}

.ts_num {
  display: flex;
}

.number {
  font-size: 20px;
  font-weight: 550;
}

.colorTip {
  margin: 15px 30px;
  width: 40px;
  height: 5px;
}

.f_chatText {
  font-size: 16px;
  color: #999;
  margin-left: 30px;
}

.f_chatNum {
  font-size: 22px;
  margin-left: 40px;
  font-weight: 550;
}

.online {
  width: 80%;
  margin: 10px auto 0;
  .container {
    overflow: hidden;
  }
  .account-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .account-title {
      color: #333333;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .line {
    color: #c4a699;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .percentage {
    display: flex;
    justify-content: space-between;
    color: #52c1f5;
    font-weight: bold;
    font-size: 25px;
  }
  .count {
    display: flex;
    justify-content: space-between;
    color: #02a7f0;
    font-weight: bold;
    font-size: 25px;
  }
}

/* by zyy */
.ant-card-body{
  position: relative;
} 

.account-countSel{
  position:absolute;
  top:0;
  right:0;
  width:70px;
  height:45px;
}
#containterPie1, #containterPie2{
  text-align:center;
  margin:0 auto;
  width:100%;
  height:200px;
}
#containterPie1 div, #containterPie2 div{
  margin:0 auto;
  width:100%;
  height:200px;
}
.totslShow{
  display:inline-block; 
  margin-right:15px; 
  height:22px;
  line-height:22px;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  list-style: none;
}

.ant-spin-container{
  padding:10px!important;
}
.ant-row{
  margin-top:0!important;
  .ant-col{
    margin:10px!important;
  }
}

.ant-card-body{
  padding:10px!important;
}
</style>
