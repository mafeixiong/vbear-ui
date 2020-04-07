<template>
    <div>
        <v-input v-model="message" type="textarea"></v-input>
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
        message: '请输入内容',
      }
    },
  }
</script>

<style scoped>

</style>