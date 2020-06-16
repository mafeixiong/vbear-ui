<template>
    <div class="v-nav-sub">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="v-nav-sub-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vNavSub',
    data() {
      return {
        open: false
      }
    },
    methods: {
      onClick() {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="scss" scoped>
.v-nav-sub {
    position: relative;
    > span {
        padding: 10px 20px;
        display: block;
    }
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid black;
        white-space: nowrap;
    }
}
</style>