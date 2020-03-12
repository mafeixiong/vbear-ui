<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <v-icon v-if="icon" class="icon" :icon="icon"></v-icon>
        <v-icon v-if="loading" class="loading" icon="v-loading"></v-icon>
        <div class="content">
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
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        },
      },
    },
  }
</script>
<style lang="scss">
    @import "var";

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
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        > .g-button-content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        &.icon-right {
            > .g-button-content {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>