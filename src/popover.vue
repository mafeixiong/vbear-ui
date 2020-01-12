<template>
    <div class="v-popover" @click.stop="togglePopover">
        <div class="content-wrapper" @click.stop v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "vPopover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            togglePopover() {
                this.visible = !this.visible
                console.log('切换popover')
                if (this.visible) {
                    let eventHandler = () => {
                        this.visible = false
                        console.log('document 隐藏 popover')
                        document.removeEventListener('click', eventHandler)
                    }
                    document.addEventListener('click', eventHandler)
                } else {
                    console.log('vm 隐藏 popover')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        }
    }
</style>