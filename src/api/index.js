/*
包含n多个函数请求模块
返回值是 promise对象
* */
import ajax from "./ajax";

const BASE_URL = ''  //后台接口地址
// const BASE_URL = '/api'

//1 获取业务推荐列表
export const reqBusinessList = (mobile) => ajax(BASE_URL + '/work-business/api/cloudStore/queryBussByMobile', {mobile}, 'POST')

//2 客户画像列表
export const reqClientDetail = (mobile) => ajax(BASE_URL + '/work-business/api/ecp/queryPortraitByMobile', {mobile}, 'POST')

//3.获取首页消息统计
export const reqAcquiredTotal = (param) => ajax(BASE_URL + '/work-business/api/message/statistics', {})


//获取用户登录信息
//export const reqUserInfo = () => ajax()
