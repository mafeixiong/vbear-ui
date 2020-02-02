<template>
    <svg class="v-icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        name: "vIcon",
        props: ['name']
    }

</script>
<style lang="scss">
    @import "var";
    .v-icon { width: 1em; height: 1em}
</style>
