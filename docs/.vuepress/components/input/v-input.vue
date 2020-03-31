<template>
    <div>
        <v-row>
            <v-input v-model="message" :show-password="true"></v-input>
        </v-row>
        <v-row>
            <v-input v-model="message" :autosize="true" type="textarea"></v-input>
        </v-row>
        <v-row>
            <v-input v-model="message" disabled></v-input>
        </v-row>
        <v-row>
            <v-input v-model="message" readonly></v-input>
        </v-row>
        <v-row>
            <v-input v-model="message" icon="v-user"></v-input>
        </v-row>
    </div>
</template>

<script>
  import '../../public/svg.js'
  import '../../../../src/icon/index'
  import vInput from '../../../../src/input/input'
  import vRow from '../../../../src/grid/row'
  export default {
    name: 'input-demos',
    components: {
      vInput,
      vRow
    },
    data () {
      return {
        message: '请输入内容'
      }
    },
  }
</script>

<style scoped>

</style>