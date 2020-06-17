(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{535:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ClientOnly",[a("common-code-format",[a("div",{staticClass:"component",attrs:{slot:"componentNameTitle"},slot:"componentNameTitle"},[a("header",{staticClass:"component-name"},[t._v("\n      Tabs 标签页\n    ")]),t._v(" "),a("p",{staticClass:"component-text"},[t._v("\n      选项卡切换组件\n    ")])]),t._v(" "),a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"v-description-title"},[t._v("\n    基础用法\n  ")]),t._v(" "),a("p",{staticClass:"-description-text"},[t._v("\n    通过"),a("span",{staticClass:"add-color"},[t._v("name")]),t._v("属性，"),a("span",{staticClass:"add-color"},[t._v("v-tabs-item")]),t._v("与"),a("span",{staticClass:"add-color"},[t._v("v-tabs-pane")]),t._v("的 "),a("span",{staticClass:"add-color"},[t._v("name")]),t._v(" 保持一致可以实现点击不同的标签显示对应的内容。\n  ")])]),t._v(" "),a("div",{staticClass:"v-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("tabs-v-tabs")],1),t._v(" "),a("section",{staticClass:"v-code-description",attrs:{slot:"desc"},slot:"desc"},[a("p",{staticClass:"v-paraStyle-wrapper"},[t._v("\n      属性: "),a("span",{staticClass:"add-color"},[t._v("name")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<v-tabs :selected.sync="selectedTab">\n    <v-tabs-head>\n        <v-tabs-item name="tab1">Tab1</v-tabs-item>\n        <v-tabs-item name="tab2">Tab2</v-tabs-item>\n        <v-tabs-item name="tab3">Tab3</v-tabs-item>\n    </v-tabs-head>\n    <v-tabs-body>\n        <v-tabs-pane name="tab1">这是Tab1的内容</v-tabs-pane>\n        <v-tabs-pane name="tab2">这是Tab2的内容</v-tabs-pane>\n        <v-tabs-pane name="tab3">这是Tab3的内容</v-tabs-pane>\n    </v-tabs-body>\n</v-tabs>\n\n<script>\n  data () {\n    return {\n      selectedTab: \'tab1\',\n    }\n  }\n<\/script>\n')])])])])],1)],1),t._v(" "),a("ClientOnly",[a("common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"v-description-title"},[t._v("\n    禁用Tabs\n  ")]),t._v(" "),a("p",{staticClass:"-description-text"},[t._v("\n    通过"),a("span",{staticClass:"add-color"},[t._v("v-tabs-item")]),t._v("添加disabled属性可禁用某一项。\n  ")])]),t._v(" "),a("div",{staticClass:"v-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("tabs-v-tabs-disabled")],1),t._v(" "),a("section",{staticClass:"v-code-description",attrs:{slot:"desc"},slot:"desc"},[a("p",{staticClass:"v-paraStyle-wrapper"},[t._v("\n      属性: "),a("span",{staticClass:"add-color"},[t._v("disabled")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<v-tabs :selected.sync="selectedTab">\n    <v-tabs-head>\n        <v-tabs-item name="tab1">Tab1</v-tabs-item>\n        <v-tabs-item name="tab2" disabled>Tab2</v-tabs-item>\n        <v-tabs-item name="tab3">Tab3</v-tabs-item>\n    </v-tabs-head>\n    <v-tabs-body>\n        <v-tabs-pane name="tab1">这是Tab1的内容</v-tabs-pane>\n        <v-tabs-pane name="tab2">这是Tab2的内容</v-tabs-pane>\n        <v-tabs-pane name="tab3">这是Tab3的内容</v-tabs-pane>\n    </v-tabs-body>\n</v-tabs>\n\n<script>\n  data () {\n    return {\n      selectedTab: \'tab1\',\n    }\n  }\n<\/script>\n')])])])])],1)],1),t._v(" "),a("ClientOnly",[a("common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"v-description-title"},[t._v("\n    带图标的Tabs\n  ")]),t._v(" "),a("p",{staticClass:"-description-text"},[t._v("\n    通过"),a("span",{staticClass:"add-color"},[t._v("v-icon")]),t._v("组件添加icon图标。\n  ")])]),t._v(" "),a("div",{staticClass:"v-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("tabs-v-tabs-icon")],1),t._v(" "),a("section",{staticClass:"v-code-description",attrs:{slot:"desc"},slot:"desc"},[a("p",{staticClass:"v-paraStyle-wrapper"},[t._v("\n      添加"),a("span",{staticClass:"add-color"},[t._v("icon")]),t._v("组件即可。\n    ")])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<v-tabs :selected.sync="selectedTab">\n    <v-tabs-head>\n        <v-tabs-item name="tab1">\n            <v-icon icon="v-user"></v-icon>\n            Tab1\n        </v-tabs-item>\n        <v-tabs-item name="tab2">\n            <v-icon icon="v-settings"></v-icon>\n            Tab2\n        </v-tabs-item>\n    </v-tabs-head>\n    <v-tabs-body>\n        <v-tabs-pane name="tab1">这是Tab1的内容</v-tabs-pane>\n        <v-tabs-pane name="tab2">这是Tab2的内容</v-tabs-pane>\n    </v-tabs-body>\n</v-tabs>\n\n<script>\n  data () {\n    return {\n      selectedTab: \'tab1\',\n    }\n  }\n<\/script>\n')])])])])],1)],1),t._v(" "),a("ClientOnly",[a("common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"v-description-title"},[t._v("\n    Tabs 附加操作\n  ")]),t._v(" "),a("p",{staticClass:"-description-text"},[t._v("\n    通过"),a("span",{staticClass:"add-color"},[t._v("slot")]),t._v("插槽可以在页签右边添加附加操作。\n  ")])]),t._v(" "),a("div",{staticClass:"v-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("tabs-v-tabs-action")],1),t._v(" "),a("section",{staticClass:"v-code-description",attrs:{slot:"desc"},slot:"desc"},[a("p",{staticClass:"v-paraStyle-wrapper"},[a("span",{staticClass:"add-color"},[t._v("slot")]),t._v("名称为"),a("span",{staticClass:"add-color"},[t._v("actions")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<v-tabs :selected.sync="selectedTab">\n    <v-tabs-head>\n        <template slot="actions">\n            <v-button icon="v-settings">设置</v-button>\n        </template>\n        <v-tabs-item name="tab1">Tab1</v-tabs-item>\n        <v-tabs-item name="tab2">Tab2</v-tabs-item>\n        <v-tabs-item name="tab3">Tab3</v-tabs-item>\n    </v-tabs-head>\n    <v-tabs-body>\n        <v-tabs-pane name="tab1">这是Tab1的内容</v-tabs-pane>\n        <v-tabs-pane name="tab2">这是Tab2的内容</v-tabs-pane>\n        <v-tabs-pane name="tab3">这是Tab3的内容</v-tabs-pane>\n    </v-tabs-body>\n</v-tabs>\n\n<script>\n  data () {\n    return {\n      selectedTab: \'tab1\',\n    }\n  }\n<\/script>\n')])])])])],1)],1),t._v(" "),a("h3",{attrs:{id:"v-tabs-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-tabs-item"}},[t._v("#")]),t._v(" V-TABS-ITEM")]),t._v(" "),a("ClientOnly",[a("common-create-form",[a("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[a("tr",{staticClass:"formHeadRow"},[a("th",{staticClass:"formHeadCol"},[t._v("参数")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("类型")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("可选值")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("默认值值")])])]),t._v(" "),a("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("name")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("关联标签和内容")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string / number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("disabled")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("是否禁用")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])])])])],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);