(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{341:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"recycle-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recycle-list","aria-hidden":"true"}},[t._v("#")]),t._v(" <recycle-list> "),e("Badge",{attrs:{text:"v0.18+",type:"warning"}})],1),t._m(0),t._m(1),e("blockquote",[e("ul",[e("li",[t._v("设计思路请参考 "),e("a",{attrs:{href:"https://github.com/Hanks10100/weex-native-directive/blob/master/Design.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Design.md"),e("OutboundLink")],1),t._v("，具体的实现细节请参考 "),e("a",{attrs:{href:"https://github.com/Hanks10100/weex-native-directive/blob/master/Implementation.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Implementation.md"),e("OutboundLink")],1)]),e("li",[t._v("该功能部分依赖于编译工具，请确保 weex-loader 的版本升级到最新（v0.7.2+）")]),e("li",[t._v("使用最新版的 playground app（SDK 版本 0.18.0 及以上）才可以扫码查看原生效果，也可以直接使用dotwe查看Web预览效果")])])]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._v("\n- warning 属性的省略\n  - 如果没写 `switch`，无论有没有写 `case` 或 `default`，都只使用第一个模板\n  - 在写了 `switch` 的情况下，`case` 和 `default` 必须写一个，否则该模板将会被忽略\n"),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),e("p",[t._v("绑定属性或者文本时，仅支持表达式，不支持函数调用，也不支持使用 filter，可以参考 "),e("a",{attrs:{href:"https://github.com/Hanks10100/weex-native-directive/blob/master/Implementation.md#%E6%94%AF%E6%8C%81%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Implementation.md#支持的表达式"),e("OutboundLink")],1),t._v("。")]),e("p",[t._v("例如，下列写法不可用：")]),t._m(16),e("p",[t._v("针对这种场景，推荐使用 "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/computed.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("computed"),e("OutboundLink")],1),t._v(" 属性来实现。"),e("br"),t._v("\n因为模板的取值是由客户端实现的，而函数的定义在前端（filter 可以认为是在模板里调用函数的语法糖），如果每次取值都走一次通信的话，会大幅降低渲染性能。")]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),e("p",[e("em",[t._v("计划支持")]),t._v("。目前版本里还不支持绑定样式类名（"),e("code",[t._v("v-bind:class")]),t._v("），原因和进展可以参考 "),e("a",{attrs:{href:"https://github.com/Hanks10100/weex-native-directive/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("#14"),e("OutboundLink")],1),t._v("。")]),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),e("p",[t._v("如果有如下数据：")]),t._m(28),e("p",[t._v("则会生成如下等价节点：")]),t._m(29),t._m(30),t._m(31),e("p",[t._v("更多示例：")]),t._m(32),e("ul",[e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/33688e1ad843fd2a1b9f1f27a3905b9c",target:"_blank",rel:"noopener noreferrer"}},[t._v("绑定文本"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/99e44cbc137d4e3ab841c88fedd91d7c",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/b4223fd71c93c89ba75a1876b0832772",target:"_blank",rel:"noopener noreferrer"}},[t._v("绑定属性 "),e("code",[t._v("v-bind")]),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/a43685d00842f0558857b7942a74621a",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/7e34f1998a0a04ff11d4c30727b3e1b6",target:"_blank",rel:"noopener noreferrer"}},[t._v("循环 "),e("code",[t._v("v-for")]),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/fbd22af052d8855a0da0d2eacee322e4",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/a633e1932c67f59a4c1a6b84aba7c2d0",target:"_blank",rel:"noopener noreferrer"}},[t._v("多层循环"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/3368f34c62d58b083e9e6de22acafe4d",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/96cc151e9798bfa43aa029767f66a68b",target:"_blank",rel:"noopener noreferrer"}},[t._v("条件渲染 "),e("code",[t._v("v-if")]),t._v("/"),e("code",[t._v("v-else")]),t._v("/"),e("code",[t._v("v-else-if")]),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/92bd285b3419f34fe16a72604e10b4ff",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/f3f72eb4e4e7b39223f174cf9a0d1875",target:"_blank",rel:"noopener noreferrer"}},[t._v("绑定事件 "),e("code",[t._v("v-on")]),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/88039631a296bd6d41271cd36727d914",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/fc6c08e80ebeebe4cde6f16af88eb3e8",target:"_blank",rel:"noopener noreferrer"}},[t._v("一次性渲染 "),e("code",[t._v("v-once")]),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/e2dde8bf1fa3d121eea824087181ee19",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/2bf86e5c2aaff1d1a0eec30abc3713b5",target:"_blank",rel:"noopener noreferrer"}},[t._v("绑定样式"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/db6d50253d88f7670a69cf0225d3c893",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/efeb1d42226b8b919df0a9a314ef0648",target:"_blank",rel:"noopener noreferrer"}},[t._v("loadmore"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/107b622dbf231a56b6da7ad49985bd17",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/dc9ef31c0304e7d1d27f0d0baa677b57",target:"_blank",rel:"noopener noreferrer"}},[t._v("复杂压测例子"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/da8361cd2f614a26e97ceec6316fe0d7",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/1a2f6cd2edcd2edcd3a6d9906b7cfd6a",target:"_blank",rel:"noopener noreferrer"}},[t._v("无限列表"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/6e6dceed2accc3be39c61fac58dc4440",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")])]),t._m(33),e("ul",[e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/68e405753d8c3c2a8168185140ac08bb",target:"_blank",rel:"noopener noreferrer"}},[t._v("纯静态子组件"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/d7ea3addbd445d7ef51151f84af64c01",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/89c177e6336ad7789ef500bc2daf61bb",target:"_blank",rel:"noopener noreferrer"}},[t._v("无状态，有 props"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/451afc28c004b62cec9fa1c46e56c2d5",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/37056065a0a2c104e73dd550f252fabc",target:"_blank",rel:"noopener noreferrer"}},[t._v("props 更新"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/778e93001e573ea0bbe9fc332a6a1e6c",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/baeda092d257d91d8c9c216e91ba350a",target:"_blank",rel:"noopener noreferrer"}},[t._v("有内部状态"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/a6e19f26653c890544c1036a7e9d2722",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/c9ab8a26fb10fb163891ac58b2322671",target:"_blank",rel:"noopener noreferrer"}},[t._v("computed & watch"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/5e13c37f136fde456da311e5ddf17324",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")]),e("li",[e("a",{attrs:{href:"http://dotwe.org/vue/c63e11f62c8f50d6120d56f97253a1b6",target:"_blank",rel:"noopener noreferrer"}},[t._v("移除组件"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"http://dotwe.org/vue/a9d299cbf2870c99b32df047ed0c4265",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通list"),e("OutboundLink")],1),t._v("）")])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("<recycle-list>")]),this._v(" 是一个新的列表容器，具有回收和复用的能力，可以大幅优化内存占用和渲染性能。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"子组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 子组件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("<recycle-list>")]),this._v(" 只能使用 "),a("code",[this._v("<cell-slot>")]),this._v(" 作为其直接子节点，使用其他节点无效。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"cell-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cell-slot","aria-hidden":"true"}},[this._v("#")]),this._v(" <cell-slot>")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("<cell-slot>")]),this._v(" 代表的是列表每一项的模板，它只用来描述模板的结构，并不对应实际的节点。"),a("code",[this._v("<cell-slot>")]),this._v(" 的个数只表示模板的种类数，真实列表项的个数是由数据决定的。")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",{staticStyle:{width:"90%"}},[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("case")]),e("td",[t._v("声明了当前模板的类型，只有和数据中的类型与当前类型匹配时才会渲染，语义和编程语言里的 "),e("code",[t._v("case")]),t._v(" 一致。"),e("br"),t._v("所有模板中最多只会匹配到一项，按照模板的顺序从上到下匹配，一旦匹配成功就不在继续匹配下一个。")])]),e("tr",[e("td",[t._v("default")]),e("td",[t._v("表示当前模板为默认模板类型，不需要指定值。如果数据项没有匹配到任何 "),e("code",[t._v("case")]),t._v(" 类型，则渲染带有 "),e("code",[t._v("default")]),t._v(" 模板。如果存在多个 "),e("code",[t._v("default")]),t._v("，则只会使用第一个默认模板。")])]),e("tr",[e("td",[t._v("key")]),e("td",[t._v("可选属性，用于指定列表数据中可以作为唯一标识的键值，可以优化渲染性能。")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("code",[t._v("for")]),e("br"),t._v("\n在 "),e("code",[t._v("<recycle-list>")]),t._v(" 添加 "),e("code",[t._v("for")]),t._v(" 属性即可描述如何循环展开列表的数据，语法和 Vue 的 "),e("code",[t._v("v-for")]),t._v(" 指令类似，但是它循环的是自己内部的子节点，并不是当前节点。写法：\n"),e("ul",[e("li",[e("code",[t._v("alias in expression")])]),e("li",[e("code",[t._v("(alias, index) in expression")])])])]),e("li",[e("code",[t._v("switch")]),e("br"),t._v("\n在 "),e("code",[t._v("<recycle-list>")]),t._v(" 添加 "),e("code",[t._v("switch")]),t._v(" 属性可以用来指定数据中用于区分子模板类型的字段名，语义和编程语言里的 switch 一致，配合 "),e("code",[t._v("<cell-slot>")]),t._v(" 中的 "),e("code",[t._v("case")]),t._v(" 和 "),e("code",[t._v("default")]),t._v(" 属性一起使用。"),e("br"),t._v("如果省略了 "),e("code",[t._v("switch")]),t._v(" 属性，则只会将第一个 "),e("code",[t._v("<cell-slot>")]),t._v(" 视为模板，多余的模板将会被忽略。")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recycle-list")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item, i) in longList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("switch")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cell-slot")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("case")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- A {{i}} -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cell-slot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cell-slot")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("case")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("B"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- B {{i}} -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cell-slot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("recycle-list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"可复用的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可复用的组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 可复用的组件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("在 "),a("code",[this._v("<recycle-list>")]),this._v(" 中使用的子组件也将被视为模板，在开发组件时给 "),a("code",[this._v("<template>")]),this._v(" 标签添加 recyclable 属性，才可以用在 "),a("code",[this._v("<recycle-list>")]),this._v(" 中。")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-vue extra-class"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("recyclable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("添加了 "),a("code",[this._v("recyclable")]),this._v(" 属性并不会影响组件本身的功能，它仍然可以用在其他正常的组件里。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意事项")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"属性和文本的绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性和文本的绑定","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性和文本的绑定")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":prop")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("capitalize(card.title)"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ card.title | capitalize }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"slot-不可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot-不可用","aria-hidden":"true"}},[this._v("#")]),a("code",[this._v("<slot>")]),this._v("不可用")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("code",[t._v("<cell-slot>")]),t._v(" 的功能和 "),e("code",[t._v("<slot>")]),t._v(" 有部分重叠，而且更为激进，在概念上有冲突，存在很多边界情况无法完全支持。不要在 "),e("code",[t._v("<cell-slot>")]),t._v(" 及其子组件里使用 "),e("code",[t._v("<slot>")]),t._v("。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"v-once-不会优化渲染性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-once-不会优化渲染性能","aria-hidden":"true"}},[this._v("#")]),this._v(" v-once 不会优化渲染性能")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("和前端框架中的理解不同，客户端里要实现复用的逻辑，会标记模板节点的状态，添加了 "),a("code",[this._v("v-once")]),this._v(" 能保证节点只渲染一次，但是并不一定能优化渲染性能，反而可能会拖慢客户端复用节点时的比对效率。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"样式功能的限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式功能的限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 样式功能的限制")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"双向绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定","aria-hidden":"true"}},[this._v("#")]),this._v(" 双向绑定")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("em",[this._v("计划支持")]),this._v("。"),a("code",[this._v("v-model")]),this._v(" 还未调通，暂时不要使用。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"子组件的限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件的限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 子组件的限制")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("p",[t._v("没有 Virtual DOM！\n使用在 "),e("code",[t._v("<recycle-list>")]),t._v(" 中的组件没有 Virtual DOM！与 Virtual DOM 相关的功能也不支持。在开发过程中尽量只处理数据，不要操作生成后的节点。")]),e("p",[t._v("下列这些属性都不再有意义，请不要使用：")]),e("ul",[e("li",[e("code",[t._v("vm.$el")])]),e("li",[e("code",[t._v("vm.$refs.xxx")])]),e("li",[e("code",[t._v("vm.$vnode")])]),e("li",[e("code",[t._v("vm.#slots")])]),e("li",[e("code",[t._v("vm.#scopedSlots")])])]),e("p",[e("code",[t._v("vm.$refs")]),t._v(" 里的值可能是数组、子组件的实例、DOM 元素，在前端里比较常用，如果不支持，对 Weex 里的 "),e("code",[t._v("dom")]),t._v(" 模块和 "),e("code",[t._v("animation")]),t._v(" 模块的功能也有影响。")]),e("p",[t._v("目前正在讨论技术方案，部分接口可能会重新设计，或者是在 "),e("code",[t._v("vm")]),t._v(" 上透出专为 "),e("code",[t._v("<recycle-list>")]),t._v(" 设计的接口。")])]),e("li",[e("p",[t._v("组件的属性\n目前子组件的属性不支持函数。（正在讨论实现方案）")]),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sub-component")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":prop")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item.xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("因为子组件的属性值需要在前端和客户端之间传递，所以仅支持可序列化的值。"),e("code",[t._v("item.xxx")]),t._v(" 的类型可以是对象、数组、字符串、数字、布尔值等，不支持函数。")])]),e("li",[e("p",[t._v("生命周期的行为差异\n由于列表的渲染存在回收机制，节点渲染与否也与用户的滚动行为有关，组件的生命周期行为会有一些不一致。")]),e("p",[t._v("可回收长列表不会立即渲染所有节点，只有即将滚动到可视区域（以及可滚动的安全区域）内时才开始渲染，组件生命周期的语义没变，但是会延迟触发。")]),e("p",[t._v("假设有 100 条数据，一条数据了对应一个组件。渲染首屏时只能展示 8 条数据的节点，那就只有前 8 个组件被创建了，也只有前 8 个组件的生命周期被触发。")]),e("ul",[e("li",[t._v("组件的 "),e("code",[t._v("beforeCreate")]),t._v(" 和 "),e("code",[t._v("created")]),t._v(" 也只有在组件即将创建和创建完成时才会触发")]),e("li",[t._v("同理，组件的 "),e("code",[t._v("beforeMount")]),t._v(" 和 "),e("code",[t._v("mounted")]),t._v(" 也只有页面真正渲染到了该组件，在即将挂载和已经挂载时才会触发")])])]),e("li",[e("p",[t._v("组件的自定义事件"),e("br"),e("em",[t._v("计划支持")]),t._v("。"),e("code",[t._v("vm.$on")]),t._v(", "),e("code",[t._v("vm.$once")]),t._v(", "),e("code",[t._v("vm.$emit")]),t._v(", "),e("code",[t._v("vm.$off")]),t._v(" 等功能还未完全调通，接口可用，但是行为可能有些差异（参数丢失），暂时不要使用。")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recycle-list")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item, i) in longList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("switch")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cell-slot")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("case")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- A {{i}} -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cell-slot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cell-slot")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("case")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("B"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- B {{i}} -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cell-slot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("recycle-list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" longList "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- A 0 -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- B 1 -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- B 2 -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- A 3 -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- B 4 -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("如果将模板合并成一个，也可以省略 "),a("code",[this._v("switch")]),this._v(" 和 "),a("code",[this._v("case")]),this._v("，将例子进一步简化：")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recycle-list")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item, i) in longList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cell-slot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("- {{item.type}} {{i}} -"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cell-slot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("recycle-list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("模板语法")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("使用子组件")])])}],!1,null,null,null);a.default=n.exports}}]);