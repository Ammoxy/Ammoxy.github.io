(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a17311a"],{"1b61":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB00lEQVRYR+2W4U0CQRCF31QgVOBZgViBTgViBdqBdCBWIB0oFYgN3FACVuCVgBWseWSXbE7Y3ZOQiwn7CwK3882bmTcn6PlIz/FxAvi/CpjZDYBGVZtD+qhYATMbAHgCMAZQtYIuACxUdd4VpgjAzB4AvAAgBJxznwDWPthIRM785xWAuy6qZAHMbAbg0QdghtN2ADMbO+emInLpwVRVCZM9SQCf+atz7ltExqq6TN1oZm8A7gEwOCGCSnsf2wvga/7lZaesrHP21HW9FJFrAM+qOs09kAKY+LrPVZU9gKgce4HMjA1K8LWqDv8MEGVCKTfS13XdiMh5Ljszo1q3viGTyqUUcAyqqtv/mNnIj+EsVV8zo/Qc2WwZOgHk5Ay/h+btE+BwBaIeuCqd6UiBMI7Z6UmVIGSxnYKSErTGd5jzghRA5ZxbeZstViEyoyLwnBMGFbjxOI7JzUdLBvDunbPKZU9FS3ZBqCdtdZLaeNH48b9F+yAL0HJAfuXl9HqaE7cjveFDVbm06JYxcBaiCMBfzBcQWjKXTfsQgPJvTheIYoDo8pA1PZ89Qc//tXpLIToDlIziDiX46nax69mjAkT9MwgbtQ1xdICcYieAkwK9K/ADpE7mIR0CbdsAAAAASUVORK5CYII="},"227e":function(t,e,s){"use strict";var o=s("df8e"),a=s.n(o);a.a},"2d3b":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search"},[o("HomeNav"),o("div",{staticClass:"search-box"},[o("div",{staticClass:"input-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.keyword},on:{input:[function(e){e.target.composing||(t.keyword=e.target.value)},function(e){return t.onInput(t.keyword)}]}}),o("img",{staticClass:"search-delete",attrs:{src:s("ea2f"),alt:""},on:{click:t.searchDel}}),o("div",{staticClass:"search-btn",on:{click:t.search}},[o("img",{attrs:{src:s("1b61"),alt:""}})])])]),o("div",{staticClass:"content-box"},[o("div",{staticClass:"text"},[t._v("热门搜索")]),""===t.keyword?o("div",{staticClass:"item-box"},t._l(t.hotItem,(function(e,s){return o("span",{key:s,on:{click:function(e){return t.hotWord(s)}}},[t._v(t._s(e.first))])})),0):o("div",{staticClass:"item-info-box"},t._l(t.keywordData,(function(e,a){return o("div",{key:a,staticClass:"info-box",attrs:{currentSong:t.currentSong},on:{click:function(s){return t.$emit("translate-song",e)}}},[o("div",{staticClass:"item-info"},[o("div",{staticClass:"item-name"},[t._v(t._s(e.name))]),o("div",{staticClass:"singer"},[o("i",{staticClass:"sq"}),o("span",[t._v(t._s(e.artists[0].name))]),o("span",[t._v("-"+t._s(e.album.name))])])]),t.currentSong&&e.id===t.currentSong.id?o("span",{staticClass:"play"},[o("img",{attrs:{src:s("566c"),alt:""}})]):o("span",{staticClass:"play"},[o("img",{attrs:{src:s("c4bf"),alt:""}})])])})),0)])],1)},a=[],n=(s("ac1f"),s("841c"),s("87c4")),i={name:"Search",components:{HomeNav:n["a"]},props:{currentSong:Object},data:function(){return{hotItem:[],keyword:"",isSearch:!0,keywordData:[],historyList:[this.keyword]}},methods:{getHotItem:function(){var t=this;this.axios({method:"GET",url:"http://music.kele8.cn/search/hot"}).then((function(e){t.hotItem=e.data.result.hots,window.localStorage.setItem("hotItem",JSON.stringify({expire:Date.now()+36e5,result:e.data.result.hots}))})).catch((function(t){console.log("err ==>",t)}))},search:function(){var t=this;this.axios.get("https://music.kele8.cn/search?keywords=%20".concat(this.keyword),{params:{keyword:this.keyword}}).then((function(e){console.log(e),console.log(t.keyword),t.keywordData=e.data.result.songs,window.localStorage.setItem("key"+t.keyword,JSON.stringify({expire:Date.now()+108e5,result:e.data.result.songs}))})).catch((function(t){console.log("err ==>",t)}))},hotWord:function(t){this.index=t,this.keyword=this.hotItem[t].first},onInput:function(t){var e=this;""!==t&&(this.keyword=t,this.axios.get("https://music.kele8.cn/search?keywords=%20".concat(this.keyword),{params:{keyword:this.keyword}}).then((function(t){console.log(t),console.log(e.keyword),e.keywordData=t.data.result.songs,window.localStorage.setItem("key"+e.keyword,JSON.stringify({expire:Date.now()+108e5,result:t.data.result.songs}))})).catch((function(t){console.log("err ==>",t)})))},searchDel:function(){this.keyword=""}},created:function(){var t=this.keyword;if(""!==t){this.onInput();var e=JSON.parse(window.localStorage.getItem("key"+this.keyword));e&&e.expire>Date.now()?this.keyword=e.result:this.search()}var s=JSON.parse(window.localStorage.getItem("sl"+this.songListId));s&&s.expire>Date.now()?this.hotItem=s.result:this.getHotItem()},watch:{his:function(t){this.historyList.push(t),console.log(this.historyList.push(t))}}},r=i,c=(s("227e"),s("2877")),l=Object(c["a"])(r,o,a,!1,null,"0dc9c595",null);e["default"]=l.exports},"87c4":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{attrs:{id:"nav"}},[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("推荐音乐")])],1),s("li",[s("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),s("li",[s("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])},a=[],n={},i=n,r=(s("ae31"),s("2877")),c=Object(r["a"])(i,o,a,!1,null,"166ff3d6",null);e["a"]=c.exports},ae31:function(t,e,s){"use strict";var o=s("b26e"),a=s.n(o);a.a},b26e:function(t,e,s){},df8e:function(t,e,s){},ea2f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVQ4T6VT0VXDQAyTJoAR2gkoG8SZBCYgbJJOAJPEjBAmgBFgAvN8z9fnXo8+WvIV25FiyTbRPKq6AfAEYACwi/IK4A3AXkQ+M4Q5UNU5wC1vjmcRea6JA8GyLCvJu3PIVFtF5N7jQvDHP7fcLmdiaP6oVTP7JjmZ2UzyxvO9XHy/dYJW96OIvKrqzszcOJAcRGRV1QcAL6mVPTvavwBIAMoU0rsCuM1eeAfWMe5AEh45UQsusC5BaC5tVwKXUz052oNWQga7D1lCS2Jm72dNjLaD4xcT2zECcP0TAJ9ONayXc+Lt/xepGnLJKrv2cRyLP9ccU1nhk2OqifDEV3mox1XcJn0r/RKPzvkHK2Kr880cw7EAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-4a17311a.32c0795e.js.map