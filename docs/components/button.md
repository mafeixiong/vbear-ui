---
title: Button
sidebarDepth: 2
---

<ClientOnly>
<common-code-format>
<div slot="componentNameTitle" class="component">
    <header class="component-name">
      Button 按钮
    </header>
    <p class="component-text">
      基础组件，开发中比较常用的按钮。
    </p>
  </div>

  <div slot="description">
    <header class="v-description-title">
      基础用法
    </header>
    <p class="v-description-text">
      按钮类型有：默认按钮、主要按钮、成功按钮、信息按钮、警告按钮、危险按钮。通过设置<span class="add-color">type</span>属性值为<span class="add-color">primary</span>、<span class="add-color">success</span>、<span class="add-color">info</span>、<span class="add-color">warning</span>、<span class="add-color">danger</span>创建不同样式的按钮。
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <button-v-button/>
  </div>
  
  <section slot="desc" class="v-code-description">
      <p class="v-paraStyle-wrapper">
          属性:<span class="v-paraStyle">type</span>、<span class="v-paraStyle">plain</span>、<span class="v-paraStyle">round</span>、<span class="v-paraStyle">circle</span>来定义 Button 的样式。
      </p>
  </section>
  
  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-row>
        <v-button>默认按钮</v-button>
        <v-button type="primary">主要按钮</v-button>
        <v-button type="success">成功按钮</v-button>
        <v-button type="info">信息按钮</v-button>
        <v-button type="warning">警告按钮</v-button>
        <v-button type="danger">危险按钮</v-button>
    </v-row>
    <v-row>
        <v-button round plain>默认按钮</v-button>
        <v-button type="primary" round plain>主要按钮</v-button>
        <v-button type="success" round plain>成功按钮</v-button>
        <v-button type="info" round plain>信息按钮</v-button>
        <v-button type="warning" round plain>警告按钮</v-button>
        <v-button type="danger" round plain>危险按钮</v-button>
    </v-row>
    <v-row>
        <v-button round>默认按钮</v-button>
        <v-button type="primary" round>主要按钮</v-button>
        <v-button type="success" round>成功按钮</v-button>
        <v-button type="info" round>信息按钮</v-button>
        <v-button type="warning" round>警告按钮</v-button>
        <v-button type="danger" round>危险按钮</v-button>
    </v-row>
    <v-row>
        <v-button circle icon="v-down">默认按钮</v-button>
        <v-button type="primary" icon="v-download" circle>主要按钮</v-button>
        <v-button type="success" icon="v-error" circle>成功按钮</v-button>
        <v-button type="info" icon="v-right" circle>信息按钮</v-button>
        <v-button type="warning" icon="v-settings" circle>警告按钮</v-button>
        <v-button type="danger" icon="v-thumbs-up" circle>危险按钮</v-button>
    </v-row>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>
  <div slot="description">
    <header class="v-description-title">
      禁用状态
    </header>
    <p class="v-description-text">
      属性<span class="add-color">disabled</span>指定按钮为禁用状态。
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <button-v-button-disabled/>
  </div>
  
  <section slot="desc" class="v-code-description">
      <p class="v-paraStyle-wrapper">
          属性:<span class="v-paraStyle">disabled</span>
      </p>
  </section>
  
  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-button disabled>默认按钮</v-button>
    <v-button disabled type="primary">主要按钮</v-button>
    <v-button disabled type="success">成功按钮</v-button>
    <v-button disabled type="info">信息按钮</v-button>
    <v-button disabled type="warning">警告按钮</v-button>
    <v-button disabled type="danger">危险按钮</v-button>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>
<header class="v-description-title">
      圆形按钮
    </header>
  <div slot="description">
      <header class="v-description-title">
        圆形按钮
      </header>
      <p class="v-description-text">
        属性<span class="add-color">circle</span>指定<span class="add-color">图标按钮</span>为圆形按钮。
      </p>
   </div>

  <div slot="showComponents" class="v-show-component">
    <button-v-button-circle/>
  </div>
  
  <section slot="desc" class="v-code-description">
      <p class="v-paraStyle-wrapper">
          属性:<span class="v-paraStyle">circle</span>
      </p>
  </section>
  
  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-button circle icon="v-down">默认按钮</v-button>
    <v-button type="primary" icon="v-download" circle>主要按钮</v-button>
    <v-button type="success" icon="v-error" circle>成功按钮</v-button>
    <v-button type="info" icon="v-right" circle>信息按钮</v-button>
    <v-button type="warning" icon="v-settings" circle>警告按钮</v-button>
    <v-button type="danger" icon="v-thumbs-up" circle>危险按钮</v-button>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>
  <div slot="description">
    <header class="v-description-title">
      图标按钮
    </header>
    <p class="v-description-text">
      属性<span class="add-color">icon</span>指定icon图标类型，<span class="add-color">icon-position</span>指定图标在按钮中的左右位置。
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <button-v-button-icon/>
  </div>
  
  <section slot="desc" class="v-code-description">
      <p class="v-paraStyle-wrapper">
          属性:<span class="v-paraStyle">icon-position</span>默认值:<span class="v-paraStyle">left</span>。
      </p>
  </section>
  
  <highlight-code class="codeStyle" slot="showCode" lang="vue">
      <v-button icon-position="right" icon="v-down">默认按钮</v-button>
      <v-button type="primary" icon="v-download">主要按钮</v-button>
      <v-button icon-position="right" type="success" icon="v-error">成功按钮</v-button>
      <v-button icon-position="right" type="info" icon="v-right">信息按钮</v-button>
      <v-button icon-position="right" type="warning" icon="v-settings">警告按钮</v-button>
      <v-button type="danger" icon="v-thumbs-up">危险按钮</v-button>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>
  <div slot="description">
    <header class="v-description-title">
      按钮组
    </header>
    <p class="v-description-text">
      以按钮组的方式出现，多个单个按钮组合。
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <button-v-button-group/>
  </div>
  
  <section slot="desc" class="v-code-description">
      <p class="v-paraStyle-wrapper">
          属性:<span class="v-paraStyle">icon-position</span>默认值:<span class="v-paraStyle">left</span>。
      </p>
  </section>
  
  <highlight-code class="codeStyle" slot="showCode" lang="vue">
      <v-button-group>
          <v-button type="primary" icon="v-left">上一页</v-button>
          <v-button type="primary" icon="v-right" icon-position="right">下一页</v-button>
      </v-button-group>
      <v-button-group>
          <v-button type="primary" icon="v-edit">编辑</v-button>
          <v-button type="primary" icon="v-share">分享</v-button>
          <v-button type="primary" icon="v-delete">删除</v-button>
      </v-button-group>
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
            <td class="formBodyCol">type</td>
            <td class="formBodyCol">类型</td>
            <td class="formBodyCol">string</td>
            <td class="formBodyCol">primary / success / info / warning / danger</td>
            <td class="formBodyCol">—</td>
        </tr>
        <tr class="formBodyRow">
            <td class="formBodyCol">icon</td>
            <td class="formBodyCol">图标类名</td>
            <td class="formBodyCol">string</td>
            <td class="formBodyCol">使用v-开头 例如：v-settings</td>
            <td class="formBodyCol">—</td>
        </tr>
        <tr class="formBodyRow">
            <td class="formBodyCol">icon-position</td>
            <td class="formBodyCol">图标位置</td>
            <td class="formBodyCol">string</td>
            <td class="formBodyCol">left / right</td>
            <td class="formBodyCol">left</td>
        </tr>
        <tr class="formBodyRow">
            <td class="formBodyCol">circle</td>
            <td class="formBodyCol">是否圆形按钮</td>
            <td class="formBodyCol">boolean</td>
            <td class="formBodyCol">—</td>
            <td class="formBodyCol">false</td>
        </tr>
        <tr class="formBodyRow">
            <td class="formBodyCol">disabled</td>
            <td class="formBodyCol">是否禁用状态</td>
            <td class="formBodyCol">boolean</td>
            <td class="formBodyCol">—</td>
            <td class="formBodyCol">false</td>
        </tr>
    </tbody>
</common-create-form>
</ClientOnly>
