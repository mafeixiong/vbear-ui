<template>
    <div>
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
        selectedTab: 'tab1',
      }
    },
  }
</script>