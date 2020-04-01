<template>
    <div class="v-toast">
        <v-button @click="showToast('top')">上边显示</v-button>
        <v-button @click="showToast('middle')">中间显示</v-button>
        <v-button @click="showToast('bottom')">下边显示</v-button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import ToastPlugin from '../../../../src/lib/plugin'
  import vButton from '../../../../src/button/button'

  Vue.use(ToastPlugin)

  export default {
    components: {vButton},
    methods: {
      showToast (position) {
        this.$toast('这是一条消息提示', {
          position,
          autoCloseDelay: 3,
        })
      },
    },
  }
</script>
<style scoped>
    .v-toast {
        margin: 20px 0;
    }
</style>