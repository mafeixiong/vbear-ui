<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true, [`v-${type}`]: true, 'v-round': round, 'v-circle': circle}" @click="$emit('click')">
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
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return value === 'primary' || value === 'success' || value === 'info' || value === 'warning' || value ===
            'danger'
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
        default: false
      },
      circle: {
        type: Boolean,
        default: false
      }
    }
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
        border:none;
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
                border-color: #85ce61
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
            }
            &:active {
                background: #dd6161;
                border-color: #dd6161;
            }
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