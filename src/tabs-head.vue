<template>
    <div class="tabs-head">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "vTabsHead"
    }
</script>

<style lang="scss" scoped>
    .tabs-head{
        display: flex;
    }
</style>