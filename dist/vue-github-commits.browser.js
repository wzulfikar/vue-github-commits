!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueGithubCommits=factory():root.VueGithubCommits=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=7)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(3),__webpack_require__(4);var Component=__webpack_require__(5)(__webpack_require__(2),__webpack_require__(6),null,null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={name:"github-commits",props:{repo:{type:String,required:!0},limit:{type:Number,required:!1,default:3},branch:{type:String,required:!1,default:"master"}},data:function(){return{commits:null}},created:function(){this.fetchData()},filters:{truncate:function(v){var newline=v.indexOf("\n");return newline>0?v.slice(0,newline):v},formatDate:function(v){var DATE=v.replace(/T|Z/g," ");return"function"==typeof timeago?timeago().format(DATE):DATE}},methods:{apiURL:function(){return"https://api.github.com/repos/"+this.repo+"/commits?per_page="+this.limit+"&sha="+this.branch},fetchData:function(){var xhr=new XMLHttpRequest,self=this;xhr.open("GET",this.apiURL()),xhr.onload=function(){self.commits=JSON.parse(xhr.responseText),console.log(self.commits[0].html_url)},xhr.send()}}}},function(module,exports){},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{attrs:{id:"vue-github-commits"}},[_vm._l(_vm.commits,function(item){return[_c("div",{staticClass:"box commit"},[_c("article",{staticClass:"media"},[_c("div",{staticClass:"media-left"},[_c("figure",{staticClass:"image is-48x48"},[item.author?[_c("a",{attrs:{href:item.author.html_url}},[_c("img",{staticClass:"rounded",staticStyle:{"max-height":"100%"},attrs:{src:item.author.avatar_url,alt:"Image"}})])]:_vm._e()],2)]),_vm._v(" "),_c("div",{staticClass:"media-content"},[_c("div",{staticClass:"content commit-message"},[_c("p",[_c("strong",[_c("a",{attrs:{href:item.html_url}},[_vm._v(_vm._s(_vm._f("truncate")(item.commit.message)))])]),_vm._v(" "),_c("br"),_vm._v(" "),_c("span",{staticClass:"committer"},[item.author?_c("small",[_vm._v("\n\t\t\t\t\t\tCommitted by "),_c("a",{attrs:{href:item.author.html_url}},[_vm._v(_vm._s(item.commit.author.name))])]):_c("small",[_vm._v("\n\t\t\t\t\t\tCommitted by "+_vm._s(item.commit.author.name)+"\n\t\t\t\t\t")])]),_vm._v(" "),_c("small",[_vm._v(_vm._s(_vm._f("formatDate")(item.commit.author.date)))])])])])])])]})],2)},staticRenderFns:[]}},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){function install(Vue){Vue.component("github-commits",__WEBPACK_IMPORTED_MODULE_0__GithubCommits_vue___default.a)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__GithubCommits_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__GithubCommits_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__GithubCommits_vue__);__webpack_require__.d(__webpack_exports__,"GithubCommits",function(){return __WEBPACK_IMPORTED_MODULE_0__GithubCommits_vue___default.a}),__webpack_exports__.install=install;var plugin={version:"0.0.0",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}).call(__webpack_exports__,__webpack_require__(0))}])});