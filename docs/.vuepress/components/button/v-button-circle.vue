<template>
    <div>
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