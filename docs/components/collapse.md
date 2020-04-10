---
title: collapse
sidebarDepth: 2
---


<ClientOnly>
<common-code-format>
  <div slot="description">
    <header class="v-description-title">
      基础用法
    </header>
    <p class="v-description-text">
      可同时展开多个面板，面板之间不影响
    </p>
  </div>
  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      collapse 折叠面板
    </header>
    <p class="component-text">
      通过折叠面板隐藏或显示内容区域
    </p>
  </div>
  
  <div slot="desc">
    <header class="v-description-title">
      可同时展开多个面板，面板之间不影响
    </header>
  </div>

  <div slot="showComponents" class="v-show-component">
    <collapse-v-collapse/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      通过<span class="v-paraStyle">single</span>属性来设置是否展示单个面板。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-collapse :selected.sync="selected">
      <v-collapse-item title="标题1" name="1">内容1</v-collapse-item>
      <v-collapse-item title="标题2" name="2">内容2</v-collapse-item>
      <v-collapse-item title="标题3" name="3">内容3</v-collapse-item>
    </v-collapse>

    <script>
      data(){
        return{
          selected: ['1','2']
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
      手风琴效果
    </header>
    <p class="v-description-text">
      每次只能展开一个面板
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <collapse-v-collapse-single/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      通过<span class="v-paraStyle">single</span>属性来设置是否展示单个面板。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-collapse :selected.sync="selected" single>
      <v-collapse-item title="标题1" name="1">内容1</v-collapse-item>
      <v-collapse-item title="标题2" name="2">内容2</v-collapse-item>
      <v-collapse-item title="标题3" name="3">内容3</v-collapse-item>
    </v-collapse>

    <script>
      data(){
        return{
          selected: ['1']
        }
      }
    </script>
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
          <td class="formBodyCol">name</td>
          <td class="formBodyCol">标识符</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">title</td>
          <td class="formBodyCol">面板标题</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
  </tbody>
</common-create-form>
</ClientOnly>