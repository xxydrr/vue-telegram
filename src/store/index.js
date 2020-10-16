import Vue from 'vue'
import Vuex from 'vuex'
import chat from './modules/chat'
import settings from './modules/settings'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    chat,
    settings
  }
})
// 监听聊天列表的值， 发生变化就保存在localStorage中
store.watch(
  (state) => state.chat.chatList,
  (val) => {
    localStorage.setItem('tg-chat', JSON.stringify(val))
  }
  , {
    deep: true
  }
)
// 监听selectId的值， 发生变化就保存在localStorage中
store.watch(
  (state) => state.chat.selectId,
  (val) => {
    localStorage.setItem('tg-selectId', JSON.stringify(val))
  }
)
export default store
