<template>
    <div class="v-button-group">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'vButtonGroup',
    mounted () {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLocaleLowerCase()
        if (name !== 'button') {
          console.warn(`v-button-group组件的子元素必须是button，但你写的是${name}`)
        }
      }
    },
  }
</script>
<style lang="scss">
    @import '../styles/var';

    .v-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .v-button {
            border-radius: 0;

            &:not(:first-child) {
                margin-left: 1px;
            }

            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }

            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }

</style>