(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{468:function(i,t,v){},515:function(i,t,v){"use strict";v(468)},530:function(i,t,v){"use strict";v.r(t);v(230),v(69);var l=v(514),n=v(0),s={name:"scroll",data:function(){return{scroll:null}},props:{updata:Number,init:Boolean,scrollHeight:String},watch:{init:function(){this.scroll.refresh()},updata:function(){var i=this;this.$nextTick((function(){i.scroll.refresh()}))}},methods:{initScroll:function(){var i=this,t=this.$refs.scroll;this.scroll=new l.a(t,{probeType:3,click:!0,pullUpLoad:!0}),this.scroll.on("scroll",(function(t){i.$emit("contentScroll",t)})),this.scroll.on("pullingUp",(function(){alert("拉到底部了"),i.scroll.finishPullUp(),i.$emit("pullingUp")}))}},mounted:function(){var i=this;this.initScroll();var t=null;n.default.prototype.$bus=new n.default,this.$bus.$on("sss",(function(){t&&clearTimeout(t),t=setTimeout((function(){i.scroll.refresh()}),100)}))}},o=(v(515),v(7)),r=Object(o.a)(s,(function(){var i=this.$createElement;return(this._self._c||i)("div",{ref:"scroll",staticClass:"scroll-wrapper"},[this._m(0)])}),[function(){var i=this,t=i.$createElement,v=i._self._c||t;return v("div",{staticClass:"scroll-content"},[v("div",[i._v("元素1")]),i._v(" "),v("div",[i._v("元素2")]),i._v(" "),v("div",[i._v("元素3")]),i._v(" "),v("div",[i._v("元素4")]),i._v(" "),v("div",[i._v("元素5")]),i._v(" "),v("div",[i._v("元素6")]),i._v(" "),v("div",[i._v("元素7")]),i._v(" "),v("div",[i._v("元素8")]),i._v(" "),v("div",[i._v("元素9")]),i._v(" "),v("div",[i._v("元素10")]),i._v(" "),v("div",[i._v("元素11")]),i._v(" "),v("div",[i._v("元素12")]),i._v(" "),v("div",[i._v("元素13")]),i._v(" "),v("div",[i._v("元素14")]),i._v(" "),v("div",[i._v("元素15")]),i._v(" "),v("div",[i._v("元素16")]),i._v(" "),v("div",[i._v("元素17")]),i._v(" "),v("div",[i._v("元素18")]),i._v(" "),v("div",[i._v("元素19")]),i._v(" "),v("div",[i._v("元素20")])])}],!1,null,null,null);t.default=r.exports}}]);