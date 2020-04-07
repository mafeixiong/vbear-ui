<template>
    <div>
        <v-row>
            <v-input v-model="message1" icon="v-edit"></v-input>
            <v-input v-model="message2" icon="v-search"></v-input>
        </v-row>

    </div>
</template>

<script>
  import '../../public/svg.js'
  import '../../../../src/icon/index'
  import vInput from '../../../../src/input/input'
  import vRow from '../../../../src/grid/row'

  export default {
    components: {
      vInput,
      vRow,
    },
    data () {
      return {
        message1: '',
        message2: '',
      }
    },
  }
</script>

<style scoped>
    .v-row {
        margin: 10px 0;
    }

    .v-input {
        margin-right: 10px;
    }
</style>