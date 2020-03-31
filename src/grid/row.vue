<template>
    <div class="v-row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'vRow',
    props: {
      gutter: {
        type: [Number, String],
      },
      justify: {
        type: [String],
        validator (value) {
          return ['end', 'center', 'around', 'between'].indexOf(value) > -1
        },
      },
    },
    computed: {
      rowStyle () {
        let {gutter} = this
        return {
          marginLeft: -gutter / 2 + 'px',
          marginRight: -gutter / 2 + 'px',
        }
      },
      rowClass () {
        let {justify} = this
        return [justify && `v-row-${justify}`]
      },
    },
    mounted () {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
  }
</script>
<style scoped lang="scss">
    .v-row{
        display: flex;
        &.v-row-end{
            justify-content: flex-end;
        }
        &.v-row-center{
            justify-content: center;
        }
        &.v-row-around{
            justify-content: space-around;
        }
        &.v-row-between{
            justify-content: space-between;
        }
    }
</style>