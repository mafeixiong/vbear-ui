<template>
    <div>
        <v-row>
            <v-layout>
                <v-header>Header</v-header>
                <v-content>Content</v-content>
                <v-footer>Footer</v-footer>
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
                <v-header>Header</v-header>
                <v-layout>
                    <v-content>Content</v-content>
                    <v-sider>Sider</v-sider>
                </v-layout>
                <v-footer>Footer</v-footer>
            </v-layout>
        </v-row>
        <v-row>
            <v-layout>
                <v-sider>Sider</v-sider>
                <v-layout>
                    <v-header>Header</v-header>
                    <v-content>Content</v-content>
                    <v-footer>Footer</v-footer>
                </v-layout>
            </v-layout>
        </v-row>
    </div>
</template>

<script>
  import vRow from '../../../../src/grid/row'
  import vContent from '../../../../src/layout/content'
  import vFooter from '../../../../src/layout/footer'
  import vHeader from '../../../../src/layout/header'
  import vSider from '../../../../src/layout/sider'
  import vLayout from '../../../../src/layout/layout'

  export default {
    components: {
      vRow,
      vSider,
      vContent,
      vFooter,
      vHeader,
      vLayout,
    },
  }
</script>
<style scoped>
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