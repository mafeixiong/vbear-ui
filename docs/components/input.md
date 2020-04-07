---
title: Input
sidebarDepth: 2
---
<common-code-format>
  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Input输入框
    </header>
    <p class="component-text">
      输入字符
    </p>
  </div>

  <div slot="description">
    <header class="v-description-title">
      基础用法
    </header>
    <p class="v-description-text">
     普通的输入框，支持<span class="add-color">v-model</span>双向绑定。
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <input-v-input/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
     支持<span class="v-paraStyle">v-model</span>双向绑定
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-input placeholder="请输入内容" v-model="message"></v-input> 
    <script>
      export default {
        data () {
          return {
            message: ''
          }
        }
      }
    </script>
  </highlight-code>
</common-code-format>
</ClientOnly>

<common-code-format>
  <div slot="description">
    <header class="v-description-title">
      禁用状态
    </header>
  </div>

  <div slot="showComponents" class="v-show-component">
    <input-v-input-disabled/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      通过<span class="v-paraStyle">disabled</span>属性指定是否禁用input组件
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-input placeholder="请输入内容" v-model="message" disabled></v-input>
    <script>
      export default {
        data() {
          return {
            message: ''
          }
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
      只读输入框
    </header>
    <p class="v-description-text">
      通过<span class="add-color">readonly</span>属性指定输入框只读。
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <input-v-input-readonly/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性<span class="v-paraStyle">readonly</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-input placeholder="请输入内容" v-model="message" readonly></v-input> 
    <script>
      export default {
        data() {
          return {
            message: ''
          }
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
      可清空
    </header>
    <p class="v-description-text">
     使用<span class="add-color">clear</span>属性指定输入框可以清空
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <input-v-input-clear/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性: <span class="v-paraStyle">clear</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-input placeholder="请输入内容" v-model="message" clear></v-input>
    <script>
      export default {
        data() {
          return {
            message: ''
          }
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
      密码输入框
    </header>
    <p class="v-description-text">
     使用<span class="add-color">show-password</span>属性即可得到一个可切换显示隐藏的密码框
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <input-v-input-password/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性: <span class="v-paraStyle">show-password</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-input placeholder="请输入内容" v-model="message" show-password></v-input>
    <script>
      export default {
        data() {
          return {
            message: '123456'
          }
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
      带icon的输入框
    </header>
    <p class="v-description-text">
      带有图标标记输入类型
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <input-v-input-icon/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性: <span class="v-paraStyle">icon</span>设置对应的图标即可
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-input v-model="message1" icon="v-edit"></v-input>
    <v-input v-model="message2" icon="v-search"></v-input>
    <script>
      export default {
        data() {
          return {
            message1: '',
            message2: ''
          }
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
      文本域
    </header>
    <p class="v-description-text">
      用于输入多行文本信息，通过将 type 属性的值指定为 textarea
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <input-v-input-textarea/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性: <span class="v-paraStyle">type</span>设置为 textarea 即可
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-input v-model="message1" icon="v-edit"></v-input>
    <v-input v-model="message2" icon="v-search"></v-input>
    <script>
      export default {
        data() {
          return {
            message1: '',
            message2: ''
          }
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
          <th class="formHeadCol">默认值</th>
      </tr>
  </thead>
  <tbody slot="form-body" class="formBody">
      <tr class="formBodyRow">
          <td class="formBodyCol">v-model</td>
          <td class="formBodyCol">双向绑定</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">disabled</td>
          <td class="formBodyCol">禁用</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
        <td class="formBodyCol">placeholder</td>
        <td class="formBodyCol">输入框占位文本</td>
        <td class="formBodyCol">string</td>
        <td class="formBodyCol">—</td>
        <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
        <td class="formBodyCol">clear</td>
        <td class="formBodyCol">是否可清空</td>
        <td class="formBodyCol">boolean</td>
        <td class="formBodyCol">—</td>
        <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
        <td class="formBodyCol">readonly</td>
        <td class="formBodyCol">是否只读</td>
        <td class="formBodyCol">boolean</td>
        <td class="formBodyCol">—</td>
        <td class="formBodyCol">false</td>
      </tr>
    <tr class="formBodyRow">
      <td class="formBodyCol">icon</td>
      <td class="formBodyCol">输入框图标</td>
      <td class="formBodyCol">string</td>
      <td class="formBodyCol">—</td>
      <td class="formBodyCol">—</td>
    </tr>
  </tbody>
</common-create-form>
</ClientOnly>