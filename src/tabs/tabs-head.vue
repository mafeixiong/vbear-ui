<template>
    <div class="tabs-head" :class="{ 'action-class' : isAction }">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vTabsHead',
    inject: ['eventBus'],
    data () {
      return {
        isAction: false,
      }
    },
    mounted: function () {
      this.$slots.actions ? this.isAction = true : this.isAction = false
      this.eventBus.$on('update:selected', (item, vm) => {
        let {width} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${vm.$el.offsetLeft}px`
      })
    },

  }
</script>

<style lang="scss" type="text/scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    $border-color: #ddd;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;

        > .line {
            position: absolute;
            bottom: -1px;
            border-bottom: 2px solid #409eff;
            transition: all 350ms;
        }

        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1em 0;
        }
    }

    .action-class {
        padding-bottom: 4px;
    }
</style>