<template>
    <div>
        <!--<p>{{selected}}</p>-->
        <!--<v-cascader :source.sync="source"-->
                    <!--popover-height="200px"-->
                    <!--:load-data="loadData"-->
                    <!--:selected.sync="selected"-->
                    <!--@update:source="onUpdateSource"-->
                    <!--@update:selected="onUpdateSelected"></v-cascader>-->
        <!--test-->
        <!--<v-icon icon="v-loading" class-name="reset"></v-icon>-->
        <!--<v-button @click="showToast" type="primary" icon="v-down" icon-position="left">按钮</v-button>-->
        <!--<v-input error="错误！"></v-input>-->
        <v-button>按钮</v-button>
        <v-button type="primary" round>按钮</v-button>
        <v-button type="success" icon="v-down" circle></v-button>
        <v-button type="info">按钮</v-button>
        <v-button type="warning">按钮</v-button>
        <v-button type="danger">按钮</v-button>

    </div>
</template>

<script>
  import './icon/index'
  import Button from './button/button'
  import Input from './input/input'
  import Cascader from './cascader/cascader'
  import db from './tests/fixtures/db'

  function ajax (parentId = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = db.filter((item) => item.parent_id == parentId)
        result.forEach(node => {
          if (db.filter(item => item.parent_id === node.id).length > 0) {
            node.isLeaf = false
          } else {
            node.isLeaf = true
          }
        })
        resolve(result)
      }, 1000)
    })
  }

  export default {
    name: 'demo',
    components: {
      'v-button': Button,
      'v-input': Input,
      'v-cascader': Cascader,
    },
    data () {
      return {
        selected: [],
        source: [],
      }
    },
    created () {
      ajax(0).then(result => {
//        console.log(result)
        this.source = result
      })
    },
    methods: {
      loadData ({id}, updateSource) {
        ajax(id).then(result => {
          updateSource(result) // 回调:把别人传给我的函数调用一下
        })
      },
      showToast () {
        this.$toast('这是toast提醒', {
//          position,
          enableHtml: false,
          closeButton: {
            text: '确定',
            callback (vm) {
              console.log('他说已经充值智商了')
            },
          },
        })
      },
      onUpdateSource (item) {
//                console.log('onUpdateSource')
//                console.log(item)
      },
      onUpdateSelected (item) {
//                console.log('onUpdateSelected')
//                console.log(item)

      },
    },
  }
</script>

<style scoped>

</style>