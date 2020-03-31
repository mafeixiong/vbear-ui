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
        <div style="margin-top: 10px">
            <v-button>测试</v-button>
            <v-button type="primary">主要按钮</v-button>
            <v-button type="success">成功按钮</v-button>
            <v-button type="info">信息按钮</v-button>
            <v-button type="warning">警告按钮</v-button>
            <v-button type="danger">危险按钮</v-button>
        </div>

        <div style="margin-top: 10px">
            <v-button plain>测试</v-button>
            <v-button plain type="primary">主要按钮</v-button>
            <v-button plain type="success">成功按钮</v-button>
            <v-button plain type="info">信息按钮</v-button>
            <v-button plain type="warning">警告按钮</v-button>
            <v-button plain type="danger">危险按钮</v-button>
        </div>
        <v-popover position="right">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <v-button>点我</v-button>
        </v-popover>
    </div>
</template>

<script>
  import './icon/index'
  import Button from './button/button'
  import Input from './input/input'
  import vRow from './grid/row'
  import vPopover from './popover/popover'

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
    }
  }
</script>

<style scoped>

</style>