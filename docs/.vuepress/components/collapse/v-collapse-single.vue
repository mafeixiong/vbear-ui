<template>
    <div>
        <v-collapse :selected.sync="selected" single>
            <v-collapse-item title="标题1" name="1">内容1</v-collapse-item>
            <v-collapse-item title="标题2" name="2">内容2</v-collapse-item>
            <v-collapse-item title="标题3" name="3">内容3</v-collapse-item>
        </v-collapse>
    </div>
</template>

<script>
  import vCollapse from '../../../../src/collapse/collapse'
  import vCollapseItem from '../../../../src/collapse/collapse-item'
  export default {
    components: {
      vCollapse,
      vCollapseItem
    },
    data () {
      return {
        selected: ['1'],
      }
    },
  }
</script>

<style scoped>

</style>