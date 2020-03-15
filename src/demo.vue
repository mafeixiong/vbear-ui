<template>
    <div>
        <!--<p>{{selected}}</p>-->
        <v-cascader :source.sync="source"
                    popover-height="200px"
                    :load-data="loadData"
                    :selected.sync="selected"
                    @update:source="onUpdateSource"
                    @update:selected="onUpdateSelected"></v-cascader>
        <!--test-->
        <!--<v-icon icon="v-loading" class-name="reset"></v-icon>-->
    </div>
</template>

<script>
  import './icon/index'
  import Button from './button'
  import Cascader from './cascader'
  import db from './db'

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
      }, 300)
    })
  }

  export default {
    name: 'demo',
    components: {
      'v-button': Button,
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