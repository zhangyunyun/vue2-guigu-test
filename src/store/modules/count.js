import Vue from 'vue'
import {
   INCREMENT,
   DECREMENT
} from '../mutation-types'

const counter = {
   state:{
      //初始化state的值
      count:0,
      aaa:'测试'
   },
   mutations: {
      //直接更新state的值
      [INCREMENT](state){
         state.count++
      },

      [DECREMENT](state){
         state.count--
      }
   },
   actions:{
      //异步 通过mutation间接更新state的值
      //递增的方法
      getIncrement({commit}){
         commit(INCREMENT)
      },

      //递减的方法
      getDecrement({commit}){
         commit(DECREMENT)
      },

      //求余的方法
      getIncrementIfodd({commit,state}){
         console.log(state)
         if(state.count % 2 == 0){
            commit(INCREMENT)
         }
      },

      //异步更新
      getIncrementAsync({commit}){
         setTimeout(() => {
            commit(INCREMENT)
         }, 1000);
      }
   }
}

export default counter
