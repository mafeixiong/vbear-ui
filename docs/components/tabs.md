---
title: Tabs
sidebarDepth: 2
---
# Tabs 选项卡

使用方法

<ClientOnly>
  <tabs-v-tabs/>
</ClientOnly>

```html
<v-tabs :selected.sync="selectedTab">
    <v-tabs-head>
        <template slot="actions">
            <v-button>设置</v-button>
        </template>
        <v-tabs-item name="news">
            <v-icon name="download"></v-icon>
            新闻
        </v-tabs-item>
        <v-tabs-item name="books" disabled>书籍</v-tabs-item>
        <v-tabs-item name="sports">运动</v-tabs-item>
    </v-tabs-head>
    <v-tabs-body>
        <v-tabs-pane name="books">书籍</v-tabs-pane>
        <v-tabs-pane name="sports">运动</v-tabs-pane>
        <v-tabs-pane name="news">新闻</v-tabs-pane>
    </v-tabs-body>
</v-tabs>
```