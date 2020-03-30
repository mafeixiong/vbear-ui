<template>
    <div>
        <v-row>
            <v-button icon-position="right" icon="v-down">默认按钮</v-button>
            <v-button type="primary" icon="v-download" >主要按钮</v-button>
            <v-button icon-position="right" type="success" icon="v-error" >成功按钮</v-button>
            <v-button icon-position="right" type="info" icon="v-right" >信息按钮</v-button>
            <v-button icon-position="right" type="warning" icon="v-settings">警告按钮</v-button>
            <v-button type="danger" icon="v-thumbs-up">危险按钮</v-button>
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