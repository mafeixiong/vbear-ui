<template>
    <div>
        <v-icon
                v-for="(item, index) of iconList"
                :icon="`v-${item}`" :key="index"></v-icon>
    </div>
</template>

<script>
  import '../public/svg.js'
  import '../../../src/icon/index'

  export default {
    name: 'icon',
    data () {
      return {
        iconList: ['loading', 'loading1', 'error', 'settings', 'thumbs-up', 'download', 'up', 'right'],
      }
    },
  }
</script>

<style scoped>

</style>