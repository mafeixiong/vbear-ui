---
title: Toast
sidebarDepth: 2
---

<ClientOnly>
<common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      toast
    </header>
    <p class="component-text">
      点击按钮可以在页面显示提示信息
    </p>
  </div>

  <div slot="description">
    <header class="vi-description-title">
      基础用法
    </header>
    <p class="vi-description-text">
      给按钮绑定一个点击事件，通过<span class="add-color">this.$toast</span>方法传递参数，第一个参数是个字符串<span class="add-color">message</span>、第二个参数是一个对象，对象属性有<span class="add-color">closeButton</span>：关闭按钮，<span class="add-color">autoClose</span>：自动关闭，<span class="add-color">duration</span>：关闭按钮时间，<span class="add-color">position</span>：按钮在页面中的位置。
      可以接收点击关闭的回调函数 <span class="add-color">callback</span>
    </p>
    <header class="vi-description-title">
      点击关闭
    </header>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <toast-v-toast/>
  </div>

  <section slot="desc" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      设置<span class="vi-paraStyle">autoClose</span>属性为false，取消自动关闭。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-button @click="showToast('top')">上边显示</v-button>
    <v-button @click="showToast('middle')">中间显示</v-button>
    <v-button @click="showToast('bottom')">下边显示</v-button>
    
    <script>
      showToast (position) {
          this.$toast('这是一条消息提示', {
            position,
            enableHtml: false,
            closeButton: {
              text: '确定',
              callback () {
                console.log('callback')
              },
            },
            autoClose: false,
            autoCloseDelay: 3,
          })
      }
    </script>
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>

  <div slot="description">
    <header class="vi-description-title">
      自动关闭
    </header>
    <p class="vi-description-text">
      属性<span class="add-color">duration</span>可以控制按钮隔几秒后关闭。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <toast-v-toast-auto/>
  </div>

  <section slot="desc" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      属性<span class="vi-paraStyle">autoCloseDelay</span>可设置几秒钟后自动关闭。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-button @click="showToast('top')">上边显示</v-button>
    <v-button @click="showToast('middle')">中间显示</v-button>
    <v-button @click="showToast('bottom')">下边显示</v-button>
    
    <script>
      showToast (position) {
          this.$toast('这是一条消息提示', {
            position,
            autoCloseDelay: 3,
          })
      },
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
          <td class="formBodyCol">message</td>
          <td class="formBodyCol">显示信息</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">closeButton</td>
          <td class="formBodyCol">按钮尾部关闭按钮</td>
          <td class="formBodyCol">object</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">autoClose</td>
          <td class="formBodyCol">是否自动关闭</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">duration</td>
          <td class="formBodyCol">自动关闭间隔时间</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">1</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">position</td>
          <td class="formBodyCol">按钮位置</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">top / middle / bottom</td>
          <td class="formBodyCol">top</td>
      </tr>
  </tbody>
</common-create-form>
</ClientOnly>
