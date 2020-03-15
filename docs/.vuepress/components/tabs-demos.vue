<template>
    <div>
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
    </div>
</template>
<script>
    import Tabs from '../../../src/tabs.vue'
    import TabsHead from '../../../src/tabs-head.vue'
    import TabsBody from '../../../src/tabs-body.vue'
    import TabsItem from '../../../src/tabs-item.vue'
    import TabsPane from '../../../src/tabs-pane.vue'
    export default {
        components: {
            'v-tabs': Tabs,
            'v-tabs-head': TabsHead,
            'v-tabs-body': TabsBody,
            'v-tabs-item': TabsItem,
            'v-tabs-pane': TabsPane
        },
        data() {
            return {
                selectedTab: "news"
            }
        }
    }
</script>