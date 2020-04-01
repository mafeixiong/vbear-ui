<template>

    <div class="v-popover" ref="popover">
        <transition name="fade">
            <div ref="contentWrapper"
                 class="v-popover-content"
                 v-if="visible"
                 :class="{[`v-position-${position}`]:true}">
                <slot name="content"></slot>
            </div>
        </transition>
        <span ref="triggerWrapper" class="v-popover-button">
            <slot></slot>
        </span>
    </div>

</template>

<script>
  export default {
    name: 'vPopover',
    data () {
      return {
        visible: false,
      }
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        },
      },
      trigger: {
        type: String,
        default: 'click',
        validator (value) {
          return ['click', 'hover'].indexOf(value) >= 0
        },
      },
    },
    mounted () {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    methods: {
      positionContent () {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {width, height, left, top} = triggerWrapper.getBoundingClientRect()
        const {height: height2} = contentWrapper.getBoundingClientRect()
        let positionValue = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX,
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX,
          },
          left: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX,
          },
          right: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX + width,
          },
        }
        contentWrapper.style.left = positionValue[this.position].left + 'px'
        contentWrapper.style.top = positionValue[this.position].top + 'px'
      },
      onClickDocument (e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) {return}
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) {return}
        this.close()
      },
      listenToDocument () {
        document.addEventListener('click', this.onClickDocument)
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          this.listenToDocument()
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      },
    },
    beforeDestroy () {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
  }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to
    {
        opacity: 0;
    }

    $boder-color: #333;
    .v-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

        .v-popover-button {
            display: inline-block;
        }
    }

    .v-popover-content {
        position: absolute;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background: white;
        padding: 16px;
        max-width: 16em; //有待解决自动检测高度
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.v-position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-bottom: none; //可以设置button:z-index:1
                border-top-color: #ebeef5;
                top: 100%;
            }

            &::after {
                border-bottom: none;
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }

        &.v-position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-top: none;
                border-bottom-color: #ebeef5;
                bottom: 100%;
            }

            &::after {
                border-top: none;
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }

        &.v-position-left {
            transform: translateX(-100%);
            margin-left: -10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-right: none;
                border-left-color: #ebeef5;
                left: 100%;
            }

            &::after {
                border-right: none;
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }

        &.v-position-right {
            margin-left: 10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
                border-left: none;
            }

            &::before {
                border-right-color: #ebeef5;
                right: 100%;
            }

            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }

    }

</style>