(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8af19d4a"],{"0906":function(t,e,s){"use strict";var a=s("bb7e"),i=s.n(a);i.a},"498a":function(t,e,s){"use strict";var a=s("23e7"),i=s("58a8").trim,c=s("c8d2");a({target:"String",proto:!0,forced:c("trim")},{trim:function(){return i(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),i=s("5899"),c="["+i+"]",n=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),r=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(n,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:r(1),end:r(2),trim:r(3)}},"5f66":function(t,e,s){},"968f":function(t,e,s){},a6ec:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-panel clearfix"},[s("common-top",{attrs:{"header-title":t.selectedChat.user.name,"right-url":t.rightUrl,"badge-flag":t.badgeFlag},scopedSlots:t._u([{key:"iconleft",fn:function(){return[s("mt-button",{attrs:{icon:"back"},nativeOn:{click:function(e){return e.preventDefault(),t.stopBS(e)}}},[t._v("返回")])]},proxy:!0},{key:"icon",fn:function(){return[s("mt-button",[s("img",{staticClass:"avatar",attrs:{src:t.selectedChat.user.img,width:"30",height:"30"}})])]},proxy:!0}])}),s("message-list",{ref:"meslist",staticClass:"border-top-1px"}),s("send-foot")],1)},i=[],c=s("5530"),n=s("057d"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["channel"!==t.selectedChat.type?s("div",{staticClass:"foot border-top-1px clearfix"},[s("div",{staticClass:"local-link icon-attachment"}),s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.Message,expression:"Message"}],attrs:{type:"text",placeholder:"输入消息..."},domProps:{value:t.Message},on:{keyup:t.onKeyup,input:function(e){e.target.composing||(t.Message=e.target.value)}}}),t._m(0)]),s("div",{directives:[{name:"longpress",rawName:"v-longpress",value:t.sendMessage,expression:"sendMessage"}],staticClass:"voice",class:{"icon-keyboard_voice":t.voiceFlag,"icon-arrow-up-alt1":t.upFlag,"mui-icon mui-icon-camera":t.vedioFlag},on:{click:t.changeType}})]):t._e(),"channel"===t.selectedChat.type?s("div",{staticClass:"foot border-top-1px clearfix foot-person",on:{click:function(e){return t.updateNoticeStatus(!t.selectedChat.notifications)}}},[s("p",[t._v(t._s(t.channelMes))])]):t._e()])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"more"},[s("i",{staticClass:"mui-icon mui-icon-paperplane"})])}],l=(s("498a"),s("76a0")),u=s("2f62"),h=!0,g=!1,d={name:"sendfoot",data:function(){return{Message:"",voiceFlag:!0,upFlag:!1,vedioFlag:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["selectedChat","selectedChatNotice"])),{},{channelMes:function(){return this.selectedChat.notifications?"关闭通知":"开启通知"}}),watch:{Message:function(t,e){""!==this.Message?(this.voiceFlag=!1,this.vedioFlag=!1,this.upFlag=!0):(this.upFlag=!1,this.voiceFlag=h,this.vedioFlag=g)}},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["updateNoticeStatus"])),{},{sendMessage:function(){!1===this.upFlag&&!0===this.voiceFlag&&!1===this.vedioFlag?Object(l["Toast"])({message:"正在录音",duration:2e3}):Object(l["Toast"])({message:"正在拍视频",duration:2e3})},changeType:function(){if(!1===this.voiceFlag&&!0===this.vedioFlag)this.vedioFlag=!1,this.voiceFlag=!0,h=this.voiceFlag,g=this.vedioFlag,Object(l["Toast"])({message:"语音模式",duration:1e3}),this.Message="";else if(!0===this.voiceFlag&&!1===this.vedioFlag)this.voiceFlag=!1,this.vedioFlag=!0,h=this.voiceFlag,g=this.vedioFlag,Object(l["Toast"])({message:"视频模式",duration:1e3});else{var t={content:this.Message};this.$store.dispatch("sendMessage",t),console.log("发文字消息了"),this.Message=""}},onKeyup:function(t){if(13===t.keyCode&&""!==this.Message.trim()){var e={content:this.Message};this.$store.dispatch("sendMessage",e),this.Message=""}}})},f=d,m=(s("b6fb"),s("2877")),p=Object(m["a"])(f,o,r,!1,null,"4b6dd286",null),v=p.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"messageList",staticClass:"message-list clearfix"},[t.selectedChat&&"person"===t.selectedChat.type?s("ul",{ref:"ul",staticClass:"message-content clearfix"},t._l(t.selectedChat.messages,(function(e,a){return s("li",{key:a,staticClass:"chat-detail",class:[1==e.self?"chat-detail-right":"chat-detail-left"]},[s("div",{staticClass:"chat-user"},[s("img",{attrs:{src:e.self?t.getUserInfo.img:t.selectedChat.user.img}})]),s("p",{staticClass:"chat-text clearfix"},[t._v(t._s(e.content)+" "),s("span",{staticClass:"hide"},[t._v("0:00")]),s("span",{staticClass:"time"},[t._v(t._s(t._f("formatTime")(e.date)))])])])})),0):t._e(),t.selectedChat&&"group"===t.selectedChat.type?s("ul",{ref:"ul",staticClass:"message-content clearfix"},t._l(t.selectedChat.messages,(function(e,a){return s("li",{key:a,staticClass:"chat-detail",class:[1==e.self?"chat-detail-right":"chat-detail-left"]},[s("div",{staticClass:"chat-user"},[s("img",{attrs:{src:e.self?t.getUserInfo.img:e.user.img}})]),s("p",{staticClass:"chat-text clearfix"},[t._v(t._s(e.content)+" "),s("span",{staticClass:"hide"},[t._v("0:00")]),s("span",{staticClass:"time"},[t._v(t._s(t._f("formatTime")(e.date)))])])])})),0):t._e(),t.selectedChat&&"channel"===t.selectedChat.type?s("ul",{ref:"ul",staticClass:"message-content clearfix"},t._l(t.selectedChat.messages,(function(e,a){return s("li",{key:a,staticClass:"chat-detail chat-detail-left"},[s("div",{staticClass:"chat-user"},[s("img",{attrs:{src:t.selectedChat.user.img}})]),s("p",{staticClass:"chat-text clearfix"},[t._v(t._s(e.content)+" "),s("span",{staticClass:"hide"},[t._v("0:00")]),s("span",{staticClass:"time"},[t._v(t._s(t._f("formatTime")(e.date)))])])])})),0):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollFlag,expression:"scrollFlag"}],staticClass:"arrowBottom icon-circle-down",on:{click:t.scrollToBottom}},[s("mt-badge",{directives:[{name:"show",rawName:"v-show",value:t.getCurrentUnreadMesCount>0,expression:"getCurrentUnreadMesCount > 0"}],attrs:{type:"primary",size:"small"}},[t._v(t._s(t.getCurrentUnreadMesCount))])],1)])},_=[],b=(s("4160"),s("159b"),s("c1df")),F=s.n(b),x=s("f40f"),y={name:"mesList",filters:{formatTime:function(t){return F()(t).format("HH:mm")}},data:function(){return{fakeDate:"0:00",listHeight:[],currentHeight:0,scrollY:0,scrollFlag:!1}},computed:Object(c["a"])({},Object(u["c"])(["selectedChat","messages","getCurrentUnreadMesCount","getUserInfo"])),watch:{messages:function(){var t=this;this.$nextTick((function(){t._initScroll(),t._calculateHeight(),t.scrollToBottom()}))}},created:function(){var t=this;this.$nextTick((function(){t._initScroll(),t._calculateHeight()}))},mounted:function(){var t=this;this.$nextTick((function(){t._initRead()}))},methods:{_initScroll:function(){var t=this;this.messageList=new x["a"](this.$refs.messageList,{click:!0,probeType:3,scrollbar:{fade:!0,interactive:!1},mouseWheel:!0}),this.listHeight.forEach((function(e,s){t.currentHeight>e&&(t.$store.dispatch("changeReadStatus",s),t.$store.dispatch("updateUnreadCount"))})),this.messageList.on("scroll",(function(e){try{var s=Math.abs(Math.round(e.y))+t.$refs.messageList.clientHeight;t.$refs.messageList.scrollHeight>s?t.scrollFlag=!0:t.scrollFlag=!1,s>t.currentHeight&&(t.currentHeight=s),t.listHeight.forEach((function(e,s){t.currentHeight>e&&(t.$store.dispatch("changeReadStatus",s),t.$store.dispatch("updateUnreadCount"))}))}catch(a){console.log(a)}}))},_calculateHeight:function(){var t=this.$refs.messageList.getElementsByClassName("chat-detail"),e=0;this.listHeight.push(e);for(var s=0;s<t.length;s++){var a=t[s];e+=a.offsetHeight,this.listHeight.push(e)}this.totalHeight=e},_initRead:function(){var t=this;this.currentHeight=this.$refs.messageList.clientHeight,this.listHeight.forEach((function(e,s){t.currentHeight>e&&(t.$store.dispatch("changeReadStatus",s),t.$store.dispatch("updateUnreadCount"))}))},scrollToBottom:function(){var t=this.$refs.messageList.getElementsByClassName("chat-detail");this.messageList.scrollToElement(t[t.length-1],200),this.scrollFlag=!1},stopBs:function(){this.messageList.stop()}}},M=y,$=(s("def9"),Object(m["a"])(M,C,_,!1,null,"e212eccc",null)),w=$.exports,H={name:"messagePanel",components:{commonTop:n["a"],sendFoot:v,messageList:w},data:function(){return{rightUrl:"/news",badgeFlag:!0}},computed:Object(c["a"])({},Object(u["c"])(["selectedChat"])),created:function(){this.rightUrl="/news/messagePanel/personInfo/"+this.selectedChat.tgid},methods:{stopBS:function(){this.$refs.meslist.stopBs(),this.$router.go(-1)}}},k=H,T=(s("0906"),Object(m["a"])(k,a,i,!1,null,"cdb11a2c",null));e["default"]=T.exports},b6fb:function(t,e,s){"use strict";var a=s("968f"),i=s.n(a);i.a},bb7e:function(t,e,s){},c8d2:function(t,e,s){var a=s("d039"),i=s("5899"),c="​᠎";t.exports=function(t){return a((function(){return!!i[t]()||c[t]()!=c||i[t].name!==t}))}},def9:function(t,e,s){"use strict";var a=s("5f66"),i=s.n(a);i.a}}]);