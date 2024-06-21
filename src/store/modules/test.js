import Vue from 'vue'
import {
   CODING,
   SMFOURENCRY,
   SMFOURDECRY
} from '../mutation-types'

/* 
   md5加密 只能加密 不能进行解密
*/
import md5 from 'md5' //md5只能加密

/* 
   SM4加密解密 解密有问题
*/
// const SM4 = require('gm-crypt').sm4  //require('gm-crypt').sm3
// let sm4Config = {
//    //配置sm4参数
//    key:'1234123412ABCDEF', //这里这个key值是跟后端要的
//    mode:'ecb', //加密方式有2种，ecb和cbc两种，也是看后端如何定义的
//    cipherType:'base64'
// }
// let sm4 = new SM4(sm4Config)

/* 
   aes加密、解密
*/
// import { Encrypt, Decrypt } from '../../util/sm4Util'

import { Encrypt, Decrypt } from '../../util/secret'

const test = {
   state:{
      coding:'aaa',
      coding1:'bbb',
      coding2:'3CA356AB42AA0E8A60893A242190172071D3E0F0E90799D34738CF4F96916AC89706EDA3155423E31916B73134291DEBDA104D54A32BEE2063EC2B509D6AE2F94531396F398D56F77DCF3457A2113CDA'
   },
   mutations: {
      [CODING](state,{coding}){
         state.coding = coding
      },
      [SMFOURENCRY](state,{coding1}){
         state.coding1 = coding1
      },
      [SMFOURDECRY](state,{coding2}){
         state.coding2 = coding2
      }
   },
   actions:{
      getCoding({commit,state}){
         const coding = md5(state)
         commit(CODING,{coding})
      },
      
      getSmfourEncry({commit,state}){
         const coding1 = Encrypt(JSON.stringify(state))
         commit(SMFOURENCRY,{coding1})
      },

      getSmfourDecry({commit,state}){
         const coding2 = Decrypt(state)
         commit(SMFOURDECRY,{coding2})
      }
   }
}
export default test
