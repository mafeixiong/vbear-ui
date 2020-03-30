<template>
    <button class="v-button" :disabled="disabled" :class="buttonClass" @click="$emit('click')">
        <v-icon v-if="icon" class="icon" :icon="icon"></v-icon>
        <v-icon v-if="loading" class="loading" icon="v-loading"></v-icon>
        <div v-if="!circle" class="v-button-content">
            <slot></slot>
            <span class="cov-ripple"></span>
        </div>
    </button>
</template>
<script>
  export default {
    name: 'vButton',
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default',
            'primary',
            'success',
            'info',
            'warning',
            'danger',
          ].indexOf(value) > -1
        },
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        },
      },
      round: {
        type: Boolean,
        default: false,
      },
      circle: {
        type: Boolean,
        default: false,
      },
      plain: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      buttonClass () {
        return {
          [`icon-${this.iconPosition}`]: this.iconPosition,
          [`v-${this.type}`]: this.type,
          [`v-plain`]: this.plain,
          [`v-disabled`]: this.disabled,
          'v-round': this.round,
          'v-circle': this.circle,
        }
      },
    },
  }
</script>
<style lang="scss" type="text/scss">
    @import "../styles/var";
    @import "../styles/common";

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .v-button {
        font-size: $font-size;
        height: $button-height;
        line-height: $button-height;
        /*padding: 0 2.5em;*/
        padding: 0 1em;
        border-radius: $border-radius;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        color: #fff;
        cursor: pointer;
        border: none;
        transition: .1s;

        &:focus {
            outline: none;
        }

        &.v-default {
            background: #fff;
            border: 1px solid #dcdfe6;
            color: #606266;

            &:hover {
                color: #409eff;
                border-color: #c6e2ff;
                background-color: #ecf5ff;
            }

            &:active {
                color: #3a8ee6;
                border-color: #3a8ee6;
            }
        }

        &.v-primary {
            border-color: $primary-color;
            background: $primary-color;

            &:hover {
                background: #66b1ff;
                border-color: #66b1ff;
                color: #fff;
            }

            &:active {
                background: #3a8ee6;
                border-color: #3a8ee6;
            }
        }

        &.v-success {
            border-color: $success-color;
            background: $success-color;


            &:hover {
                background: #85ce61;
                border-color: #85ce61;
                color: #fff;
            }

            &:active {
                background: #5daf34;
                border-color: #5daf34;
            }
        }

        &.v-info {
            border-color: $info-color;
            background: $info-color;

            &:hover {
                background: #a6a9ad;
                border-color: #a6a9ad;
                color: #fff;
            }

            &:active {
                background: #82848a;
                border-color: #82848a;
            }
        }

        &.v-warning {
            border-color: $warning-color;
            background: $warning-color;

            &:hover {
                background: #ebb563;
                border-color: #ebb563;
                color: #fff;
            }

            &:active {
                background: #cf9236;
                border-color: #cf9236;
            }
        }

        &.v-danger {
            border-color: $danger-color;
            background: $danger-color;


            &:hover {
                background: #f78989;
                border-color: #f78989;
                color: #fff;
            }

            &:active {
                background: #dd6161;
                border-color: #dd6161;
            }
        }


        &.v-disabled {
            cursor: not-allowed;
        }

        &.v-default[disabled] {
            color: #c0c4cc;
            background-color: #fff;
            border-color: #ebeef5;
        }

        &.v-primary[disabled] {
            color: #fff;
            background-color: #a0cfff;
            border-color: #a0cfff;
        }

        &.v-success[disabled] {
            color: #fff;
            background-color: #b3e19d;
            border-color: #b3e19d;
        }

        &.v-info[disabled] {
            color: #fff;
            background-color: #c8c9cc;
            border-color: #c8c9cc;
        }

        &.v-warning[disabled] {
            color: #fff;
            background-color: #f3d19e;
            border-color: #f3d19e;
        }

        &.v-danger[disabled] {
            color: #fff;
            background-color: #fab6b6;
            border-color: #fab6b6;
        }

        &.v-default.v-plain {
            &:hover {
                background: #fff;
                border-color: #409eff;
                color: #409eff;
            }

            &:active {
                border-color: #3a8ee6;
                color: #3a8ee6;
            }
        }

        &.v-primary.v-plain {
            color: #409eff;
            background: #ecf5ff;
            border: 1px solid #b3d8ff;

            &:hover {
                background: #409eff;
                border-color: #409eff;
                color: #fff;
            }

            &:active {
                background: #3a8ee6;
                border-color: #3a8ee6;
                color: #fff;
            }
        }

        &.v-success.v-plain {
            color: #67c23a;
            background: #f0f9eb;
            border: 1px solid #c2e7b0;

            &:hover {
                background: #67c23a;
                border-color: #67c23a;
                color: #fff;
            }

            &:active {
                background: #5daf34;
                border-color: #5daf34;
                color: #fff;
            }
        }

        &.v-info.v-plain {
            color: #909399;
            background: #f4f4f5;
            border: 1px solid #d3d4d6;

            &:hover {
                background: #909399;
                border-color: #909399;
                color: #fff;
            }

            &:active {
                background: #82848a;
                border-color: #82848a;
                color: #fff;
            }
        }

        &.v-warning.v-plain {
            color: #e6a23c;
            background: #fdf6ec;
            border: 1px solid #f5dab1;

            &:hover {
                background: #e6a23c;
                border-color: #e6a23c;
                color: #fff;
            }

            &:active {
                background: #cf9236;
                border-color: #cf9236;
                color: #fff;
            }

        }

        &.v-danger.v-plain {
            color: #f56c6c;
            background: #fef0f0;
            border: 1px solid #fbc4c4;

            &:hover {
                background: #f56c6c;
                border-color: #f56c6c;
                color: #fff;
            }

            &:active {
                background: #dd6161;
                border-color: #dd6161;
                color: #fff;
            }
        }


        .v-button:not(:first-child) {
            margin-left: 1px;
        }

        &.v-round {
            border-radius: 20px;
        }

        &.v-circle {
            border-radius: 50%;
            padding: 0 12px;
        }


        > .v-button-content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: 0.1em;
        }

        &.icon-right {
            > .v-button-content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.1em;
            }
        }

        .loading {
            animation: spin 2s infinite linear;
        }

        & + & {
            margin-left: 4px;
        }
    }
</style>