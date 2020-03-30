<template>
    <div>
        <v-row>
            <v-button disabled>默认按钮</v-button>
            <v-button disabled type="primary">主要按钮</v-button>
            <v-button disabled type="success">成功按钮</v-button>
            <v-button disabled type="info">信息按钮</v-button>
            <v-button disabled type="warning">警告按钮</v-button>
            <v-button disabled type="danger">危险按钮</v-button>
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