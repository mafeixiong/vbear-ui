<template>
    <div class="v-table-wrapper" ref="wrapper">
        <div :style="{height, overflow: 'auto'}" ref="tableWrapper">
            <table class="v-table" :class="{striped, bordered, compact}" ref="table">
                <thead>
                <tr>
                    <th v-if="expendField" :style="{width: '50px'}" class="v-table-center"></th>
                    <th v-if="checkable" :style="{width: '50px'}" class="v-table-center">
                        <input type="checkbox" @change="onChangeAllItems" ref="allChecked"
                               :checked="areAllItemsSelected"/>
                    </th>
                    <th :style="{width: '50px'}" v-if="numberVisible">序号</th>
                    <th :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.field">
                        <div class="v-table-header">
                            {{column.text}}
                            <span v-if="column.field in orderBy" class="v-table-sorter"
                                  @click="changeOrderBy(column.field)">
                            <v-icon icon="v-sort-asc" :class="{active: orderBy[column.field] === 'asc'}"></v-icon>
                            <v-icon icon="v-sort-desc" :class="{active: orderBy[column.field] === 'desc'}"></v-icon>
                        </span>
                        </div>
                    </th>
                    <th ref="actionsHeader" v-if="$scopedSlots.default"></th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item,index) of data">
                    <tr :key="item.id">
                        <td :style="{width: '50px'}" class="v-table-center">
                            <v-icon icon="v-right" v-if="expendField && item.description" :class="expendClass(item)"
                                    @click="expendItem(item.id, $event)"></v-icon>
                        </td>
                        <td v-if="checkable" :style="{width: '50px'}" class="v-table-center"><label>
                            <input type="checkbox" @change="onChangeItems(item, index, $event)"
                                   :checked="inSelectedItems(item)"/>
                        </label></td>
                        <td :style="{width: '50px'}" v-if="numberVisible">{{index+1}}</td>
                        <template v-for="column in columns">
                            <td :style="{width: column.width + 'px'}" :key="column.field">
                                <template v-if="column.render">
                                    <vnodes :field="column.render({value: item[column.field]})"></vnodes>
                                </template>
                                <template v-else>
                                    {{item[column.field]}}
                                </template>
                            </td>
                        </template>
                        <td v-if="$scopedSlots.default">
                            <div ref="actions" style="display: inline-block">
                                <slot :row="item"></slot>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="inExpendedIds(item.id)">
                        <td :colspan="columns.length + expendedCellColSpan ">
                            {{item[expendField] || '空'}}
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
        <div v-if="loading" class="v-table-loading">
            <v-icon icon="v-loading"></v-icon>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vTable',
    components: {
      vnodes: {
        functional: true,
        render: (h, context) => context.props.field
      }
    },
    props: {
      data: {
        type: Array,
        required: true,
        validator (array) {
          return !(array.filter(item => item.id === undefined).length > 0)
        },
      },
      selectedItems: {
        type: Array,
        default: () => [],
      },
      height: {
        type: Number,
      },
      orderBy: {
        type: Object,
        default: () => ({}),
      },
      expendField: {
        type: String,
      },
      checkable: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      numberVisible: {
        type: Boolean,
        default: false,
      },
      striped: {
        type: Boolean,
        default: true,
      },
      bordered: {
        type: Boolean,
        default: false,
      },
      compact: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        expendedIds: [],
        columns: []
      }
    },
    watch: {
      selectedItems () {
        if (this.selectedItems.length === this.data.length) {
          this.$refs.allChecked.indeterminate = false
        } else if (this.selectedItems.length === 0) {
          this.$refs.allChecked.indeterminate = false
        } else {
          this.$refs.allChecked.indeterminate = true
        }
      },
    },
    computed: {
      areAllItemsSelected () {
        const a = this.data.map(item => item.id).sort()
        const b = this.selectedItems.map(item => item.id).sort()
        if (a.length !== b.length) { return false }
        let equal = true
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            equal = false
            break
          }
        }
        return equal
      },
      expendedCellColSpan () {
        let colSpan = this.columns.length
        if (this.checkable) { colSpan += 1 }
        if (this.expendField) { colSpan += 1 }
        return colSpan
      },
    },
    mounted () {
      this.renderColumns()
      this.cloneTable()
      this.operationColumn()
    },
    methods: {
      expendClass(item) {
        return {
          ['v-table-expendIcon']: true,
          ['v-table-unfold']: this.expendedIds.includes(item.id),
          ['v-table-packup']: !this.expendedIds.includes(item.id)
        }
      },
      renderColumns() {
        this.columns = this.$slots.default.map(node => {
          let {text, field, width} = node.componentOptions.propsData
          let render = node.data.scopedSlots && node.data.scopedSlots.default
          return {text, field, width, render}
        })
      },
      cloneTable() {
        let cloneTable = this.$refs.table.cloneNode(false)
        this.cloneTable = cloneTable
        cloneTable.classList.add('v-table-copy')
        let tHead = this.$refs.table.children[0]
        let {height} = tHead.getBoundingClientRect()
        this.$refs.tableWrapper.style.paddingTop = height + 10 + 'px'
        this.$refs.tableWrapper.style.height = this.height - height + 'px'
        cloneTable.appendChild(tHead)
        this.$refs.wrapper.appendChild(cloneTable)
      },
      operationColumn() {
        if (this.$scopedSlots.default) {
          let div = this.$refs.actions[0]
          let {width} = div.getBoundingClientRect()
          let styles = getComputedStyle(div.parentNode)
          let paddingLeft = styles.getPropertyValue('padding-left')
          let paddingRight = styles.getPropertyValue('padding-right')
          let borderLeft = styles.getPropertyValue('border-left-width')
          let borderRight = styles.getPropertyValue('border-right-width')
          let actionsHeaderWidth = width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) +
            parseInt(borderRight) + 'px'
          this.$refs.actionsHeader.style.width = actionsHeaderWidth
          this.$refs.actions.map(div => {
            div.parentNode.style.width = actionsHeaderWidth
          })
        }
      },
      inSelectedItems (item) {
        return this.selectedItems.filter(v => v.id === item.id).length > 0
      },
      onChangeItems (item, index, e) {
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copy.push(item)
        } else {
          copy = copy.filter(v => v.id !== item.id)
        }
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems (e) {
        let selected = e.target.checked
        this.$emit('update:selectedItems', selected ? this.data : [])
      },
      changeOrderBy (field) {
        const copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[field]
        if (oldValue === 'asc') {
          copy[field] = 'desc'
        } else if (oldValue === 'desc') {
          copy[field] = false
        } else {
          copy[field] = 'asc'
        }
        this.$emit('update:orderBy', copy)
      },
      inExpendedIds (id) {
        return this.expendedIds.indexOf(id) >= 0
      },
      expendItem (id) {
        if (this.inExpendedIds(id)) {
          this.expendedIds.splice(this.expendedIds.indexOf(id), 1)
        } else {
          this.expendedIds.push(id)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
    @import "../styles/var";

    $grey: darken($grey, 10%);
    .v-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid $grey;

        &-header {
            display: flex;
            align-items: center;
        }

        &-sorter {
            display: inline-flex;
            flex-direction: column;
            margin: 0 4px;
            cursor: pointer;

            svg {
                width: 16px;
                height: 16px;
                fill: $grey;

                &.active {
                    fill: red;
                }

                &:first-child {
                    position: relative;
                    bottom: -3px;
                }

                &:nth-child(2) {
                    position: relative;
                    top: -3px;
                }
            }
        }

        td, th {
            border-bottom: 1px solid $grey;
            text-align: left;
            padding: 8px;
        }

        &.bordered {
            border: 1px solid $grey;

            td, th {
                border: 1px solid $grey;
            }
        }

        &.compact {
            td, th {
                padding: 4px;
            }
        }


        &.striped {
            tbody {
                > tr {
                    transition: .3s linear;

                    &:nth-child(odd) {
                        background: white;
                    }

                    &:nth-child(even) {
                        background: lighten($grey, 12%);
                    }

                    &:hover {
                        background: #e6f7ff;
                    }
                }
            }
        }

        &-wrapper {
            position: relative;
        }

        &-loading {
            background: rgba(255, 255, 255, 0.8);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;

            svg {
                width: 50px;
                height: 50px;
                @include spin;
            }
        }

        &-copy {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: white;
        }

        &-expendIcon {
            width: 10px;
            height: 10px;
            transition: transform .2s ease-in-out;
            cursor: pointer;
        }

        &-unfold {
            transform: rotate(90deg);
        }

        &-packup {
            transform: rotate(0deg);
        }

        & &-center {
            text-align: center;
        }
    }



</style>