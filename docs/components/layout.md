---
title: Layout
sidebarDepth: 2
---

<ClientOnly>
<common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      layout 布局
    </header>
    <p class="component-text">
    方便快速搭建页面的基本结构。
    </p>
  </div>

  <div slot="description">
    <header class="v-description-title">
      基础用法
    </header>
    <p class="v-description-text">
        <p> <span class="add-color">Layout</span>：布局容器，其下可嵌套 <span class="add-color">Header</span> <span class="add-color">Sider</span> <span class="add-color">Content</span> <span class="add-color">Footer</span> 或 <span class="add-color">Layout</span> 本身，可以放在任何父容器中。</p>
        <p> <span class="add-color">Header</span>：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <span class="add-color">Layout</span> 中。</p>
        <p> <span class="add-color">Content</span>：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <span class="add-color">Layout</span> 中。</p>
        <p> <span class="add-color">Footer</span>：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <span class="add-color">Layout</span> 中。</p>
        <br/>
        <Badge text="注意：" type="warning"/>
        <Badge text="以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，v-layout 的子元素只能是后四者，后四者的父元素也只能是 v-layout " type="tip"/>
    </p>
  </div>

  <div slot="showComponents" class="v-show-component">
    <layout-v-layout/>
  </div>

  <section slot="desc" class="v-code-description">
    <p class="v-paraStyle-wrapper">
        属性: 无
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <v-row>
        <v-layout>
            <v-header>header</v-header>
            <v-content>content</v-content>
            <v-footer>footer</v-footer>
        </v-layout>
    </v-row>
    <v-row>
        <v-layout>
            <v-header>Header</v-header>
            <v-layout>
                <v-sider>Sider</v-sider>
                <v-content>Content</v-content>
            </v-layout>
            <v-footer>Footer</v-footer>
        </v-layout>
    </v-row>
    <v-row>
        <v-layout>
            <v-header>header</v-header>
            <v-layout>
                <v-content>content</v-content>
                <v-sider>sider</v-sider>
            </v-layout>
            <v-footer>footer</v-footer>
        </v-layout>
    </v-row>
    <v-row>
        <v-layout>
            <v-sider>sider</v-sider>
            <v-layout>
                <v-header>header</v-header>
                <v-content>content</v-content>
                <v-footer>footer</v-footer>
            </v-layout>
        </v-layout>
    </v-row>

    <style>
        .v-row {
            margin: 20px 0;
        }
    
        .v-header, .v-footer {
            background-color: #7dbcea;
            color: #fff;
            text-align: center;
            height: 64px;
            padding: 0 50px;
            line-height: 64px;
        }
    
        .v-sider {
            background: #3ba0e9;
            color: #fff;
            min-width: 200px;
            line-height: 120px;
            text-align: center;
        }
    
        .v-layout {
            background: #108ee9;
            color: #fff;
            min-height: 120px;
            line-height: 120px;
            text-align: center;
        }
    
        .v-content {
            width: 100%;
            background: #108ee9;
            color: #fff;
            min-height: 120px;
            line-height: 120px;
        }
    </style>
  </highlight-code>
</common-code-format>
</ClientOnly>