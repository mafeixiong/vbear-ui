<template>
    <svg :class="iconClass" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName"/>
    </svg>
</template>

<script>
  export default {
    name: 'VIcon',
    props: {
      icon: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      iconName () {
        return `#${this.icon}`
      },
      iconClass () {
        if (this.className) {
          return 'v-icon ' + this.className
        } else {
          return 'v-icon'
        }
      },
    },
  }
</script>

<style scoped>
    .v-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>