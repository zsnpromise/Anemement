"use strict";function e(e,n,t,o,i,s,r,d,c,a){"boolean"!=typeof r&&(c=d,d=r,r=!1);const l="function"==typeof t?t.options:t;let f;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),s?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=f):n&&(f=r?function(e){n.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),f)if(l.functional){const e=l.render;l.render=function(n,t){return f.call(t),e(n,t)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,f):[f]}return t}const n=e({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("button",{on:{click:e.handleClick}},[e._t("default")],2)])},staticRenderFns:[]},undefined,{name:"AnButton",methods:{handleClick(e){this.$emit("click",e),e.preventDefault()}}},undefined,false,undefined,!1,void 0,void 0,void 0);n.install=e=>{e.component(n.name,n)},module.exports=n;
