<template>
    <div>
        <table class="v-table" :class="{striped, bordered, compact}">
            <thead>
            <tr>
                <th width="50"><input type="checkbox" @change="onChangeAllItems" ref="allChecked"/></th>
                <th v-if="numberVisible">序号</th>
                <th v-for="column in columns">
                    {{column.text}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) of data">
                <th><input type="checkbox"
                           @change="onChangeItems(item, index, $event)"
                           :checked="inSelectedItems(item)"/></th>
                <td width="50" v-if="numberVisible">{{index+1}}</td>
                <template v-for="column in columns">
                    <td>{{item[column.field]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
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
    }
</style>