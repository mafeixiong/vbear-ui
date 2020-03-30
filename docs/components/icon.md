---
title: icon
sidebarDepth: 2
---

<ClientOnly>
<common-code-format>
<div slot="componentNameTitle" class="component">
    <header class="component-name">
      Icon 图标
    </header>
    <p class="component-text">
      提供了一套常用的图标集合。
    </p>
  </div>
  <div slot="description">
    <header class="v-description-title">
      使用方法
    </header>
    <p class="v-description-text">
      设置<span class="add-color">icon</span>指定对应的名称
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <icon-v-icon/>
  </div>
  
  <section slot="desc" class="v-code-description">
      <p class="v-paraStyle-wrapper">
          属性:<span class="v-paraStyle">icon</span>
      </p>
  </section>
  
  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-icon class="v-class" icon="v-edit"></v-icon>
    <v-icon class="v-class" icon="v-delete"></v-icon>
    <v-icon class="v-class" icon="v-share"></v-icon>
    <v-button icon="v-search">搜索</v-button>
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
            <th class="formHeadCol">默认值</th>
        </tr>
    </thead>
    <tbody slot="form-body" class="formBody">
        <tr class="formBodyRow">
            <td class="formBodyCol">icon</td>
            <td class="formBodyCol">图标类名</td>
            <td class="formBodyCol">string</td>
            <td class="formBodyCol">—</td>
            <td class="formBodyCol">—</td>
        </tr>
        <tr class="formBodyRow">
            <td class="formBodyCol">class</td>
            <td class="formBodyCol">样式类名</td>
            <td class="formBodyCol">string</td>
            <td class="formBodyCol">—</td>
            <td class="formBodyCol">—</td>
        </tr>
    </tbody>
</common-create-form>
</ClientOnly>