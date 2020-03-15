<template>
    <div>
        <v-button>默认按钮</v-button>
        <v-button icon="v-loading1">默认按钮</v-button>
    </div>
</template>
<script>
  import '../public/svg.js'
  import '../../../src/icon/index'
  import Button from '../../../src/button/button'

  export default {
    components: {
      'v-button': Button,
    },
  }
</script>