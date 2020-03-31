---
title: Popover
sidebarDepth: 2
---

<ClientOnly>
<common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      popover弹出框
    </header>
    <p class="component-text">
      点击显示带有内容的方框。
    </p>
  </div>

  <div slot="description">
    <header class="v-description-title">
      基础用法
    </header>
    <p class="v-description-text">
      <span class="add-color">position</span>属性指定内容框位置，属性<span class="add-color">trigger</span>指定触发方式。
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <popover-v-popover />
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性<span class="v-paraStyle">position</span>属性值可选<span class="v-paraStyle">top</span>，<span class="v-paraStyle">bottom</span>，<span class="v-paraStyle">left</span>，<span class="v-paraStyle">right</span>。默认值为<span class="v-paraStyle">top</span>。
      属性<span class="v-paraStyle">trigger</span>，属性值有<span class="v-paraStyle">click</span>，<span class="v-paraStyle">hover</span>。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-row>
        <v-popover position="top">
            <template slot="content">
                <div>顶部内容</div>
            </template>
            <v-button>click 激活</v-button>
        </v-popover>
        <v-popover position="bottom">
            <template slot="content">
                <div>底部内容</div>
            </template>
            <v-button>click 激活</v-button>
        </v-popover>
        <v-popover position="left">
            <template slot="content">
                <div>左边内容</div>
            </template>
            <v-button>click 激活</v-button>
        </v-popover>
        <v-popover position="right">
            <template slot="content">
                <div>右边内容</div>
            </template>
            <v-button>click 激活</v-button>
        </v-popover>
    </v-row>
    <v-row>
        <v-popover trigger="hover">
            <template slot="content">
                <div>顶部内容</div>
            </template>
            <v-button type="primary">hover 激活</v-button>
        </v-popover>
        <v-popover position="bottom" trigger="hover">
            <template slot="content">
                <div>底部内容</div>
            </template>
            <v-button type="primary">hover 激活</v-button>
        </v-popover>
        <v-popover position="left" trigger="hover">
            <template slot="content">
                <div>左边内容</div>
            </template>
            <v-button type="primary">hover 激活</v-button>
        </v-popover>
        <v-popover position="right" trigger="hover">
            <template slot="content">
                <div>右边内容</div>
            </template>
            <v-button type="primary">hover 激活</v-button>
        </v-popover>
    </v-row>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-create-form>
  <thead slot="form-header" class="formHead">
      <tr class="formHeadRow">
          <th class="formHeadCol">参数</th>
          <th class="formHeadCol">说明</th>
          <th class="formHeadCol">类型</th>
          <th class="formHeadCol">可选值</th>
          <th class="formHeadCol">默认值值</th>
      </tr>
  </thead>
  <tbody slot="form-body" class="formBody">
      <tr class="formBodyRow">
          <td class="formBodyCol">position</td>
          <td class="formBodyCol">内容框位置</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">top / bottom / left / right</td>
          <td class="formBodyCol">top</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">trigger</td>
          <td class="formBodyCol">触发方式</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">click / hover</td>
          <td class="formBodyCol">click</td>
      </tr>
  </tbody>
</common-create-form>
</ClientOnly>