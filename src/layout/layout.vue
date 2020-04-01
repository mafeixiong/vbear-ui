<template>
    <div class="v-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'vLayout',
    data () {
      return {
        layoutClass: {
          hasSider: false,
        },
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'vSider') {
          this.layoutClass.hasSider = true
        }
      })
    },
  }
</script>

<style lang="scss" scoped>
    .v-layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        &.hasSider {
            flex-direction: row;
        }
    }
</style>