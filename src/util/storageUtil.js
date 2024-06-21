/*
 * 使用localStorage存储数据的工具模块
 *
 * 1.函数  1个功能用函数
 * 2.对象  多个功能用对象
 *
 * 需要向外暴露1个还是多个功能
 * */
export default {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key) || '[]')
  },
  remove() {
    window.localStorage.removeItem('key')
  }
}
