<template>
    <div class="v-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "vCollapse"
    }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .v-collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>