<template>
    <div>
        <svg class="v-icon" aria-hidden="true">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
    </div>

</template>
<script>
  export default {
    name: 'vIcon',
    props: {
      icon: {
        type: String,
      },
    },
  }

</script>
<style lang="scss">
    .v-icon {
        width: 1em;
        height: 1em
    }
</style>
