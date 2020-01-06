<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "vLayout",
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === "vSider") {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        height: 100vh;
        display: flex;
        flex-direction: column;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>