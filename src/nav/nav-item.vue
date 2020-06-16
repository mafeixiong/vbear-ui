<template>
    <div class="v-nav-item" :class="{selected}" @click="onClick">
        <slot></slot>
        {{selected}}
    </div>
</template>

<script>
  export default {
    name: 'vNavItem',
    inject: ['nav'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: false
      }
    },
    created () {
      this.nav.addItem(this)
    },
    methods: {
      onClick() {
        console.log(this.name)
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
.v-nav-item{
    margin: 10px 20px;
    &.selected{
        background: red;
    }
}
</style>