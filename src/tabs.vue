<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "vTabs",
        props: {
            selected: {
                type: String,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>