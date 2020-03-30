<template>
    <div>
        <v-row>
            <v-button>默认按钮</v-button>
            <v-button type="primary">主要按钮</v-button>
            <v-button type="success">成功按钮</v-button>
            <v-button type="info">信息按钮</v-button>
            <v-button type="warning">警告按钮</v-button>
            <v-button type="danger">危险按钮</v-button>
        </v-row>
        <v-row>
            <v-button round plain>默认按钮</v-button>
            <v-button type="primary" round plain>主要按钮</v-button>
            <v-button type="success" round plain>成功按钮</v-button>
            <v-button type="info" round plain>信息按钮</v-button>
            <v-button type="warning" round plain>警告按钮</v-button>
            <v-button type="danger" round plain>危险按钮</v-button>
        </v-row>
        <v-row>
            <v-button round>默认按钮</v-button>
            <v-button type="primary" round>主要按钮</v-button>
            <v-button type="success" round>成功按钮</v-button>
            <v-button type="info" round>信息按钮</v-button>
            <v-button type="warning" round>警告按钮</v-button>
            <v-button type="danger" round>危险按钮</v-button>
        </v-row>
        <v-row>
            <v-button circle icon="v-down">默认按钮</v-button>
            <v-button type="primary" icon="v-download" circle>主要按钮</v-button>
            <v-button type="success" icon="v-error" circle>成功按钮</v-button>
            <v-button type="info" icon="v-right" circle>信息按钮</v-button>
            <v-button type="warning" icon="v-settings" circle>警告按钮</v-button>
            <v-button type="danger" icon="v-thumbs-up" circle>危险按钮</v-button>
        </v-row>
    </div>
</template>
<script>
  import '../../public/svg.js'
  import '../../../../src/icon/index'
  import vButton from '../../../../src/button/button'
  import vRow from '../../../../src/grid/row'

  export default {
    components: {
      'v-button': vButton,
      'v-row': vRow,
    },
  }
</script>
<style>
    .row {
        margin: 20px 0;
    }
</style>