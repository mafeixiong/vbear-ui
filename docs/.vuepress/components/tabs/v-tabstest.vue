<template>
    <div>
        <v-tabs :selected.sync="selectedTab">
            <v-tabs-head>
<!--                <template slot="actions">-->
<!--                    <v-button icon="v-settings">设置</v-button>-->
<!--                </template>-->
                <v-tabs-item name="news">
<!--                    <v-icon icon="v-user"></v-icon>-->
                    新闻
                </v-tabs-item>
                <v-tabs-item name="books">书籍</v-tabs-item>
                <v-tabs-item name="sports">运动</v-tabs-item>
            </v-tabs-head>
            <v-tabs-body>
                <v-tabs-pane name="books">书籍</v-tabs-pane>
                <v-tabs-pane name="sports">运动</v-tabs-pane>
                <v-tabs-pane name="news">新闻</v-tabs-pane>
            </v-tabs-body>
        </v-tabs>
    </div>
</template>
<script>
  import '../../../../src/icon'
  import Tabs from '../../../../src/tabs/tabs.vue'
  import vButton from '../../../../src/button/button'
  import TabsHead from '../../../../src/tabs/tabs-head.vue'
  import TabsBody from '../../../../src/tabs/tabs-body.vue'
  import TabsItem from '../../../../src/tabs/tabs-item.vue'
  import TabsPane from '../../../../src/tabs/tabs-pane.vue'

  export default {
    components: {
      'v-tabs': Tabs,
      'v-tabs-head': TabsHead,
      'v-tabs-body': TabsBody,
      'v-tabs-item': TabsItem,
      'v-tabs-pane': TabsPane,
      vButton,
    },
    data () {
      return {
        selectedTab: 'news',
      }
    },
  }
</script>