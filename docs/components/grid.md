---
title: Grid
sidebarDepth: 2
---

<ClientOnly>
<common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      grid 布局
    </header>
    <p class="component-text">
      根据 24 分栏，可以简便地布局。
    </p>
  </div>

  <div slot="description">
    <header class="v-description-title">
      基础布局
    </header>
    使用单一分栏创建基础的栅格布局。
  </div>

  <div slot="showComponents" class="v-show-component">
    <grid-v-grid/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      通过 row 和 col 组件，并通过 col 组件的 <span class="v-paraStyle">span</span>属性我们就可以自由地组合布局。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-row>
      <v-col :span="24"><div class="grid-content bg-purple-dark"></div></v-col>
    </v-row>
    <v-row>
      <v-col :span="12"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="12"><div class="grid-content bg-purple-light"></div></v-col>
    </v-row>
    <v-row>
      <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="8"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
    </v-row>
    <v-row>
      <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
    </v-row>

    <style>
      .v-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .v-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #7aa9bf;
      }
      .bg-purple {
        background: #badce6;
      }
      .bg-purple-light {
        background: #cce9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    </style>  
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>

  <div slot="description">
    <header class="v-description-title">
      分栏间隔
    </header>
    分栏之间存在间隔。
  </div>

  <div slot="showComponents" class="v-show-component">
    <grid-v-grid-gutter/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      Row 组件提供<span class="v-paraStyle">gutter</span>属性来指定每一栏之间的间隔，默认间隔为 0。 
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-row :gutter="20">
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    
    <style>
      .v-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .v-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #7aa9bf;
      }
      .bg-purple {
        background: #badce6;
      }
      .bg-purple-light {
        background: #cce9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    </style>  
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>

  <div slot="description">
    <header class="v-description-title">
      混合布局
    </header>
    通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
  </div>

  <div slot="showComponents" class="v-show-component">
    <grid-v-grid-mix/>
  </div>

  <section slot="paraDescription" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      属性gutter和属性span组合可以实现不同的布局。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-row :gutter="20">
      <v-col :span="16"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row :gutter="20">
      <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row :gutter="20">
      <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="16"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    
    <style>
      .v-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .v-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #7aa9bf;
      }
      .bg-purple {
        background: #badce6;
      }
      .bg-purple-light {
        background: #cce9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    </style>  
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>

  <div slot="description">
    <header class="v-description-title">
      分栏偏移
    </header>
    支持偏移指定的比例。
  </div>

  <div slot="showComponents" class="v-show-component">
    <grid-v-grid-offset/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      通过 col 组件提供<span class="v-paraStyle">offset</span>属性可以指定分栏偏移的比例。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-row :gutter="20">
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row :gutter="20">
      <v-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row :gutter="20">
      <v-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    
    <style>
      .v-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .v-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #7aa9bf;
      }
      .bg-purple {
        background: #badce6;
      }
      .bg-purple-light {
        background: #cce9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    </style>  
  </highlight-code>
</common-code-format>
</ClientOnly>

<ClientOnly>
<common-code-format>

  <div slot="description">
    <header class="v-description-title">
      对齐方式
    </header>
    通过 flex 布局来对分栏进行灵活的对齐。
  </div>

  <div slot="showComponents" class="v-show-component">
    <grid-v-grid-flex/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
      通过<span class="v-paraStyle">justify</span>属性来指定<span class="v-paraStyle">end</span>，<span class="v-paraStyle">center</span>，<span class="v-paraStyle">between</span>，<span class="v-paraStyle">around</span>其中的值来定义子元素的排版方式，默认值为<span class="v-paraStyle">start</span>。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-row class="row-bg">
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row class="row-bg" justify="center">
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row class="row-bg" justify="end">
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row class="row-bg" justify="between">
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    <v-row class="row-bg" justify="around">
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
      <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
    </v-row>
    
    <style>
      .v-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .v-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #7aa9bf;
      }
      .bg-purple {
        background: #badce6;
      }
      .bg-purple-light {
        background: #cce9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    </style>  
  </highlight-code>
</common-code-format>
</ClientOnly>

### Row Attributes

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
          <td class="formBodyCol">gutter</td>
          <td class="formBodyCol">栅格间隔</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">justify</td>
          <td class="formBodyCol">flex 布局下的水平排列方式</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">end / center / around / between</td>
          <td class="formBodyCol">start</td>
      </tr>
  </tbody>
</common-create-form>
</ClientOnly>

### Col Attributes

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
          <td class="formBodyCol">span</td>
          <td class="formBodyCol">栅格占据的列数</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">24</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">offset</td>
          <td class="formBodyCol">栅格左侧的间隔格数</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">0</td>
      </tr>
  </tbody>
</common-create-form>
</ClientOnly>
