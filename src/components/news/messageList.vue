<template>
  <div
    class="message-list clearfix"
    ref="messageList"
  >
    <ul
      v-if="selectedChat&&selectedChat.type === 'person'"
      ref="ul"
      class="message-content clearfix"
    >
      <li
        class="chat-detail"
        v-for="(item,index) in selectedChat.messages"
        :key="index"
        :class="[item.self == true? 'chat-detail-right':'chat-detail-left']"
      >
        <div class="chat-user"><img :src="item.self ? getUserInfo.img : selectedChat.user.img"></div>
        <p class="chat-text clearfix">{{item.content}}
          <span class="hide">0:00</span><span class="time">{{item.date | formatTime}}</span>
        </p>
      </li>
    </ul>
    <ul
      v-if="selectedChat&&selectedChat.type === 'group'"
      ref="ul"
      class="message-content clearfix"
    >
      <li
        v-for="(item,index) in selectedChat.messages"
        :key="index"
        class="chat-detail"
        :class="[item.self == true? 'chat-detail-right':'chat-detail-left']"
      >
        <div class="chat-user"><img :src="item.self ? getUserInfo.img : item.user.img"></div>
        <p class="chat-text clearfix">{{item.content}}
          <span class="hide">0:00</span><span class="time">{{item.date | formatTime}}</span>
        </p>
      </li>
    </ul>
    <ul
      class="message-content clearfix"
      v-if="selectedChat&&selectedChat.type === 'channel'"
      ref="ul"
    >
      <li
        v-for="(item,index) in selectedChat.messages"
        :key="index"
        class="chat-detail chat-detail-left"
      >
        <div class="chat-user"><img :src="selectedChat.user.img"></div>
        <p class="chat-text clearfix">{{item.content}}
          <span class="hide">0:00</span><span class="time">{{item.date | formatTime}}</span>
        </p>
      </li>
    </ul>
    <div
      v-show="scrollFlag"
      class="arrowBottom icon-circle-down"
      @click="scrollToBottom"
    >
      <mt-badge
        v-show="getCurrentUnreadMesCount > 0"
        type="primary"
        size="small"
      >{{getCurrentUnreadMesCount}}</mt-badge>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import BScroll from 'better-scroll'
import { mapGetters } from 'vuex'
export default {
  name: 'mesList',
  filters: {
    formatTime(time) {
      return moment(time).format('HH:mm')
    }
  },
  data() {
    return {
      fakeDate: '0:00',
      listHeight: [],
      currentHeight: 0,
      scrollY: 0,
      scrollFlag: false
    }
  },
  computed: {
    ...mapGetters([
      'selectedChat',
      'messages',
      'getCurrentUnreadMesCount',
      'getUserInfo'
    ])
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        // 重新计算子元素的高度决定是否可以滚动
        this._initScroll()
        this._calculateHeight()
        // 发送信息后,让信息滚动到最下面
        this.scrollToBottom()
      })
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll()
      this._calculateHeight()
    })
  },
  mounted() {
    this.$nextTick(() => {
      this._initRead()
    })
  },
  methods: {
    _initScroll() {
      this.messageList = new BScroll(this.$refs.messageList, {
        click: true,
        probeType: 3,
        scrollbar: {
          fade: true,
          interactive: false
        },
        mouseWheel: true
      })
      this.listHeight.forEach((item, index) => {
        if (this.currentHeight > item) {
          // indexList.push(index)
          this.$store.dispatch('changeReadStatus', index)
          this.$store.dispatch('updateUnreadCount')
        }
      })
      // 监听滚动结束的时候的高度从而决定scrollFlag的显示， Y相当于this.$refs.messageList.scrollTop+ this.$refs.messageList.clientHeight
      // 由于使用了better scroll， overflow是hidden。this.$refs.messageList.scrollTop失效为0，所以使用better scroll的scrollEnd事件获得滚动出去的高度
      this.messageList.on('scroll', (pos) => {
        try {
          // const clientHeight = this.$refs.messageList.clientHeight
          const Y =
            Math.abs(Math.round(pos.y)) + this.$refs.messageList.clientHeight
          // const indexList = []
          if (this.$refs.messageList.scrollHeight > Y) {
            this.scrollFlag = true
          } else {
            this.scrollFlag = false
          }
          if (Y > this.currentHeight) {
            this.currentHeight = Y
          }
          this.listHeight.forEach((item, index) => {
            if (this.currentHeight > item) {
              // indexList.push(index)
              this.$store.dispatch('changeReadStatus', index)
              this.$store.dispatch('updateUnreadCount')
            }
          })
        } catch (error) {
          console.log(error)
        }
      })
    },
    // 计算每条回复的文本高度并且存到数组中同时滚动到对应的消息位置
    _calculateHeight() {
      const messageLists = this.$refs.messageList.getElementsByClassName(
        'chat-detail'
      )
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < messageLists.length; i++) {
        const item = messageLists[i]
        height += item.offsetHeight
        this.listHeight.push(height)
      }
      this.totalHeight = height
    },
    // 进入界面时候记视口内容为已读
    _initRead() {
      this.currentHeight = this.$refs.messageList.clientHeight
      this.listHeight.forEach((item, index) => {
        if (this.currentHeight > item) {
          // indexList.push(index)
          this.$store.dispatch('changeReadStatus', index)
          this.$store.dispatch('updateUnreadCount')
        }
      })
    },
    // 滚动到最底部的元素
    scrollToBottom() {
      const messageLists = this.$refs.messageList.getElementsByClassName(
        'chat-detail'
      )
      this.messageList.scrollToElement(
        messageLists[messageLists.length - 1],
        200
      )
      this.scrollFlag = false
    },
    stopBs() {
      this.messageList.stop()
    }
  }
}
</script>

<style lang="scss" scoped>
.message-list {
  overflow: hidden;
  position: absolute;
  top: 40px;
  bottom: 50px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  .message-content {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    .chat-detail {
      position: relative;
      .chat-user {
        display: inline-block;
        position: absolute;
        bottom: 0;
        padding: 0 5px;
        img {
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
      }
      .chat-text {
        display: inline-block;
        max-width: 250px;
        position: relative;
        bottom: 0;
        margin-top: 10px;
        margin-bottom: 6px;
        color: #000;
        background: #f1f1f4;
        font-size: 16px;
        line-height: 25px;
        text-align: left;
        word-break: break-all;
        .hide {
          visibility: hidden;
        }
        .time {
          position: absolute;
          display: inline-block;
          font-size: 10px;
          color: #aaaaab;
          bottom: 2px;
        }
        &.chat-text::after {
          content: '';
          display: block;
          position: absolute;
          border-style: solid;
          border-color: #f1f1f4 transparent;
          width: 0;
        }
      }
      &.chat-detail-left {
        .chat-user {
          left: 0;
        }
        .chat-text {
          border-radius: 10px 20px 20px 10px;
          left: 48px;
          padding: 5px 10px;
          // padding-right: 55px;
          .time {
            right: 10px;
          }
          &.chat-text::after {
            bottom: -7px;
            left: -4px;
            border-width: 12px 12px 0 0;
            transform: skewX(-30deg);
            transform: rotate(0.09turn);
          }
        }
      }
    }
    .chat-detail-right {
      text-align: right;
      .chat-user {
        right: 0;
      }
      .chat-text {
        border-radius: 20px 10px 10px 20px;
        right: 48px;
        padding: 5px 10px;
        // padding-left: 55px;
        .time {
          right: 10px;
        }
        &.chat-text::after {
          bottom: -2px;
          right: -8px;
          border-width: 0 0 12px 12px;
          transform: skewX(30deg);
          transform: rotate(0.3turn);
        }
      }
    }
  }
  .arrowBottom {
    position: fixed;
    // margin-top: 500px;
    right: 10px;
    bottom: 60px;
    width: 30px;
    height: 30px;
    font-size: 30px;
    border-radius: 50%;
    background-color: #f7f7f7;
    color: #9b9b9f;
    .mint-badge {
      display: block;
      position: absolute;
      right: 2px;
      bottom: 20px;
      background-color: #4f8bf6;
    }
  }
}
</style>
