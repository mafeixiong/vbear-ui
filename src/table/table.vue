<template>
    <div class="v-table-wrapper">
        <table class="v-table" :class="{striped, bordered, compact}">
            <thead>
            <tr>
                <th width="50"><input type="checkbox" @change="onChangeAllItems" ref="allChecked"
                                      :checked="areAllItemsSelected"/></th>
                <th v-if="numberVisible">序号</th>
                <th v-for="column in columns" :key="column.field">
                    <div class="v-table-header">
                        {{column.text}}
                        <span v-if="column.field in orderBy" class="v-table-sorter"
                              @click="changeOrderBy(column.field)">
                            <v-icon icon="v-sort-asc" :class="{active: orderBy[column.field] === 'asc'}"></v-icon>
                            <v-icon icon="v-sort-desc" :class="{active: orderBy[column.field] === 'desc'}"></v-icon>
                        </span>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) of data" :key="item.id">
                <th><label>
                    <input type="checkbox"
                           @change="onChangeItems(item, index, $event)"
                           :checked="inSelectedItems(item)"/>
                </label></th>
                <td width="50" v-if="numberVisible">{{index+1}}</td>
                <template v-for="column in columns">
                    <td :key="column.field">{{item[column.field]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
        <div v-if="loading" class="v-table-loading">
            <v-icon icon="v-loading"></v-icon>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vTable',
    props: {
      data: {
        type: Array,
        required: true,
        validator (array) {
          return !(array.filter(item => item.id === undefined).length > 0)
        },
      },
      columns: {
        type: Array,
        required: true,
      },
      selectedItems: {
        type: Array,
        default: () => [],
      },
      orderBy: {
        type: Object,
        default: () => ({}),
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
    },
    methods: {
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

            svg {
                width: 50px;
                height: 50px;
                @include spin;
            }
        }
    }
</style>