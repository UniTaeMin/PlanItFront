(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c27a49a"],{"893c":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"profile"},[t._m(0),i("div",{staticClass:"profile__box"},[i("img",{staticClass:"arrow",attrs:{src:e("c731"),alt:"back",width:"25px"},on:{click:t.arrow_back}}),i("img",{staticClass:"profile__image",staticStyle:{"object-fit":"cover"},attrs:{src:"http://taemin.dev/planit/"+t.$store.state.userdata.email+".png"}}),i("div",{staticClass:"profile__hello"},[t._v("안녕하세요, "+t._s(t.$store.state.userdata.username)+"님!")]),i("div",{staticClass:"profile__email"},[t._v(t._s(t.$store.state.userdata.email))]),i("div",{staticClass:"profile__edit",on:{click:function(a){return t.edit()}}},[t._v("Edit Profile")])]),t.postdata&&t.postdata.length?i("div",{staticClass:"profile__box"},[i("div",{staticClass:"profile__myarticle"},[t._v("My Article")]),t._l(t.postdata,(function(a,e){return i("div",{key:e,staticStyle:{width:"80%"}},[i("div",{staticClass:"profile__article__box"},[i("div",{staticClass:"profile__article__left"},[i("div",{staticClass:"profile__article__profile"},[i("div",{staticStyle:{display:"flex","align-items":"center"}},[i("img",{staticClass:"profile__article__image",staticStyle:{"object-fit":"cover"},attrs:{src:"http://taemin.dev/planit/"+a.email+".png",alt:"profile",width:"42px",height:"42px"}}),i("div",{staticClass:"profile__article__name"},[t._v(t._s(t.postdata[e].name))])]),i("div",{staticClass:"profile__article__delete",on:{click:function(e){return t.deletePost(a._id)}}},[t._v("삭제하기")])]),i("div",{staticClass:"profile__article__title"},[t._v(t._s(t.postdata[e].data.title))]),i("div",{staticClass:"profile__article__subtitle"},[t._v(t._s(t.postdata[e].data.text))]),i("div",{staticClass:"profile__article__date"},[t._v(" "+t._s(t.postdata[e].data.startDay)+" ~ "+t._s(t.postdata[e].data.endDay)+" ")]),i("div",{staticClass:"profile__article__text"},[t._v(t._s(t.postdata[e].text))])])])])}))],2):t._e()])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"profile__title"},[e("div",[t._v("Profile")])])}],r={name:"profile",data:function(){return{postdata:[]}},components:{},created:function(){var t=this;this.$store.dispatch("FIND__MY__POST",{token:localStorage.getItem("token")}).then((function(a){1==a.data.result&&(t.postdata=a.data.userdata)})).catch((function(t){}))},methods:{arrow_back:function(){this.$store.state.wrap="right",this.$router.push("/wrap/main")},edit:function(){this.$router.push("/wrap/profile/edit")},deletePost:function(t){var a=this;this.$store.dispatch("POST__DELETE",{token:localStorage.getItem("token"),_id:t}).then((function(t){1==t.data.result&&a.$store.dispatch("FIND__MY__POST",{token:localStorage.getItem("token")}).then((function(t){1==t.data.result&&(a.postdata=t.data.userdata)})).catch((function(t){}))})).catch((function(t){}))}}},c=r,l=(e("a7bc"),e("2877")),o=Object(l["a"])(c,i,s,!1,null,"305ad634",null);a["default"]=o.exports},a05a:function(t,a,e){},a7bc:function(t,a,e){"use strict";var i=e("a05a"),s=e.n(i);s.a},c731:function(t,a,e){t.exports=e.p+"img/arrow_back.6c9efe0c.svg"}}]);
//# sourceMappingURL=chunk-3c27a49a.2725b59f.js.map