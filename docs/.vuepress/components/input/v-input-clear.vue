<template>
    <div>
        <v-input v-model="message" clear></v-input>
    </div>
</template>

<script>
  import '../../public/svg.js'
  import '../../../../src/icon/index'
  import vInput from '../../../../src/input/input'

  export default {
    components: {
      vInput,
    },
    data () {
      return {
        message: '内容可被清除',
      }
    },
  }
</script>

<style scoped>

</style>