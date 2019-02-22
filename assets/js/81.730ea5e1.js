(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{487:function(e,t,s){"use strict";s.r(t);var n=s(1),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._m(1),s("p",[e._v("A component providing waterfall layout over list component.")]),e._m(2),s("p",[e._v("Notes: The waterfall only supports the following child components: cell, header, refresh, loading and fixed-position components. Other kinds of components will not be guaranteed to be displayed correctly.")]),e._m(3),e._m(4),e._m(5),s("p",[e._v("To see other attributes in list,  please checkout "),s("router-link",{attrs:{to:"./list.html"}},[e._v("List Component Attributes")])],1),e._m(6),s("p",[e._v("common styles: check out "),s("router-link",{attrs:{to:"/docs/styles/common-styles.html"}},[e._v("common styles for components")])],1),e._m(7),e._m(8),s("p",[e._v("common events: check out the "),s("router-link",{attrs:{to:"/docs/events/common-events.html"}},[e._v("common events")])],1),s("ul",[s("li",[e._v("support onclick event. Check out "),s("router-link",{attrs:{to:"/docs/events/common-events.html"}},[e._v("common events")])],1),s("li",[e._v("support onappear / ondisappear event. Check out "),s("router-link",{attrs:{to:"/docs/events/common-events.html"}},[e._v("common events")])],1)]),e._m(9),s("p",[e._v("All subcomponents in waterfall support the scrollToElement API in "),s("router-link",{attrs:{to:"./../modules/dom.html"}},[e._v("dom module")])],1),e._m(10),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/7a9195643e9e8da352b0d879cdbe68c0",target:"_blank",rel:"noopener noreferrer"}},[e._v("waterfall example"),s("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"waterfall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#waterfall","aria-hidden":"true"}},[this._v("#")]),this._v(" <waterfall>")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[this._v("#")]),this._v(" Summary")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"child-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#child-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Child Components")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("cell: presents the content for a single data item in waterfall")]),t("li",[this._v("header: components that need to stretch across multiple columns. It can be sticky by using css position.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" Attributes")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("column-width")]),e._v(" : This property describes the width of columns in waterfall elements.\n"),s("ul",[s("li",[s("code",[e._v("auto")]),e._v(": means that the column width will be determined by other properties(e.g., column-count, if it has a non-auto value).")]),s("li",[s("code",[e._v("<length>")]),e._v(": describes the optimal column width. The actual column width may be wider (to fill the available space), or narrower (only if the available space is smaller than the specified column width). Specified values must be greater than 0.")])])]),s("li",[s("strong",[e._v("column-count")]),e._v(":This property describes the number of columns of a multicol element.\n"),s("ul",[s("li",[s("code",[e._v("auto")]),e._v(": means that the number of columns will be determined by other properties (e.g., column-width, if it has a non-auto value).")]),s("li",[s("code",[e._v("<integer>")]),e._v(": describes the optimal number of columns into which the content of the element will be flowed. Values must be greater than 0. If both column-width and column-count have non-auto values, the integer value describes the maximum number of columns.")])])]),s("li",[s("strong",[e._v("column-gap")]),e._v(":sets the gap between columns. if "),s("code",[e._v("normal")]),e._v(" is specified,  the gap will be "),s("code",[e._v("32")]),e._v(".")]),s("li",[s("strong",[e._v("left-gap")]),e._v(":sets the gap between left edge and left cell. if "),s("code",[e._v("none")]),e._v(" is specified,  the gap will be "),s("code",[e._v("0")]),s("span",{staticClass:"api-version"},[e._v("v0.19+")]),e._v(".")]),s("li",[s("strong",[e._v("right-gap")]),e._v(":sets the gap between right edge and right most cell. if "),s("code",[e._v("none")]),e._v(" is specified,  the gap will be "),s("code",[e._v("0")]),s("span",{staticClass:"api-version"},[e._v("v0.19+")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"styles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles","aria-hidden":"true"}},[this._v("#")]),this._v(" Styles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("support flexbox related styles")]),t("li",[this._v("support box model related styles")]),t("li",[this._v("support position related styles")]),t("li",[this._v("support opacity, background-color etc.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])}],!1,null,null,null);t.default=a.exports}}]);