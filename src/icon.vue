<template>
    <svg class="v-icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>
<script>
    export default {
        props: ['name']
    }

</script>
<style lang="scss">
    .v-icon { width: 1em; height: 1em}
</style>
