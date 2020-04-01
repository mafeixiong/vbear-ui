<template>
    <div>
        <v-row>
            <v-input v-model="message" :show-password="flag"></v-input>
        </v-row>
        <v-row>
            <v-input v-model="text" :autosize="flag" type="textarea"></v-input>
        </v-row>
        <v-row>
            <v-input v-model="message" disabled></v-input>
        </v-row>
        <v-row>
            <v-input v-model="message" readonly></v-input>
        </v-row>
        <v-row>
            <v-input v-model="message" icon="v-user"></v-input>
        </v-row>
        <v-button @click="xxx">按钮</v-button>

    </div>
</template>

<script>
  import './icon/index'
  import Button from './button/button'
  import Input from './input/input'
  import vRow from './grid/row'
  import vPopover from './popover/popover'
  import Vue from 'vue'
  import ToastPlugin from './lib/plugin'

  Vue.use(ToastPlugin)

  export default {
    name: 'demo',
    components: {
      'v-button': Button,
      'v-input': Input,
      'v-row': vRow,
      vPopover
    },
    data () {
      return {
        message: '这是input的数据',
        text: "textarea",
        flag: true
      }
    },
    methods: {
      xxx () {
        console.log('111')
        console.log(this.$toast)
        this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
          position: 'middle',
          enableHtml: false,
          closeButton: {
            text: '已充值',
            callback () {
              console.log('他说已经充值智商了')
            }
          },
          autoClose: false,
          autoCloseDelay: 3
        })
      },
    },
  }
</script>

<style scoped>

</style>