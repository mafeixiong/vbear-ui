<template>
    <div class="v-collapse">
        <slot></slot>
    </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'vCollapse',
    props: {
      single: {
        type: Boolean,
        default: false,
      },
      selected: {
        type: Array,
      },
    },
    data () {
      return {
        eventBus: new Vue(),
      }
    },
    provide () {
      return {
        eventBus: this.eventBus,
      }
    },
    mounted () {
      this.eventBus.$emit('update:selected', this.selected, this.single)
      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if (this.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        this.$emit('update:selected', selectedCopy)
        this.eventBus.$emit('update:selected', selectedCopy)
      })
      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = this.selected.indexOf(name)
        selectedCopy.splice(index, 1)
        this.$emit('update:selected', selectedCopy)
        this.eventBus.$emit('update:selected', selectedCopy)
      })
    },
  }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .v-collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>