import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入自定义指令
import longPress from './directive/longpress.js'
// 导入 MUI 的样式
import '../public/mui/css/mui.min.css'
// import '../public/mui/css/style.css'
// 导入mint-ui样式
import 'mint-ui/lib/style.css'
// import '../public/scss/base.scss'
// 引入自定义样式
import './assets/scss/base.scss'
// 字体样式
import './assets/iconFonts/icon.css'
// import '../public/scss/header-search.scss'
import Mint from 'mint-ui'
// 引入animate.css
import animated from 'animate.css'

// 按需引入mint ui部分组件, 我这里偷懒了使用全部引入
// import { Switch, Search, Header, Actionsheet,cell, TabContainer, TabContainerItem } from 'mint-ui';
// Vue.component(Cell.name, Cell);
Vue.config.productionTip = false
// 引入全部组件
Vue.use(animated)

Vue.use(longPress)

Vue.use(Mint)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
