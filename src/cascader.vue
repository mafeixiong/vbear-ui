<template>
    <div class="cascader" ref="cascader">
        <div class="trigger" @click="toggle">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items :items="source" :selected="selected" :loadData="loadData" :height="popoverHeight"
                            @update:selected="onUpdateSelected"></cascader-items>
        </div>
    </div>
</template>

<script>
  import CascaderItems from './cascader-items'

  export default {
    name: 'vCascader',
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
      }
    },
    computed: {
      result () {
        return this.selected.map(item => item.name).join('/')
      },
    },
    methods: {
      onDocumentClick (e) {
        let {cascader} = this.$refs
        if (cascader.contains(e.target)) {
          return
        }
        this.close()
      },
      close () {
        this.popoverVisible = false
        this.$nextTick(() => {
          document.addEventListener('click', this.onDocumentClick)
        })
      },
      open () {
        this.popoverVisible = true
        this.$nextTick(() => {
          document.addEventListener('click', this.onDocumentClick)
        })
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
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(copy, lastItem.id)
          toUpdate.children = result
          this.$emit('update:source', copy)
        }
        if (!lastItem.isLeaf) { // 没有叶子节点再加载数据
          this.loadData(lastItem, updateSource)
        }

      },
    },
  }
</script>

<style scoped lang="scss">
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
            @extend .box-shadow;
        }
    }
</style>