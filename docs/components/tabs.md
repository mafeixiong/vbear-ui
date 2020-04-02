---
title: Tabs
sidebarDepth: 2
---

<ClientOnly>
<common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Tabs 标签页
    </header>
    <p class="component-text">
      选项卡切换组件
    </p>
  </div>

<div slot="description">
  <header class="v-description-title">
    基础用法
  </header>
  <p class="-description-text">
    通过<span class="add-color">name</span>属性，<span class="add-color">v-tabs-item</span>与<span class="add-color">v-tabs-pane</span>的 <span class="add-color">name</span> 保持一致可以实现点击不同的标签显示对应的内容。
  </p>
</div>

  <div slot="showComponents" class="v-show-component">
    <tabs-v-tabs/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性: <span class="add-color">name</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-tabs :selected.sync="selectedTab">
        <v-tabs-head>
            <v-tabs-item name="tab1">Tab1</v-tabs-item>
            <v-tabs-item name="tab2">Tab2</v-tabs-item>
            <v-tabs-item name="tab3">Tab3</v-tabs-item>
        </v-tabs-head>
        <v-tabs-body>
            <v-tabs-pane name="tab1">这是Tab1的内容</v-tabs-pane>
            <v-tabs-pane name="tab2">这是Tab2的内容</v-tabs-pane>
            <v-tabs-pane name="tab3">这是Tab3的内容</v-tabs-pane>
        </v-tabs-body>
    </v-tabs>
    
    <script>
      data () {
        return {
          selectedTab: 'tab1',
        }
      }
    </script>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>

<div slot="description">
  <header class="v-description-title">
    禁用Tabs
  </header>
  <p class="-description-text">
    通过<span class="add-color">v-tabs-item</span>添加disabled属性可禁用某一项。
  </p>
</div>

  <div slot="showComponents" class="v-show-component">
    <tabs-v-tabs-disabled/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性: <span class="add-color">disabled</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-tabs :selected.sync="selectedTab">
        <v-tabs-head>
            <v-tabs-item name="tab1">Tab1</v-tabs-item>
            <v-tabs-item name="tab2" disabled>Tab2</v-tabs-item>
            <v-tabs-item name="tab3">Tab3</v-tabs-item>
        </v-tabs-head>
        <v-tabs-body>
            <v-tabs-pane name="tab1">这是Tab1的内容</v-tabs-pane>
            <v-tabs-pane name="tab2">这是Tab2的内容</v-tabs-pane>
            <v-tabs-pane name="tab3">这是Tab3的内容</v-tabs-pane>
        </v-tabs-body>
    </v-tabs>
    
    <script>
      data () {
        return {
          selectedTab: 'tab1',
        }
      }
    </script>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>

<div slot="description">
  <header class="v-description-title">
    带图标的Tabs
  </header>
  <p class="-description-text">
    通过<span class="add-color">v-icon</span>组件添加icon图标。
  </p>
</div>

  <div slot="showComponents" class="v-show-component">
    <tabs-v-tabs-icon/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      添加<span class="add-color">icon</span>组件即可。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-tabs :selected.sync="selectedTab">
        <v-tabs-head>
            <v-tabs-item name="tab1">
                <v-icon icon="v-user"></v-icon>
                Tab1
            </v-tabs-item>
            <v-tabs-item name="tab2">
                <v-icon icon="v-settings"></v-icon>
                Tab2
            </v-tabs-item>
        </v-tabs-head>
        <v-tabs-body>
            <v-tabs-pane name="tab1">这是Tab1的内容</v-tabs-pane>
            <v-tabs-pane name="tab2">这是Tab2的内容</v-tabs-pane>
        </v-tabs-body>
    </v-tabs>
    
    <script>
      data () {
        return {
          selectedTab: 'tab1',
        }
      }
    </script>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>

<div slot="description">
  <header class="v-description-title">
    Tabs 附加操作
  </header>
  <p class="-description-text">
    通过<span class="add-color">slot</span>插槽可以在页签右边添加附加操作。
  </p>
</div>

  <div slot="showComponents" class="v-show-component">
    <tabs-v-tabs-action/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      <span class="add-color">slot</span>名称为<span class="add-color">actions</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-tabs :selected.sync="selectedTab">
        <v-tabs-head>
            <template slot="actions">
                <v-button icon="v-settings">设置</v-button>
            </template>
            <v-tabs-item name="tab1">Tab1</v-tabs-item>
            <v-tabs-item name="tab2">Tab2</v-tabs-item>
            <v-tabs-item name="tab3">Tab3</v-tabs-item>
        </v-tabs-head>
        <v-tabs-body>
            <v-tabs-pane name="tab1">这是Tab1的内容</v-tabs-pane>
            <v-tabs-pane name="tab2">这是Tab2的内容</v-tabs-pane>
            <v-tabs-pane name="tab3">这是Tab3的内容</v-tabs-pane>
        </v-tabs-body>
    </v-tabs>
    
    <script>
      data () {
        return {
          selectedTab: 'tab1',
        }
      }
    </script>
  </highlight-code>
</common-code-format>
</ClientOnly>

### V-TABS-ITEM

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
          <td class="formBodyCol">name</td>
          <td class="formBodyCol">关联标签和内容</td>
          <td class="formBodyCol">string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">disabled</td>
          <td class="formBodyCol">是否禁用</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
  </tbody>
</common-create-form>
</ClientOnly>