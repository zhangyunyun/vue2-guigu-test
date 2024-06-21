import Vue from 'vue'

const getters = {
  ttt(state){
   console.log(state.counter.count)
   return state.counter.count%2 === 0?'偶数':'奇数'
  }
//   ttt:state => state.counter.count %2===0?'偶数':'奇数'
}

export default getters