<template>
    <div>
        <v-row>
            <v-input v-model="message"></v-input>
        </v-row>
        <v-row>
            <v-input v-model="message" :show-password="flag"></v-input>
        </v-row>
        <v-row>
            <v-input v-model="text" :autosize="flag" clear type="textarea"></v-input>
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
        <v-row>
            <v-input v-model="clearVal" @input="handleInput" clear></v-input>
        </v-row>
        <v-button @click="xxx">按钮</v-button>
        <v-collapse :selected.sync="selected">
            <v-collapse-item title="标题1" name="1">内容1</v-collapse-item>
            <v-collapse-item title="标题2" name="2">内容2</v-collapse-item>
            <v-collapse-item title="标题3" name="3">内容3</v-collapse-item>
        </v-collapse>

    </div>
</template>

<script>
  import './icon/index'
  import Button from './button/button'
  import Input from './input/input'
  import vRow from './grid/row'
  import vPopover from './popover/popover'
  import vCollapse from './collapse/collapse'
  import vCollapseItem from './collapse/collapse-item'
  import Vue from 'vue'
  import ToastPlugin from './lib/plugin'

  Vue.use(ToastPlugin)

  export default {
    name: 'demo',
    components: {
      'v-button': Button,
      'v-input': Input,
      'v-row': vRow,
      vPopover,
      vCollapse,
      vCollapseItem
    },
    data () {
      return {
        message: '这是input的数据',
        text: "textarea",
        clearVal: 'clear的数据',
        flag: true,
        selected: ['1','2']
      }
    },
    methods: {
      handleInput(event) {
        console.log(event)
      },
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