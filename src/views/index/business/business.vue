<template>
  <div class="Business">
    <Header :headerTitle="headerTitle">
      <span slot="left" class="header_left" v-on:click="$router.go(-1)">
        <i class="iconfont icon-arrow"></i>
      </span>
    </Header>
     <!-- 业务推荐列表 -->
     <div class="list-box">
      <template v-if="tabList.length > 0">
        <div class="listBox-item" v-for="(item, index) in tabList" :key="index">
          <div class="listBox-itemBox">
            <el-row type="flex" align="middle">
              <el-col :span="5">
                <div class="listBox-left"><img :src="item.BUSS_IMG" alt="" srcset="" /></div>
              </el-col>
              <el-col :span="19">
                <div class="listBox-right">
                  <div class="title">{{ item.BUSS_NAME }}</div>
                  <div class="listBox-rightBox">
                    <!--  <div class="f-title">
                      <div>
                        <span>转发量：</span>
                        {{ item.sendNum }}
                      </div>
                      <div>
                        <span>办理量：</span>
                        {{ item.handleNum }}
                      </div>
                    </div> -->
                      <div class="f-title">
                      <div>
                        <span>{{ item.BUSS_SHARE_CONTENT }}</span>
                      </div>
                    </div>
                    <div class="zf">
                      <div class="zfBtn" @click="forward(item)">
                        <i class="fa fa-share" aria-hidden="true"></i>
                        转发
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </template>
      <div class="none" v-else>
        <div class="noneInner">
          <img src="../../../assets/images/none1.png" alt="">
          <p>暂无数据</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header/Header'
import { reqBusinessList } from '../../../api'
export default {
  name: "test",
  components: {
    Header
  },
  data() {
    return {
      headerTitle:'业务列表',
      mobile:'18919145694',
      tabList:[]
    }
  },
  mounted(){
    this.getBusinessListData()
  },
  methods: {
    async getBusinessListData(){
      const {mobile} = this
      let result = await reqBusinessList(mobile)
      console.log(result)
      this.tabList = result.data.filter(item => {
        if(Object.hasOwn(item,'BUSS_NAME') && Object.hasOwn(item,'BUSS_SHARE_CONTENT')){
          return item
        }
      })
    }
  }
}  
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
}
.hide{
  display:none!important;
}
.Business {
  .el-input__inner {
    border: none;
    background-color: #ededed;
    color: #888;
    box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
    border-radius: 5px;
    &::placeholder {
      color: #888;
    }
  }
  .paginationBox {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 49px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-pagination {
      margin-left: 81px;
      display: flex;
      align-items: center;
      font-size: 16px !important;
    }
    .el-pagination__total {
      color: #333333 !important;
      position: absolute;
      font-size: 16px !important;
      left: 14px;
    }
    .btn-prev,
    .btn-next {
      width: 47px;
      height: 28px;
      background-color: #d9dee9;
      border-radius: 5px;
    }
    .fySpan {
      display: inline;
      padding: 0 16px;
      color: #333 !important;
      font-weight: normal;
    }
    .el-icon-arrow-left:before {
      content: '\e792' !important;
      color: #838ea7;
    }
    .el-icon-arrow-right:before {
      content: '\e791' !important;
      color: #838ea7;
    }
    .el-pagination__jump {
      color: #333;
      font-size: 16px;
      .el-input__inner {
        color: #3c72f4;
        font-size: 16px;
        width: 34px;
        height: 28px;
        box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
        border-radius: 5px;
      }
    }
  }
}
</style>
<style lang="scss">
.hide{
  display:none;
}
.Business {
  height:100%;
  border-top: 1px solid #e5e5e5;
}
.topdiv {
  background: #f7f7f7;
  padding-top: 15px;
}
.searchBox {
  width: 92.5%;
  margin: 0 auto;
  margin-bottom: 10px;
  input {
    font-size: 16px;
    background-color: #ededed !important;
    ::placeholder {
      font-size: 16px !important;
    }
  }
}
#tab-Box {
  display: flex;
  align-items: center;
  padding: 10px 15px;
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
      .item {
        font-size: 16px;
        padding: 0 18px;
        height: 34px;
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
  display: none;
}
.list-box {
  width: 100%;
  border-top: 1px solid #e5e5e5;
  height: calc(100vh - 260px);
  overflow-y: scroll;
  &::-webkit-scrollbar{display:none}
  .listBox-item {
    border-bottom: 1px solid #e5e5e5;
    .listBox-itemBox {
      width: 92.9%;
      height: 105px;
      margin: 0 auto;
      padding-top: 15px;
    }
    .listBox-left {
      border-radius: 10px;
      overflow: hidden;
    }
  }
  .listBox-right {
    display: flex;
    height: 75px;
    flex-flow: column;
    justify-content: space-between;
    .title {
      font-size: 18px;
      padding:0 0 5px 10px;
      margin:0;
      font-size:15px;
      border-bottom:1px dashed #ddd;
    }
    .listBox-rightBox {
      display: table;
      width:100%;
      table-layout:fixed;
      .zf {
        display: table-cell;
        position:relative;
        width: 70px;
        text-align:center;
        .zfBtn{
          width: 70px;
          height: 28px;
          line-height:28px;
          font-size: 14px;
          background-color: #5a8aff;
          box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
          border-radius: 5px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        i {
          margin-right: 5px;
        }
      }
      .f-title {
        display: table-cell;
        position:relative;
        font-size: 13px;
        color: #333;
        span {
          color: #999999;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;  /*设置p元素最大4行，父元素需填写宽度才明显*/
          text-overflow: ellipsis;
          overflow: hidden;
          /* autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          word-wrap:break-word;
          word-break:break-all;
        }
      }
    }
  }
  .none {
    color: #333;
    width: 350px;
    height:100%;
    text-align: center;
    font-size: 14px;
    color: rgb(75, 75, 75);
    margin: 40px auto 0;
    display: flex;
    align-items:center;
    justify-content:center;
    .noneInner{
      flex:1;
    }
  }
  .empty {
    width: 100%;
    height: 300px;
    background: url('../../../assets/images/none.png') no-repeat;
    background-size: 100% 100%;
    border-radius: 5px;
  }
}
.confirmPopUp {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  z-index: 2;
  .main {
    position: relative;
    width: 397px;
    margin: 0 auto;
    margin-top: 126px;
    background-color: #ffffff;
    border-radius: 5px;
    text-align: center;
    padding-bottom: 16px;
    .title {
      background-color: #edf0fc;
      line-height: 52px;
      span {
        font-size: 18px;
        color: #333;
      }
      .my-close {
        position: absolute;
        right: 15px;
        color: #838ea7;
        line-height: 52px;
        font-size: 17px;
      }
    }
    ul {
      width: 92%;
      margin: 0 auto;
      li {
        background-color: #f7f7f7;
        border-radius: 5px;
        color: #333333;
        margin-bottom: 8px;
        line-height: 42px;
        font-size: 16px;
        span {
          color: #2a5b7f;
          font-size: 14px;
          background-color: #ceefff;
          border-radius: 5px;
          padding: 5px 10px;
        }
        span.fail {
          font-size: 14px;
          padding: 5px 10px;
          color: #ffffff;
          background-color: #aaaaaa;
          border-radius: 5px;
        }
      }
      .empty {
        width: 100%;
        height: 168px;
        background: url('../../../assets/images/none.png') no-repeat;
        background-size: 100% 100%;
        border-radius: 5px;
      }
    }
    .buttonGroup {
      width: 92%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      div {
        width: 48%;
        line-height: 44px;
        color: #ffffff;
        font-size: 16px;
        background-color: #5a8aff;
        box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
        border-radius: 5px;
      }
    }
  }
  .picTextBox {
    width: 336px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    font-size: 16px;
    margin-top: 17px;
    margin-bottom: 15px;
    .leftImg {
      width: 75px;
      height: 75px;
      border-radius: 10px;
      overflow: hidden;
      margin-right: 14px;
    }
    .rightText {
      color: #666;
      text-align: left;
      font-size: 16px;
      span {
        color: #333333;
      }
      :last-child {
        margin-top: 8px;
      }
    }
  }
  .imgBox {
    width: 367px;
    height: 465px;
    margin: 0 auto;
    margin-bottom: 15px;
    margin-top: 17px;
    border-radius: 15px;
    overflow: hidden;
  }
}
.changeJobIdPopUp {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  z-index: 3;
  .main {
    position: relative;
    width: 367px;
    margin: 0 auto;
    margin-top: 126px;
    background-color: #ffffff;
    border-radius: 5px;
    text-align: center;
    padding-bottom: 16px;
    .title {
      background-color: #edf0fc;
      line-height: 52px;
      span {
        font-size: 18px;
        color: #333;
      }
      .my-close {
        position: absolute;
        right: 15px;
        color: #838ea7;
        line-height: 52px;
        font-size: 17px;
      }
    }
    ul {
      width: 92%;
      margin: 0 auto;
      margin-top: 15px;
      li > label {
        display: flex;
        align-items: center;
        z-index: 2;
      }
      .selected {
        border: 1px solid #5a8aff;
      }
      li {
        position: relative;
        background-color: #f7f7f7;
        border-radius: 5px;
        color: #333333;
        margin-bottom: 8px;
        line-height: 42px;
        font-size: 16px;

        span {
          color: #2a5b7f;
          font-size: 14px;
          height: 17%;
          border-radius: 5px;
          flex: 1;
        }
        span.fail {
          font-size: 14px;
          padding: 5px 10px;
          color: #ffffff;
          background-color: #aaaaaa;
          border-radius: 5px;
        }
        .advice {
          display: block;
          width: 17px;
          height: 17px;
          background: url('../../../assets/images/select.png') no-repeat;
          background-size: 100% 100%;
          margin-right: 18px;
          z-index: 2;
          position: relative;
        }
        input[type='radio']:checked + .advice {
          background: url('../../../assets/images/selected.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      li:last-child {
        margin-bottom: 15px;
      }
      .empty {
        width: 100%;
        height: 168px;
        background-color: #f7f7f7;
        border-radius: 5px;
      }
    }
    .buttonGroup {
      width: 92%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      :first-child {
        background-color: #d9dee9;
        color: #333333;
      }
      div {
        width: 48%;
        line-height: 44px;
        color: #ffffff;
        font-size: 16px;
        background-color: #5a8aff;
        box-shadow: inset 0px 0px 1px 0px rgba(216, 213, 213, 0.85);
        border-radius: 5px;
      }
    }
  }
}
.nodata {
  width: 350px;
  height: 137px;
  text-align: center;
  font-size: 16px;
  margin-top: 100px;
  color: rgb(75, 75, 75);
  margin: 40px auto 0;
  background: url('../../../assets/images/none1.png') no-repeat;
  background-size: 100%;
  /* background-color: #fff; */
  padding-top: 160px;
  margin-top: 200px;
}
</style>
