<template>
    <div class="tabs-item" @click="toggleTab" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "vTabsItem",
        inject: ['eventBus'],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                active: false,
            }
        },
        created () {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name;
                })
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled

                }
            }
        },
        methods: {
            toggleTab() {
                if (this.disabled) return
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)
            }
        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        color: #303133;
        margin-right: 30px;
        transition: color .3s cubic-bezier(.645,.045,.355,1);
        .v-icon {
            margin-right: 8px;
        }
        &.active {
            color: #409eff;
            font-weight: 500;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>