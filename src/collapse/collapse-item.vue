<template>
    <div class="collapseItem">
        <div class="title" @click="toggle" :data-name="name">
            {{title}}
        </div>
        <collapse-transition>
            <div class="content" ref="content" v-if="open">
                <slot></slot>
            </div>
        </collapse-transition>
    </div>
</template>

<script>
  import collapseTransition from '../lib/transition'

  export default {
    name: 'vCollapseItem',
    components: {collapseTransition},
    inject: ['eventBus'],
    props: {
      title: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    data () {
      return {
        open: false,
      }
    },
    mounted () {
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true
        } else {
          this.open = false
        }
      })
    },
    methods: {
      toggle () {
        if (this.open) {
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      },
    },

  }
</script>

<style lang="scss" type="text/scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {

        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            background: lighten($grey, 8%);
            cursor: pointer;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }

        }

        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }

        > .content {
            padding: 8px;
            will-change: height;
        }
    }
</style>