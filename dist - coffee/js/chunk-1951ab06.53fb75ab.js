(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1951ab06"],{"0e99":function(t,e,r){"use strict";var a=r("8f0e"),n=r.n(a);n.a},"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),s=r("17c2"),i=r("9112");for(var o in n){var c=a[o],u=c&&c.prototype;if(u&&u.forEach!==s)try{i(u,"forEach",s)}catch(d){u.forEach=s}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),s=r("ae40"),i=n("forEach"),o=s("forEach");t.exports=i&&o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var a=r("23e7"),n=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4d63":function(t,e,r){var a=r("83ab"),n=r("da84"),s=r("94ca"),i=r("7156"),o=r("9bf2").f,c=r("241c").f,u=r("44e7"),d=r("ad6d"),f=r("9f7f"),l=r("6eeb"),h=r("d039"),v=r("69f3").set,p=r("2626"),g=r("b622"),b=g("match"),y=n.RegExp,m=y.prototype,w=/a/g,k=/a/g,E=new y(w)!==w,S=f.UNSUPPORTED_Y,D=a&&s("RegExp",!E||S||h((function(){return k[b]=!1,y(w)!=w||y(k)==k||"/a/i"!=y(w,"i")})));if(D){var O=function(t,e){var r,a=this instanceof O,n=u(t),s=void 0===e;if(!a&&n&&t.constructor===O&&s)return t;E?n&&!s&&(t=t.source):t instanceof O&&(s&&(e=d.call(t)),t=t.source),S&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var o=i(E?new y(t,e):y(t,e),a?this:m,O);return S&&r&&v(o,{sticky:r}),o},x=function(t){t in O||o(O,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},$=c(y),_=0;while($.length>_)x($[_++]);m.constructor=O,O.prototype=m,l(n,"RegExp",O)}p("RegExp")},"4de4":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").filter,s=r("1dde"),i=r("ae40"),o=s("filter"),c=i("filter");a({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,r){"use strict";var a=r("d784"),n=r("825a"),s=r("7b0b"),i=r("50c4"),o=r("a691"),c=r("1d80"),u=r("8aa5"),d=r("14c3"),f=Math.max,l=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,r,a){var b=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=a.REPLACE_KEEPS_$0,m=b?"$":"$0";return[function(r,a){var n=c(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,n,a):e.call(String(n),r,a)},function(t,a){if(!b&&y||"string"===typeof a&&-1===a.indexOf(m)){var s=r(e,t,this,a);if(s.done)return s.value}var c=n(t),h=String(this),v="function"===typeof a;v||(a=String(a));var p=c.global;if(p){var k=c.unicode;c.lastIndex=0}var E=[];while(1){var S=d(c,h);if(null===S)break;if(E.push(S),!p)break;var D=String(S[0]);""===D&&(c.lastIndex=u(h,i(c.lastIndex),k))}for(var O="",x=0,$=0;$<E.length;$++){S=E[$];for(var _=String(S[0]),C=f(l(o(S.index),h.length),0),j=[],A=1;A<S.length;A++)j.push(g(S[A]));var P=S.groups;if(v){var R=[_].concat(j,C,h);void 0!==P&&R.push(P);var M=String(a.apply(void 0,R))}else M=w(_,h,C,j,P,a);C>=x&&(O+=h.slice(x,C)+M,x=C+_.length)}return O+h.slice(x)}];function w(t,r,a,n,i,o){var c=a+t.length,u=n.length,d=p;return void 0!==i&&(i=s(i),d=v),e.call(o,d,(function(e,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,a);case"'":return r.slice(c);case"<":o=i[s.slice(1,-1)];break;default:var d=+s;if(0===d)return e;if(d>u){var f=h(d/10);return 0===f?e:f<=u?void 0===n[f-1]?s.charAt(1):n[f-1]+s.charAt(1):e}o=n[d-1]}return void 0===o?"":o}))}}))},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("ade3");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},7156:function(t,e,r){var a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var s,i;return n&&"function"==typeof(s=e.constructor)&&s!==r&&a(i=s.prototype)&&i!==r.prototype&&n(t,i),t}},"76a1":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pay"},[r("van-nav-bar",{attrs:{title:"提交订单","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),r("div",{staticClass:"pay-content"},[r("div",{staticClass:"receive",on:{click:t.showActionSheet}},[t._v(t._s(t.addressData.address))]),r("div",{staticClass:"order-content"},[r("div",{staticClass:"order-item"},[t._l(t.orderData,(function(e,a){return r("div",{key:a,staticClass:"item clearfix"},[r("div",{staticClass:"pro-img fl"},[r("img",{staticClass:"auto-img",attrs:{src:e.small_img,alt:""}})]),r("div",{staticClass:"pro-desc fl"},[r("div",{staticClass:"pro-name"},[r("div",{staticClass:"ch-name"},[t._v(t._s(e.name))]),r("div",{staticClass:"en-name"},[t._v(t._s(e.enname))])]),r("div",{staticClass:"pro-rule"},[t._v(t._s(e.rule))])]),r("div",{staticClass:"pro-info fr"},[r("div",{staticClass:"pro-price"},[t._v("￥"+t._s(e.price))]),r("div",{staticClass:"pro-count"},[t._v("x"+t._s(e.count))])])])})),r("div",{staticClass:"item clearfix"},[r("div",{staticClass:"fr clearfix"},[r("span",{staticClass:"fl text"},[t._v("共计 "+t._s(t.orderDesc.count)+" 件商品 合计：")]),r("span",{staticClass:"fl price"},[t._v("￥"+t._s(t.orderDesc.total))])])]),r("div",{staticClass:"item bottom-item"})],2)])]),r("van-action-sheet",{attrs:{title:"选择收货地址"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[r("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认",switchable:!0},on:{select:t.selectAddress,add:t.newAddress},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1),r("van-submit-bar",{attrs:{price:100*t.orderDesc.total,"button-text":"立即结算","button-type":"info"},on:{submit:t.pay}})],1)},n=[],s=(r("99af"),r("4160"),r("b0c0"),r("ac1f"),r("1276"),r("159b"),r("5530")),i=r("fa7d"),o=r("2f62"),c={name:"Pay",data:function(){return{isShow:!1,chosenAddressId:"0"}},created:function(){this.$store.commit("payModule/emptyData");var t=this.$route.query.sids.split("-");this.$store.commit("payModule/changeData",{key:"sids",value:t}),this.findBuyProduct(t),this.getAddress()},computed:Object(s["a"])({},Object(o["b"])("payModule",["orderData","orderDesc","isSelect","list","addressData","sids"])),methods:{findBuyProduct:function(t){var e=this,r=localStorage.getItem("_t");this.$toast.loading({forbidClick:!0,duration:0,message:"加载中..."}),this.axios({type:"GET",url:"/commitShopcart",params:{appkey:this.appkey,tokenString:r,sids:JSON.stringify(t)}}).then((function(t){e.$toast.clear(),e.orderDesc.count=0,e.orderDesc.total=0,t.data.result.forEach((function(t){e.orderDesc.count+=t.count,e.orderDesc.total+=t.count*t.price})),e.$store.commit("payModule/changeData",{key:"orderData",value:t.data.result})})).catch((function(t){e.$toast.clear()}))},back:function(){this.$router.go(-1)},getAddress:function(){var t=this,e=localStorage.getItem("_t");this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:e}}).then((function(e){var r=[];e.data.result.forEach((function(e,a){var n={id:a+"",name:e.name,tel:e.tel,address:e.province+e.city+e.county+e.addressDetail};r.push(n),1==e.isDefault&&(t.$store.commit("payModule/changeData",{key:"isSelect",value:!0}),t.addressData.address=n.address,t.chosenAddressId=a+"")})),t.$store.commit("payModule/changeData",{key:"list",value:r})})).catch((function(t){}))},selectAddress:function(t,e){this.isSelect||this.$store.commit("payModule/changeData",{key:"isSelect",value:!0}),this.addressData.phone=t.tel,this.addressData.receiver=t.name,this.addressData.address=t.address,this.isShow=!1},newAddress:function(){this.$router.push({name:"NewAddress",query:{isAdd:1}})},showActionSheet:function(){this.isShow=!0},pay:function(){var t=this;if(this.isSelect){var e=localStorage.getItem("_t"),r=this.sids.concat();this.$toast.loading({forbidClick:!0,duration:0,message:"加载中..."}),this.axios({method:"POST",url:"/pay",data:{appkey:this.appkey,tokenString:e,sids:JSON.stringify(r),phone:this.addressData.phone,receiver:this.addressData.receiver,address:this.addressData.address},transformRequest:i["a"].transformRequest}).then((function(e){t.$toast.clear(),t.$router.push({name:"Order"})})).catch((function(e){t.$toast.clear()}))}else this.$toast(this.address)}}},u=c,d=(r("0e99"),r("2877")),f=Object(d["a"])(u,a,n,!1,null,"235e22da",null);e["default"]=f.exports},"8f0e":function(t,e,r){},"99af":function(t,e,r){"use strict";var a=r("23e7"),n=r("d039"),s=r("e8b5"),i=r("861d"),o=r("7b0b"),c=r("50c4"),u=r("8418"),d=r("65f0"),f=r("1dde"),l=r("b622"),h=r("2d00"),v=l("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",b=h>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=f("concat"),m=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},w=!b||!y;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,a,n,s,i=o(this),f=d(i,0),l=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?i:arguments[e],m(s)){if(n=c(s.length),l+n>p)throw TypeError(g);for(r=0;r<n;r++,l++)r in s&&u(f,l,s[r])}else{if(l>=p)throw TypeError(g);u(f,l++,s)}return f.length=l,f}})},a15b:function(t,e,r){"use strict";var a=r("23e7"),n=r("44ad"),s=r("fc6a"),i=r("a640"),o=[].join,c=n!=Object,u=i("join",",");a({target:"Array",proto:!0,forced:c||!u},{join:function(t){return o.call(s(this),void 0===t?",":t)}})},ade3:function(t,e,r){"use strict";function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return a}))},b64b:function(t,e,r){var a=r("23e7"),n=r("7b0b"),s=r("df75"),i=r("d039"),o=i((function(){s(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return s(n(t))}})},bee2:function(t,e,r){"use strict";function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}r.d(e,"a",(function(){return n}))},d4ec:function(t,e,r){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return a}))},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),i=r("fc6a"),o=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=o.f,u=s(a),d={},f=0;while(u.length>f)r=n(a,e=u[f++]),void 0!==r&&c(d,e,r);return d}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),i=r("06cf").f,o=r("83ab"),c=n((function(){i(1)})),u=!o||c;a({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},fa7d:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("4160"),r("a15b"),r("fb6a"),r("d3b7"),r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("159b");var a=r("d4ec"),n=r("bee2"),s=function(){function t(){Object(a["a"])(this,t)}return Object(n["a"])(t,[{key:"transformRequest",value:function(t){var e="";for(var r in t)e+=r+"="+t[r]+"&";return e}},{key:"getCookies",value:function(t,e){var r={};return t.forEach((function(t){r[t]=e.$cookies.get(t)})),r}},{key:"getToken",value:function(t){var e=["t0","t1","t2"],r=[];return e.forEach((function(e){r.push(t.$cookies.get(e))})),r.join(".")}},{key:"formatDate",value:function(t,e){var r=t.getFullYear().toString();if(/(y+)/.test(e)){var a=RegExp.$1;e=e.replace(a,r.slice(r.length-a.length))}var n={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var s in n){var i=new RegExp("(".concat(s,"{1,2})"));if(i.test(e)){var o=RegExp.$1,c=n[s]>=10||1==o.length?n[s]:"0"+n[s];e=e.replace(o,c)}}return e}}]),t}(),i=new s}}]);
//# sourceMappingURL=chunk-1951ab06.53fb75ab.js.map