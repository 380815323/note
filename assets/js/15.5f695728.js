(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(t,s,a){"use strict";a.r(s);var n=a(45),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript基础06"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript基础06"}},[t._v("#")]),t._v(" JavaScript基础06")]),t._v(" "),a("h2",{attrs:{id:"_1-内置对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-内置对象"}},[t._v("#")]),t._v(" 1 - 内置对象")]),t._v(" "),a("h3",{attrs:{id:"_1-1-内置对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-内置对象"}},[t._v("#")]),t._v(" 1.1 内置对象")]),t._v(" "),a("p",[t._v("​\t\t JavaScript 中的对象分为3种："),a("strong",[t._v("自定义对象 、内置对象、 浏览器对象")]),t._v("\n​\t\t前面两种对象是JS 基础 内容，属于 ECMAScript；  第三个浏览器对象属于 JS 独有的， JS API 讲解内置对象就是指 JS 语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是"),a("strong",[t._v("最基本而必要的功能")]),t._v("（属性和方法），内置对象最大的优点就是帮助我们快速开发")]),t._v(" "),a("p",[t._v("​\t \tJavaScript 提供了多个内置对象：Math、 Date 、Array、String等")]),t._v(" "),a("h3",{attrs:{id:"_1-2-查文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-查文档"}},[t._v("#")]),t._v(" 1.2 查文档")]),t._v(" "),a("p",[t._v("​\t\t查找文档：学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询。\n​\t\tMozilla 开发者网络（MDN）提供了有关开放网络技术（Open Web）的信息，包括 HTML、CSS 和万维网及 HTML5 应用的 API。\n​\t\tMDN:https://developer.mozilla.org/zh-CN/")]),t._v(" "),a("h3",{attrs:{id:"_1-3-math对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-math对象"}},[t._v("#")]),t._v(" 1.3 Math对象")]),t._v(" "),a("p",[t._v("​\t\tMath 对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算（求绝对值，取整、最大值等）可以使用 Math 中的成员。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性、方法名")]),t._v(" "),a("th",[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Math.PI")]),t._v(" "),a("td",[t._v("圆周率")])]),t._v(" "),a("tr",[a("td",[t._v("Math.floor()")]),t._v(" "),a("td",[t._v("向下取整")])]),t._v(" "),a("tr",[a("td",[t._v("Math.ceil()")]),t._v(" "),a("td",[t._v("向上取整")])]),t._v(" "),a("tr",[a("td",[t._v("Math.round()")]),t._v(" "),a("td",[t._v("四舍五入版 就近取整   注意 -3.5   结果是  -3")])]),t._v(" "),a("tr",[a("td",[t._v("Math.abs()")]),t._v(" "),a("td",[t._v("绝对值")])]),t._v(" "),a("tr",[a("td",[t._v("Math.max()/Math.min()")]),t._v(" "),a("td",[t._v("求最大和最小值")])]),t._v(" "),a("tr",[a("td",[t._v("Math.random()")]),t._v(" "),a("td",[t._v("获取范围在[0,1)内的随机值")])])])]),t._v(" "),a("p",[t._v("​\t注意：上面的方法使用时必须带括号")]),t._v(" "),a("p",[t._v("​\t"),a("strong",[t._v("获取指定范围内的随机整数")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRandom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_1-4-日期对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-日期对象"}},[t._v("#")]),t._v(" 1.4 日期对象")]),t._v(" "),a("p",[t._v("​\t \tDate 对象和 Math 对象不一样，Date是一个构造函数，所以使用时需要实例化后才能使用其中具体方法和属性。Date 实例用来处理日期和时间")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用Date实例化日期对象")]),t._v(" "),a("ul",[a("li",[t._v("获取当前时间必须实例化：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("获取指定时间的日期对象")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" future "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019/5/1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("注意：如果创建实例时并未传入参数，则得到的日期对象是当前时间对应的日期对象")])]),t._v(" "),a("li",[a("p",[t._v("使用Date实例的方法和属性")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片1.png"),alt:""}})]),t._v(" "),a("li",[a("p",[t._v("通过Date实例获取总毫米数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("总毫秒数的含义")]),t._v(" "),a("p",[t._v("​\t基于1970年1月1日（世界标准时间）起的毫秒数")])]),t._v(" "),a("li",[a("p",[t._v("获取总毫秒数")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化Date对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 用于获取对象的原始值")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 简单写可以这么做")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. HTML5中提供的方法，有兼容性问题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_1-5-数组对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-数组对象"}},[t._v("#")]),t._v(" 1.5 数组对象")]),t._v(" "),a("h4",{attrs:{id:"创建数组的两种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数组的两种方式"}},[t._v("#")]),t._v(" 创建数组的两种方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("字面量方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])])]),t._v(" "),a("li",[a("p",[t._v("new Array()")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("示例代码如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var arr = new Array();\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("​\t注意：上面代码中arr创建出的是一个空数组，如果需要使用构造函数Array创建非空数组，可以在创建数组时传入参数")]),t._v(" "),a("p",[t._v("​\t参数传递规则如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果只传入一个参数，则参数规定了数组的长度")])]),t._v(" "),a("li",[a("p",[t._v("如果传入了多个参数，则参数称为数组的元素")])])])])])])]),t._v(" "),a("h4",{attrs:{id:"检测是否为数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测是否为数组"}},[t._v("#")]),t._v(" 检测是否为数组")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("instanceof 运算符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("instanceof 可以判断一个对象是否是某个构造函数的实例")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])])]),t._v(" "),a("li",[a("p",[t._v("Array.isArray()")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Array.isArray()用于判断一个对象是否为数组，isArray() 是 HTML5 中提供的方法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])])])]),t._v(" "),a("h4",{attrs:{id:"添加删除数组元素的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加删除数组元素的方法"}},[t._v("#")]),t._v(" 添加删除数组元素的方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数组中有进行增加、删除元素的方法，部分方法如下表")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片2.png"),alt:""}}),t._v(" "),a("p",[t._v("注意：push、unshift为增加元素方法；pop、shift为删除元素的方法")])])]),t._v(" "),a("h4",{attrs:{id:"数组排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组排序"}},[t._v("#")]),t._v(" 数组排序")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数组中有对数组本身排序的方法，部分方法如下表")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片3.png"),alt:""}}),t._v(" "),a("p",[t._v("注意：sort方法需要传入参数来设置升序、降序排序")]),t._v(" "),a("ul",[a("li",[t._v("如果传入“function(a,b){ return a-b;}”，则为升序")]),t._v(" "),a("li",[t._v("如果传入“function(a,b){ return b-a;}”，则为降序")])])])]),t._v(" "),a("h4",{attrs:{id:"数组索引方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组索引方法"}},[t._v("#")]),t._v(" 数组索引方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数组中有获取数组指定元素索引值的方法，部分方法如下表")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片4.png"),alt:""}})])]),t._v(" "),a("h4",{attrs:{id:"数组转换为字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组转换为字符串"}},[t._v("#")]),t._v(" 数组转换为字符串")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数组中有把数组转化为字符串的方法，部分方法如下表")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片5.png"),alt:""}}),t._v(" "),a("p",[t._v("注意：join方法如果不传入参数，则按照 “ , ”拼接元素")])])]),t._v(" "),a("h4",{attrs:{id:"其他方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[t._v("#")]),t._v(" 其他方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数组中还有其他操作方法，同学们可以在课下自行查阅学习")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片6.png"),alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"_1-6-字符串对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-字符串对象"}},[t._v("#")]),t._v(" 1.6 字符串对象")]),t._v(" "),a("h4",{attrs:{id:"基本包装类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本包装类型"}},[t._v("#")]),t._v(" 基本包装类型")]),t._v(" "),a("p",[t._v("​\t\t为了方便操作基本数据类型，JavaScript 还提供了三个特殊的引用类型：String、Number和 Boolean。")]),t._v(" "),a("p",[t._v("​\t\t基本包装类型就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下面代码有什么问题？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'andy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("​\t\t按道理基本数据类型是没有属性和方法的，而对象才有属性和方法，但上面代码却可以执行，这是因为")]),t._v(" "),a("p",[t._v("​\t\tjs 会把基本数据类型包装为复杂数据类型，其执行过程如下 ：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 生成临时变量，把简单类型包装为复杂数据类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'andy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 赋值给我们声明的字符变量")]),t._v("\nstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 销毁临时变量")]),t._v("\ntemp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"字符串的不可变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串的不可变"}},[t._v("#")]),t._v(" 字符串的不可变")]),t._v(" "),a("p",[t._v("​\t\t指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。")]),t._v(" "),a("p",[t._v("​\t\t当重新给字符串变量赋值的时候，变量之前保存的字符串不会被修改，依然在内存中重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变。\n​\t\t由于字符串的不可变，在"),a("strong",[t._v("大量拼接字符串")]),t._v("的时候会有效率问题")]),t._v(" "),a("h4",{attrs:{id:"根据字符返回位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据字符返回位置"}},[t._v("#")]),t._v(" 根据字符返回位置")]),t._v(" "),a("p",[t._v("​\t\t字符串通过基本包装类型可以调用部分方法来操作字符串，以下是返回指定字符的位置的方法：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片7.png"),alt:""}}),t._v(" "),a("p",[t._v('​\t\t案例：查找字符串"abcoefoxyozzopp"中所有o出现的位置以及次数')]),t._v(" "),a("ol",[a("li",[t._v("先查找第一个o出现的位置")]),t._v(" "),a("li",[t._v("然后 只要indexOf 返回的结果不是 -1 就继续往后查找")]),t._v(" "),a("li",[t._v("因为indexOf 只能查找到第一个，所以后面的查找，利用第二个参数，当前索引加1，从而继续查找")])]),t._v(" "),a("h4",{attrs:{id:"根据位置返回字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据位置返回字符"}},[t._v("#")]),t._v(" 根据位置返回字符")]),t._v(" "),a("p",[t._v("​\t\t字符串通过基本包装类型可以调用部分方法来操作字符串，以下是根据位置返回指定位置上的字符：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片8.png"),alt:""}}),t._v(" "),a("p",[t._v("​\t\t在上述方法中，charCodeAt方法返回的是指定位置上字符对应的ASCII码，ASCII码对照表如下：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片9.png"),alt:""}}),t._v(" "),a("p",[t._v("​\t\t案例：判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("核心算法：利用 charAt(） 遍历这个字符串")])]),t._v(" "),a("li",[a("p",[t._v("把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1")])]),t._v(" "),a("li",[a("p",[t._v("遍历对象，得到最大值和该字符")]),t._v(" "),a("p",[t._v("​\t注意：在遍历的过程中，把字符串中的每个字符作为对象的属性存储在对象总，对应的属性值是该字符出现的次数")])])]),t._v(" "),a("h4",{attrs:{id:"字符串操作方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串操作方法"}},[t._v("#")]),t._v(" 字符串操作方法")]),t._v(" "),a("p",[t._v("​\t\t字符串通过基本包装类型可以调用部分方法来操作字符串，以下是部分操作方法：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片10.png"),alt:""}}),t._v(" "),a("h4",{attrs:{id:"replace-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-方法"}},[t._v("#")]),t._v(" replace()方法")]),t._v(" "),a("p",[t._v("​\t\treplace() 方法用于在字符串中用一些字符替换另一些字符，其使用格式如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("字符串.replace(被替换的字符串， 要替换为的字符串)；\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"split-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#split-方法"}},[t._v("#")]),t._v(" split()方法")]),t._v(" "),a("p",[t._v("​\t\tsplit()方法用于切分字符串，它可以将字符串切分为数组。在切分完毕之后，返回的是一个新数组。")]),t._v(" "),a("p",[t._v("​\t\t其使用格式如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('字符串.split("分割字符")\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-简单数据类型和复杂数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-简单数据类型和复杂数据类型"}},[t._v("#")]),t._v(" 2 - 简单数据类型和复杂数据类型")]),t._v(" "),a("h3",{attrs:{id:"_2-1-简单数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-简单数据类型"}},[t._v("#")]),t._v(" 2.1 简单数据类型")]),t._v(" "),a("p",[t._v("​\t\t"),a("strong",[t._v("简单类型")]),t._v("（"),a("strong",[t._v("基本数据类型")]),t._v("、"),a("strong",[t._v("值类型")]),t._v("）：在存储时变量中存储的是值本身，包括string ，number，boolean，undefined，null")]),t._v(" "),a("h3",{attrs:{id:"_2-2-复杂数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-复杂数据类型"}},[t._v("#")]),t._v(" 2.2 复杂数据类型")]),t._v(" "),a("p",[t._v("​\t\t"),a("strong",[t._v("复杂数据类型（引用类型）")]),t._v("：在存储时变量中存储的仅仅是地址（引用），通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等；")]),t._v(" "),a("h3",{attrs:{id:"_2-3-堆栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-堆栈"}},[t._v("#")]),t._v(" 2.3 堆栈")]),t._v(" "),a("ul",[a("li",[t._v("堆栈空间分配区别：")])]),t._v(" "),a("p",[t._v("1、栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；")]),t._v(" "),a("p",[t._v("简单数据类型存放到栈里面")]),t._v(" "),a("p",[t._v("2、堆（操作系统）：存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片11.png"),alt:""}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("简单数据类型的存储方式")]),t._v(" "),a("p",[t._v("​\t\t值类型变量的数据直接存放在变量（栈空间）中")])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片12.png"),alt:""}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("复杂数据类型的存储方式")]),t._v(" "),a("p",[t._v("​\t\t引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片13.png"),alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"_2-4-简单类型传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-简单类型传参"}},[t._v("#")]),t._v(" 2.4 简单类型传参")]),t._v(" "),a("p",[t._v("​\t\t函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("​\t\t运行结果如下：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片14.png"),alt:""}}),t._v(" "),a("h3",{attrs:{id:"_2-5-复杂数据类型传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-复杂数据类型传参"}},[t._v("#")]),t._v(" 2.5 复杂数据类型传参")]),t._v(" "),a("p",[t._v("​\t\t函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x = p")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 这个输出什么 ?    ")]),t._v("\n    x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张学友"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 这个输出什么 ?    ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"刘德华"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 这个输出什么 ?   ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 这个输出什么 ?  ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("​\t\t运行结果如下：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/js基础06/images/图片15.png"),alt:""}})])}),[],!1,null,null,null);s.default=r.exports}}]);