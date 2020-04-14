<template>
    <div>
        {{selected}}
        <v-table :data="data" :columns="columns" number-visible :selected-items.sync="selected" bordered></v-table>
        <v-table :data="data" :columns="columns" bordered compact></v-table>

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
  import vTable from './table/table'
  import Vue from 'vue'
  import ToastPlugin from './lib/plugin'

  Vue.use(ToastPlugin)

  export default {
    name: 'demo',
    components: {
      vTable,
    },
    data () {
      return {
        columns: [
          {text: '姓名', field: 'name'},
          {text: '分数', field: 'score'},
        ],
        data: [
          {id: 1, name: '大雄', score: 100},
          {id: 2, name: '圆圆', score: 99},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
        ],
        selected: [],
      }
    },
  }
</script>

<style lang="scss" scoped>
    /deep/ .v-table {
        margin: 20px 0 !important;
    }
</style>