<template>
    <div class="cascader" ref="cascader" v-click-outside="close">
        <div class="trigger" @click="toggle">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items :items="source" :selected="selected"
                            :loading-item="loadingItem"
                            :loadData="loadData"
                            :height="popoverHeight"
                            @update:selected="onUpdateSelected"></cascader-items>
        </div>
    </div>
</template>

<script>
  import CascaderItems from './cascader-items'
  import ClickOutside from './click-outside'

  export default {
    name: 'vCascader',
    directives: {ClickOutside},
    components: {CascaderItems},
    props: {
      source: {
        type: Array,
      },
      popoverHeight: {
        type: String,
      },
      selected: {
        type: Array,
        default: [],
      },
      loadData: {
        type: Function,
      },
    },
    data () {
      return {
        popoverVisible: false,
        loadingItem: {},
      }
    },
    computed: {
      result () {
        return this.selected.map(item => item.name).join('/')
      },
    },
    methods: {
      close () {
        this.popoverVisible = false
      },
      open () {
        this.popoverVisible = true
      },
      toggle () {
        if (this.popoverVisible) {
          this.close()
          console.log('close')
        } else {
          this.open()
          console.log('open')
        }
      },
      onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]
        let simplest = (children, id) => {
          return children.filter(item => item.id == id)[0]
        }

        let complex = (children, id) => {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren, id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) {
              return found
            }
            else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
            }
            return undefined
          }

        }
        let updateSource = (result) => {
          this.loadingItem = {}
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(copy, lastItem.id)
          toUpdate.children = result
          this.$emit('update:source', copy)
        }
        if (!lastItem.isLeaf && this.loadData) { // 没有叶子节点再加载数据
          this.loadData(lastItem, updateSource)
          this.loadingItem = lastItem
        }

      },
    },
  }
</script>

<style scoped lang="scss" type="text/scss">
    @import "var";

    .cascader {
        display: inline-block;
        position: relative;
        /*border: 1px solid red;*/
        .trigger {
            height: $input-height;
            display: inline-flex;
            align-items: center;
            padding: 0 1em;
            min-width: 10em;
            border: 1px solid $border-color;
            border-radius: $border-radius;
        }
        .popover-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            display: flex;
            margin-top: 8px;
            z-index: 1;
            @extend .box-shadow;
        }
    }
</style>