<template>
    <div>
        <v-input v-model="message" show-password></v-input>
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
        message: '123456',
      }
    },
  }
</script>

<style scoped>

</style>