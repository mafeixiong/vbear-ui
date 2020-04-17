<template>
    <div>
        {{selected}}
        <v-table :data="data" :columns="columns" expend-field="description"
                 number-visible :selected-items.sync="selected" checkable
                 :order-by.sync="orderBy" bordered :height="400"
                 @update:orderBy="loadData" :loading="loading"></v-table>
        <!--        <v-table :data="data" :columns="columns" bordered compact></v-table>-->

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
          {text: '分数', field: 'score', width: 100},
        ],
        data: [],
        orderBy: {
          score: 'desc',
        },
        selected: [],
        loading: false,
      }
    },
    created () {
      for (let i = 1; i <= 30; i++) {
        this.data.push({id: i, name: `这是mock数据${i}`, score: Math.ceil(Math.random() * 100), description: i % 2 == 0 ? `这是description${i}测试` : ''})
      }
    },
    methods: {
      loadData () {
        this.loading = true
        setTimeout(() => {
          this.data = this.data.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000)
      },
    },
  }
</script>
