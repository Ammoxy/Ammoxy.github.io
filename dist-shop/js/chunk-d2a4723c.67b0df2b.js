(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2a4723c"],{"0418":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLeft,expression:"isLeft"}],staticClass:"header-button is-left"},[s("i",{staticClass:"fa fa-chevron-left"}),s("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])]),s("h1",{staticClass:"header-title"},[t._v(t._s(t.title))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.btn_icon,expression:"btn_icon"}],staticClass:"header-button is-right"},[s("button",{on:{click:function(e){return t.$emit("rightClick")}}},[s("i",{class:"fa fa-"+t.btn_icon})])])])},r=[],n={name:"Hader",props:{title:String,isLeft:{type:Boolean,default:!1},btn_icon:String}},i=n,o=(s("2658"),s("e90a")),c=Object(o["a"])(i,a,r,!1,null,"27459a2c",null);e["a"]=c.exports},"0fa9":function(t,e,s){},"163d":function(t,e,s){"use strict";var a=s("e7ad"),r=s("e042"),n=s("75c4"),i=s("1e5b"),o=s("94b3"),c=s("238a"),l=s("2ea2").f,u=s("dcb7").f,f=s("064e").f,d=s("777a").trim,p="Number",v=a[p],_=v,h=v.prototype,m=n(s("e005")(h))==p,b="trim"in String.prototype,I=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var s,a,r,n=e.charCodeAt(0);if(43===n||45===n){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var i,c=e.slice(2),l=0,u=c.length;l<u;l++)if(i=c.charCodeAt(l),i<48||i>r)return NaN;return parseInt(c,a)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof v&&(m?c((function(){h.valueOf.call(s)})):n(s)!=p)?i(new _(I(e)),s,v):I(e)};for(var g,C=s("149f")?l(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;C.length>y;y++)r(_,g=C[y])&&!r(v,g)&&f(v,g,u(_,g));v.prototype=h,h.constructor=v,s("bf16")(a,p,v)}},"1e5b":function(t,e,s){var a=s("fb68"),r=s("859b").set;t.exports=function(t,e,s){var n,i=e.constructor;return i!==s&&"function"==typeof i&&(n=i.prototype)!==s.prototype&&a(n)&&r&&r(t,n),t}},2361:function(t,e,s){"use strict";var a=s("5c1f"),r=s.n(a);r.a},2658:function(t,e,s){"use strict";var a=s("0fa9"),r=s.n(a);r.a},"2ea2":function(t,e,s){var a=s("c2f7"),r=s("ceac").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},"3cec":function(t,e,s){},"4fbc":function(t,e,s){"use strict";var a=s("72b6"),r=s.n(a);r.a},"50e1":function(t,e,s){"use strict";var a=s("a591"),r=s.n(a);r.a},"5c1f":function(t,e,s){},6077:function(t,e,s){"use strict";var a=s("3cec"),r=s.n(a);r.a},"650e":function(t,e,s){},"706a":function(t,e,s){"use strict";var a=s("650e"),r=s.n(a);r.a},"72b6":function(t,e,s){},"777a":function(t,e,s){var a=s("e46b"),r=s("f6b4"),n=s("238a"),i=s("9769"),o="["+i+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(t,e,s){var r={},o=n((function(){return!!i[t]()||c[t]()!=c})),l=r[t]=o?e(d):i[t];s&&(r[s]=l),a(a.P+a.F*o,"String",r)},d=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},"859b":function(t,e,s){var a=s("fb68"),r=s("69b3"),n=function(t,e){if(r(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=s("4ce5")(Function.call,s("dcb7").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,s){return n(t,s),e?t.__proto__=s:a(t,s),t}}({},!1):void 0),check:n}},9769:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},a591:function(t,e,s){},bc78:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settlement"},[s("Header",{attrs:{isLeft:!0,title:"确认订单"}}),t.orderInfo?s("div",{staticClass:"view-body"},[s("div",{},[s("section",{staticClass:"cart-address"},[s("p",{staticClass:"title"},[t._v("\n          订单配送至\n          "),t.userInfo&&t.userInfo.tag?s("span",{staticClass:"address-tag"},[t._v(t._s(t.userInfo.tag))]):t._e()]),s("p",{staticClass:"address-detail"},[t.userInfo?s("span",{on:{click:function(e){return t.$router.push("/myAddress")}}},[t._v(t._s(t.userInfo.address)+t._s(t.userInfo.bottom))]):s("span",[t.haveAddress?s("span",{on:{click:function(e){return t.$router.push("/myAddress")}}},[t._v("选择收货地址")]):s("span",{on:{click:t.addAddress}},[t._v("新增收货地址")])]),s("i",{staticClass:"fa fa-angle-right"})]),t.userInfo?s("h2",{staticClass:"address-name"},[s("span",[t._v(t._s(t.userInfo.name))]),t.userInfo.sex?s("span",[t._v("("+t._s(t.userInfo.sex)+")")]):t._e(),s("span",{staticClass:"phone"},[t._v(t._s(t.userInfo.phone))])]):t._e()]),s("Delivery",{attrs:{shopInfo:t.orderInfo.shopInfo}}),s("CartGroup",{attrs:{orderInfo:t.orderInfo,totalPrice:t.totalPrice}}),s("section",{staticClass:"checkout-section"},[s("CartItem",{attrs:{title:"餐具份数",subHead:t.remarkInfo.tableware||"未选择"},on:{click:function(e){t.showTableware=!0}}}),s("CartItem",{attrs:{title:"订单备注",subHead:t.remarkInfo.remark||"口味 偏好"},on:{click:function(e){return t.$router.push("/remark")}}}),s("CartItem",{attrs:{title:"发票信息",subHead:"不需要开发票"}})],1),s("Tableware",{attrs:{isShow:t.showTableware},on:{close:function(e){t.showTableware=!1}}})],1)]):t._e(),s("footer",{staticClass:"action-bar"},[s("span",[t._v("¥"+t._s(t.totalPrice))]),s("button",{on:{click:function(e){return t.handlePay()}}},[t._v("去支付")])])],1)},r=[],n=s("0418"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"checkout-section"},[s("div",{staticClass:"delivery"},[s("div",{staticClass:"deliver-left"},[s("span",{staticClass:"delivery-time"},[t._v("送达时间")]),t.shopInfo.delivery_mode.text?s("div",{staticClass:"delivery-extra"},[s("span",[t._v(t._s(t.shopInfo.delivery_mode.text))])]):t._e()]),s("div",{staticClass:"delivery-right"},[s("span",{staticClass:"delivery-select"},[t._v("尽快送达 ("+t._s(t.deliveryTime(t.shopInfo.order_lead_time))+"送达)")]),s("i",{staticClass:"fa fa-angle-right"})])]),t._m(0)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-item"},[s("div",{staticClass:"cart-item-title"},[t._v("支付方式")]),s("div",{staticClass:"pay-text"},[t._v("在线支付")])])}],c={name:"Delivery",props:{shopInfo:Object},methods:{deliveryTime:function(t){var e=new Date;return e.setMinutes(e.getMinutes()+t),e.getHours()+":"+e.getMinutes()}}},l=c,u=(s("2361"),s("e90a")),f=Object(u["a"])(l,i,o,!1,null,"1e2c4d63",null),d=f.exports,p=s("df23"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-item",on:{click:function(e){return t.$emit("click")}}},[s("div",{staticClass:"cart-item-title"},[t._v(t._s(t.title))]),t.subHead?s("div",{staticClass:"cart-item-right"},[s("span",[t._v(t._s(t.subHead))]),s("i",{staticClass:"fa fa-angle-right"})]):t._e()])},_=[],h={name:"CartItem",props:{title:String,subHead:String}},m=h,b=(s("50e1"),Object(u["a"])(m,v,_,!1,null,"049e12e8",null)),I=b.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",[t.isShow?s("div",{staticClass:"tableware"},[s("div",{staticClass:"actions-sheet"},[s("i",{staticClass:"fa fa-remove",on:{click:function(e){return t.$emit("close")}}}),s("h2",{staticClass:"actions-sheet-header"},[s("span",{staticClass:"tag"}),s("span",{staticClass:"title"},[t._v("餐具份数")]),s("span",{staticClass:"tag"})]),s("ul",t._l(t.tablewareList,(function(e,a){return s("li",{key:a,class:{selected:t.selectItem==e},on:{click:function(s){return t.clickItem(e)}}},[t._v(t._s(e))])})),0)])]):t._e()])},C=[],y={name:"Tableware",data:function(){return{tablewareList:["1","2","3","4","5","6"],selectItem:""}},props:{isShow:Boolean},methods:{clickItem:function(t){console.log(t),this.selectItem=t,this.$store.dispatch("setRemarkInfo",{tableware:t+"份餐具",remark:this.$store.getters.remarkInfo.remark}),this.$emit("close")}}},w=y,k=(s("706a"),Object(u["a"])(w,g,C,!1,null,null,null)),x=k.exports,$=s("660a"),E={name:"Settlement",data:function(){return{haveAddress:!1,showTableware:!1}},computed:{userInfo:function(){return this.$store.getters.userInfo},orderInfo:function(){return this.$store.getters.orderInfo},totalPrice:function(){return this.$store.getters.totalPrice},remarkInfo:function(){return this.$store.getters.remarkInfo}},beforeRouteEnter:function(t,e,s){s((function(t){t.userInfo||t.getData()}))},methods:{addAddress:function(){this.$router.push({name:"addAddress",params:{title:"添加地址",addressInfo:{name:"",sex:"",phone:"",address:"",bottom:"",tag:""}}})},getData:function(){var t=this;this.$axios("/api/user/user_info/".concat(localStorage.ele_login)).then((function(e){e.data.myAddress.length>0?t.haveAddress=!0:t.haveAddress=!1}))},handlePay:function(){this.userInfo?this.$router.push("/pay"):Object($["Toast"])({message:"请选择收货地址",position:"bottom",duration:2e3})}},components:{Header:n["a"],Delivery:d,CartGroup:p["a"],CartItem:I,Tableware:x}},N=E,A=(s("4fbc"),Object(u["a"])(N,a,r,!1,null,"555b83f8",null));e["default"]=A.exports},dcb7:function(t,e,s){var a=s("4f18"),r=s("cc33"),n=s("09b9"),i=s("94b3"),o=s("e042"),c=s("db6b"),l=Object.getOwnPropertyDescriptor;e.f=s("149f")?l:function(t,e){if(t=n(t),e=i(e,!0),c)try{return l(t,e)}catch(s){}if(o(t,e))return r(!a.f.call(t,e),t[e])}},df23:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"checkout-section cart-group"},[s("h3",[t._v(t._s(t.orderInfo.shopInfo.name))]),s("ul",[t._l(t.orderInfo.selectFoods,(function(e,a){return s("li",{key:a},[s("img",{attrs:{src:e.image_path,alt:""}}),s("div",{staticClass:"cart-group-info"},[s("span",[t._v(t._s(e.name))]),s("span",[t._v("x "+t._s(e.count))]),s("span",[t._v(t._s(e.activity.fixed_price))])])])})),s("li",{staticClass:"cart-group-total"},[s("div",[t._v("配送费")]),s("div",[t._v("¥"+t._s(t.orderInfo.shopInfo.float_delivery_fee))])]),s("li",{staticClass:"cart-group-total"},[s("div",{staticClass:"discounts"}),s("div",{staticClass:"subtotal"},[s("span",[t._v("小计 ¥")]),s("span",{staticClass:"price"},[t._v(t._s(t.totalPrice))])])])],2)])},r=[],n=(s("163d"),{name:"CartGroup",props:{orderInfo:Object,totalPrice:Number}}),i=n,o=(s("6077"),s("e90a")),c=Object(o["a"])(i,a,r,!1,null,"cb82749c",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-d2a4723c.67b0df2b.js.map