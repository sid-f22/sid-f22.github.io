webpackJsonp([0],{"1oti":function(t,e){},"56me":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.f84065c.png"},GoGZ:function(t,e,n){t.exports=n.p+"static/img/herbie-phone.fb2ed9b.png"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(t){n("1oti")},null,null).exports,o=n("/ocq"),c=n("vQJi"),r=n.n(c),l={name:"HelloWorld",data:function(){return{showSignUp:!1}},mounted:function(){var t=this;r.a.info("Have fun storming the castle!");var e=document.forms["submit-to-google-sheet"];e.addEventListener("submit",function(n){n.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbyMR4Ij1p4D23yzOH_d8YVq9Za8pxitawui8OnxMaiLWx10Axs/exec",{method:"POST",body:new FormData(e)}).then(function(e){console.log("Success!",e),r.a.success("Have fun storming the castle!","Miracle Max Says"),t.showSignUp=!1}).catch(function(t){return console.error("Error!",t.message)})})},methods:{openSignup:function(){this.showSignUp=!0},closeSignUp:function(){this.showSignUp=!1}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showSignUp,expression:"showSignUp"}],staticClass:"signup-modal"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"close",on:{click:function(e){t.closeSignUp()}}},[t._v("x")]),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"navbar"},[t._m(1),t._v(" "),n("div",{staticClass:"nav-item",on:{click:function(e){t.openSignup()}}},[t._v("\n      Sign up\n    ")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{attrs:{name:"submit-to-google-sheet"}},[e("label",[this._v("Sign up to receive updates about Herbie")]),this._v(" "),e("input",{attrs:{name:"email",type:"email",placeholder:"Email",required:""}}),this._v(" "),e("div",[e("button",{attrs:{type:"submit"}},[this._v("Sign Up")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"app-logo",attrs:{src:n("7Otq")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"logo-container"}),this._v(" "),e("div",{staticClass:"logo-container-tint"}),this._v(" "),e("label",{staticClass:"app-announcement"},[this._v("\n      Easiest way to find Recreational and Medical Cannabis around you.\n    ")]),this._v(" "),e("div",{staticClass:"coming-soon-container"},[e("img",{staticClass:"coming",attrs:{src:n("SMD1")}}),this._v(" "),e("img",{staticClass:"coming",attrs:{src:n("UHO1")}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"herbie-phone"},[e("img",{staticClass:"phone",attrs:{src:n("GoGZ")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[this._v("\n    Made with \n    "),e("span",[e("img",{staticStyle:{"max-width":"35px",height:"auto"},attrs:{src:n("env6")}})]),this._v("\n    at\n    "),e("a",{staticStyle:{"margin-left":"10px","text-decoration":"none",color:"#9871e4"},attrs:{href:"http://f22labs.com/"}},[this._v("F22 Labs")])])}]};var u=n("VU/8")(l,p,!1,function(t){n("56me")},"data-v-26b4f333",null).exports;s.a.use(o.a);var m=new o.a({routes:[{path:"/",name:"HelloWorld",component:u}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:m,components:{App:a},template:"<App/>"})},SMD1:function(t,e,n){t.exports=n.p+"static/img/googleplay.aa1da05.png"},UHO1:function(t,e,n){t.exports=n.p+"static/img/appstore2.6088d6f.png"},env6:function(t,e,n){t.exports=n.p+"static/img/madegif.51e8690.gif"}},["NHnr"]);
//# sourceMappingURL=app.934a3637bb2740bdc831.js.map