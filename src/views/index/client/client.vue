<template>
  <div class="info_all">
    <Header :headerTitle="headerTitle">
      <span slot="left" class="header_left" v-on:click="$router.go(-1)">
        <i class="iconfont icon-arrow"></i>
      </span>
    </Header>
   <!-- 客户画像 -->
    <div class="userDatil">
        <div class="head">
          <i></i>
          <div class="title">CRM客户画像</div>
          <div class="close" @click="drawer = true"></div>
        </div>
        <!-- 分类菜单 -->
        <div id="tab-Box">
          <span class="left_btn" @click="leftSlide"><i class="el-icon-caret-left"></i></span>
          <div class="scroll_wrapper" ref="wrapperCon">
            <ul class="reply-nav scroll_list">
              <li
                class="reply-nav-item item"
                v-for="(item,index) in tabPortraitList" :key="index"
                 @click="setCurrentItem(item)"
                :class="{ 'reply-nav-item-checked': currentItem === item }"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="right_btn" @click="rightSlide"><i class="el-icon-caret-right"></i></div>
        </div>
        <!-- 画像数据 -->
        <div class="bodyTable">
          <div class="search">
            <el-form :inline="true">
              <div class="dInput">
                <span>名称</span>
                <!-- <el-input size="mini" class="inputs" v-model="itemName"></el-input> -->
                <input type="text" v-model="labelName" class="inputs">
              </div>
              <!-- <el-form-item label="名称">
            </el-form-item> -->
            </el-form>
            <span class="su_btn">
              <div class="btn ybtn" type="primary" size="mini" @click="query">查询</div>
              <div class="btn nbtn" size="mini" @click="labelName = ''; tableData1 = tableData ">重置</div>
            </span>
          </div>
          <div class="hr"></div>
          <div class="table">
            <!-- <el-table :data="tableData1" style="width: 100%;height:400px; padding:0 0 20px 0"> -->
            <el-table :data="tableData1" style="width: 100%;" border stripe
              :header-cell-style="{ background: '#edf0fc' }">
              <el-table-column prop="labelName" label="名称" align="center">
              </el-table-column>
              <el-table-column prop="labelValue" label="内容" align="center">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '../../../components/header/Header'
import { reqClientDetail } from '../../../api'
export default {
  name: "test",
  components: {
    Header
  },
  data() {
    return {
      headerTitle:'客户画像',
      mobile:'18919145694',
      isResult: false,
      labelName: '',  //客户画像搜索关键字
      tableData: [],  //条件查询 不要去更改此数据
      tableData1: [],

      currentItem:'基本信息',
      tabPortraitList:[], //客户画像分类tab标题
      resultData:[]  //客户画像数据
    }
  },
  mounted(){
    this.getClientDetail()
  },
  methods: {
    setCurrentItem(item) {
      this.getUserClient(item)
      this.currentItem = item;
    },
    //处理客户画像数据
    getUserClient(param){
      if(param != ""){
        //tab标签名称
        this.resultData.map((t,index) => {
          if(param == t.portraitName){
            t.portraitData.map(x => {
              if(x.labelValue == '-1'){
                x.labelValue = '否'
                x.labelValue = x.labelValue.replaceAll(/<br><br>/g, " ")
              }
            })
            this.tableData = t.portraitData
            this.tableData1 = this.tableData
          }
        })
        console.log(this.tableData1)
      }
    },
    //请求接口获取客户画像数据并分类
    async getClientDetail(){
      const { mobile } = this
      let result = await reqClientDetail(mobile)
      console.log(result)
      this.resultData = result.data.map(item => {
        if(item.sceneCode == "A5BB3F00CF0C26E0AF05989D33C2725F"){
          item.portraitName = '新业务'
        }else if(item.sceneCode == "D702632D7660FD02816F69E10CE81654"){
          item.portraitName = '一句话营销'
        }else if(item.sceneCode == "A5BB3F00CF0C26E04E97A6973C19755C"){
          item.portraitName = '个人业务'
        }else if(item.sceneCode == "A5BB3F00CF0C26E0A840857FD6F6B762"){
          item.portraitName = '服务标签'
        }else if(item.sceneCode == "A5BB3F00CF0C26E0A7073B59561842BA"){
          item.portraitName = '家庭业务'
        }else if(item.sceneCode == "D702632D7660FD025A711F89E6DCC3E0"){
          item.portraitName = '5G业务'
        }else if(item.sceneCode == "A5BB3F00CF0C26E0816F69E10CE81654"){
          item.portraitName = '政企业务'
        }else if(item.sceneCode == "A5BB3F00CF0C26E08E636BD3468BFF36"){
          item.portraitName = '基本信息'
        }else if(item.sceneCode == "14571117B66B93FBBFD5277C4D18B3EC"){
          item.portraitName = '宽带信息'
        }else if(item.sceneCode == "14571117B66B93FB956797CA5B48ECBA"){
          item.portraitName = '移动高清信息'
        }else if(item.sceneCode == "14571117B66B93FB5A711F89E6DCC3E0"){
          item.portraitName = '智能硬件信息'
        }
        return item
      })
      this.resultData.reverse()

      this.resultData.map(item => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        this.tabPortraitList.push(item.portraitName)
      })
      console.log(this.tabPortraitList)
     
      this.getUserClient('基本信息')
      // this.tableData = result.data
      // this.tableData1 = this.tableData
      // console.log(this.tableData1)
    }, 
    //客户画像搜索查询
    query() {
      this.tableData1 = []
      if (!this.labelName) {
        this.tableData1 = this.tableData
        return
      } else {
        let result = this.tableData.filter(x => {
          if (x.labelName && x.labelName.indexOf(this.labelName) >= 0) {
            return x
          }
        })
        this.tableData1 = result
      }
      console.log(this.labelName)
    },
    leftSlide() {
      // 保存滚动盒子左侧已滚动的距离
      let left = this.$refs.wrapperCon.scrollLeft
      let num = 0
      clearInterval(this.timer)
      this.timer = null
      this.timer = setInterval(() => {
        //   !left:已经滚动到最左侧
        //   一次性滚动距离（可调节）
        if (!left || num >= 300) {
          // 停止滚动
          clearInterval(this.timer)
          this.timer = null
          return
        }
        // 给滚动盒子元素赋值向左滚动距离
        this.$refs.wrapperCon.scrollLeft = left -= 30
        // 保存向左滚动距离（方便判断一次性滚动多少距离）
        num += 30
      }, 20)
      // 20：速度（可调节）
    },
    rightSlide() {
      // 保存滚动盒子左侧已滚动的距离
      let left = this.$refs.wrapperCon.scrollLeft
      // 保存元素的整体宽度
      let scrollWidth = this.$refs.wrapperCon.scrollWidth
      // 保存元素的可见宽度
      let clientWidth = this.$refs.wrapperCon.clientWidth
      let num = 0
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        // 已经滚动距离+可见宽度
        // left+clientWidth>=scrollWidth：滚动到最右侧
        // num>=300一次性滚动距离
        if (left + clientWidth >= scrollWidth || num >= 300) {
          clearInterval(this.timer)
          return
        }
        // 给滚动盒子元素赋值向左滚动距离
        this.$refs.wrapperCon.scrollLeft = left += 30
        // 保存向左滚动距离（方便判断一次性滚动多少距离）
        num += 30
      }, 20)
      // 20：速度（可调节）
    }
  },
}  
</script>

<style lang="scss" scoped>
.info_all {
  position: relative;
}
.userDatil {
  padding: 15px 13px 5px;
  font-size: 20px;
  background: #fff;
  .head {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    i {
      width: 19px;
      height: 19px;
      background: url('../../../assets/images/user.png') no-repeat;
      background-size:19px 19px;
    }
    .title {
      padding: 0 15px;
    }
    .close {
      cursor: pointer;
      width: 17px;
      height: 17px;
      background: url('../../../assets/images/close.png') 100%/100% no-repeat;
    }
  }
  .bodyTable {
    .search {
      margin-top:15px;
      display: table;
      table-layout:fixed;
      width:100%;
      .dInput,.su_btn{
        display:table-cell;
        position: relative;
        vertical-align:middle;
      }
      .dInput {
        position:relative;
        padding-left:40px;
        height: 34px;
        line-height: 34px;
        background-color: #ededed;
        box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
        border-radius: 5px;
        span {
          position:absolute;
          left:5px;
          top:calc(50% - 17px);
          height: 34px;
          font-size: 14px;
          font-weight: 550;
          color: #333333;
        }
        .inputs {
          width: 100%;
          height: 100%;
          background: #ededed !important;
          border: 0;
          outline: none;
        }
      }
      .su_btn {
         width:7rem;
        .btn {
          margin:0 3px;
          float:left;
          width: 50px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          border-radius: 5px;
          font-size: 13px;
          cursor: pointer;
        }
        .ybtn {
          background-color: #5a8aff;
          box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
          color: #fff;
        }
        .nbtn {
          background-color: #d9dee9;
          box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
          color: #333333;
        }
      }
    }
    .hr {
      width: 100%;
      height: 1px;
      background-color: #e5e5e5;
      margin: 15px 0;
    }
  }
  .table {
    height: 55vh;
    overflow-y: scroll;
    padding: 0 0 40px 0;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      color: transparent;
    }
  }
}
/* 客户画像 */
#tab-Box {
  padding:0;
  display: flex;
  align-items: center;
  .left_btn,
  .right_btn {
    width: 15px;
    height: 34px;
    background-color: #d9dee9;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scroll_wrapper {
    width: 100%;
    overflow-x: scroll;
    .scroll_list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 98%;
      margin-left: 1%;
      margin-bottom:0;
      .item {
        font-size: 13px;
        padding: 0 18px;
        height: 34px;
        line-height:34px;
        background-color: #f4f5fa;
        border: 1px solid #eeeef2;
        box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        flex-shrink: 0;
        margin-right: 5px;
      }
    }
  }
  .reply-nav-item-checked {
    background-color: #5a8aff !important;
    box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
    border-radius: 5px;
    color: #ffffff;
  }
}
.scroll_wrapper::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
