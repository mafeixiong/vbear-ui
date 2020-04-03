<template>
    <div class="v-input">
        <div class="v-input-wrapper" v-if="type === 'text'">
            <span v-if="icon && !clear" class="icon">
                <v-icon :icon="iconName"></v-icon>
            </span>
            <input :type="currentInputType" v-model="currentValue" :disabled="disabled" :readonly="readonly"
                   ref="input" :style="icon || showPassword || clear ? 'padding-right:34px' : ''"
                   :placeholder="placeholder"
                   @change="$emit('change', $event.target.value)"
                   @input="$emit('input', $event.target.value)"
                   @focus="$emit('focus', $event.target.value)"
                   @blur="$emit('blur', $event.target.value)"
            >
            <span v-if="showPassword" class="show-password" @click="togglePassword">
                <v-icon :icon="currentPassword ? 'v-open-eyes' : 'v-close-eyes'"></v-icon>
            </span>
            <span v-if="clear" class="show-clear" @click="clearInputVal">
                <v-icon :icon="clear ? 'v-close' : ''"></v-icon>
            </span>
        </div>
        <div class="v-input-wrapper" v-if="type === 'textarea'">
            <textarea :placeholder="placeholder" cols="30" rows="2" ref="textarea"
                      :style="!autosize ? 'resize:none' : ''"
                      v-model="currentValue" :disabled="disabled" :readonly="readonly"
                      @change="$emit('change', $event.target.value)"
                      @input="$emit('input', $event.target.value)"
                      @focus="$emit('focus', $event.target.value)"
                      @blur="$emit('blur', $event.target.value)"></textarea>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vInput',
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
      },
      placeholder: {
        type: String,
        default: '请输入内容',
      },
      showPassword: {
        type: Boolean,
        default: false,
      },
      autosize: {
        type: Boolean,
        default: true,
      },
      type: {
        type: String,
        default: 'text',
        validator (value) {
          return ['text', 'textarea'].indexOf(value) > -1
        },
      },
      clear: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        currentValue: this.value,
        currentInputType: this.type,
        currentPassword: this.showPassword,
      }
    },
    computed: {
      iconName () {
        return this.icon
      },
    },
    mounted () {
      this.showPassword && this.togglePassword()
    },
    methods: {
      togglePassword () {
        if (this.currentInputType === 'password') {
          this.currentInputType = 'text'
          this.currentPassword = true
        } else {
          this.currentInputType = 'password'
          this.currentPassword = false
        }
      },
      clearInputVal () {
        this.currentValue = ''
        this.$refs.input && this.$refs.input.focus()
        this.$refs.textarea && this.$refs.textarea.focus()
      },
    },
  }
</script>

<style lang="scss" scoped>
    @import "../styles/var";

    .v-input-wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        position: relative;

        .icon {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        }

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: 38px;
            line-height: 38px;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 15px;
            /*cursor: pointer;*/
            font-size: inherit;
            color: $color-text-primary;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            outline: none;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus:not([readonly]) {
                border-color: $border-color-focus;
            }

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
                background-color: #f5f7fa;
            }
        }

        > textarea {
            border: 1px solid $border-color;
            outline: none;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            padding: 5px 15px;
            font-size: 14px;
            border-radius: 4px;
            min-height: 30px;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                border-color: $border-color-focus;
            }
        }

        .show-password,
        .show-clear {
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
</style>