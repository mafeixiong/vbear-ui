<template>
    <div>
        <v-button-group>
            <v-button type="primary" icon="v-left">上一页</v-button>
            <v-button type="primary" icon="v-right" icon-position="right">下一页</v-button>
        </v-button-group>
        <v-button-group>
            <v-button type="primary" icon="v-edit">编辑</v-button>
            <v-button type="primary" icon="v-share">分享</v-button>
            <v-button type="primary" icon="v-delete">删除</v-button>
        </v-button-group>
    </div>
</template>
<script>
  import '../../public/svg.js'
  import '../../../../src/icon/index'
  import vButtonGroup from '../../../../src/button/button-group'
  import vButton from '../../../../src/button/button'
  import vRow from '../../../../src/grid/row'

  export default {
    components: {
      'v-button': vButton,
      'v-button-group': vButtonGroup,
      'v-row': vRow,
    },
  }
</script>
<style>
    .row {
        margin: 20px 0;
    }
</style>