webpackJsonp([2],{C3fl:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("Dd8w"),i=o.n(e),a=(o("VmfC"),o("NYxO")),s={data:function(){return{}},created:function(){this.checkLogin({path:"/login"}),this.getNotebooks()},computed:i()({},Object(a.c)(["notebooks"])),methods:i()({},Object(a.b)(["getNotebooks","addNotebook","updateNotebook","deleteNotebook","checkLogin"]),{onCreate:function(){var t=this;this.$prompt("输入新笔记本标题","创建笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputErrorMessage:"标题不能为空，且不超过30个字符"}).then(function(n){var o=n.value;t.addNotebook({title:o})})},onEdit:function(t){var n=this;this.$prompt("输入新笔记本标题","修改笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputValue:t.title,inputErrorMessage:"标题不能为空，且不超过30个字符"}).then(function(o){var e=o.value;n.updateNotebook({notebookId:t.id,title:e})})},onDelete:function(t){var n=this;this.$confirm("确认要删除笔记本吗","删除笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.deleteNotebook({notebookId:t.id})})}})},c={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"detail",attrs:{id:"notebook-list"}},[o("header",[o("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.onCreate(n)}}},[o("i",{staticClass:"iconfont icon-plus"}),t._v(" 新建笔记本")])]),t._v(" "),o("main",[o("div",{staticClass:"layout"},[o("h3",[t._v("笔记本列表("+t._s(t.notebooks.length)+")")]),t._v(" "),o("div",{staticClass:"book-list"},t._l(t.notebooks,function(n){return o("router-link",{key:n.id,staticClass:"notebook",attrs:{to:"/note?notebookId="+n.id}},[o("div",[o("span",{staticClass:"iconfont icon-notebook"}),t._v(" "+t._s(n.title)+" \n            "),o("span",[t._v(t._s(n.noteCounts))]),t._v(" "),o("span",{staticClass:"action",on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.onEdit(n)}}},[t._v("编辑")]),t._v(" "),o("span",{staticClass:"action",on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.onDelete(n)}}},[t._v("删除")]),t._v(" "),o("span",{staticClass:"date"},[t._v(t._s(n.createdAtFriendly))])])])}),1)])])])},staticRenderFns:[]};var r=o("VU/8")(s,c,!1,function(t){o("nn05")},"data-v-78b6bad4",null);n.default=r.exports},nn05:function(t,n){}});
//# sourceMappingURL=2.e168009a35cb94977d01.js.map