<template>
    <div>
        <v-row :gutter="20">
            <v-col :span="6">
                <div class="grid-content bg-purple"></div>
            </v-col>
            <v-col :span="6" :offset="6">
                <div class="grid-content bg-purple"></div>
            </v-col>
        </v-row>
        <v-row :gutter="20">
            <v-col :span="6" :offset="6">
                <div class="grid-content bg-purple"></div>
            </v-col>
            <v-col :span="6" :offset="6">
                <div class="grid-content bg-purple"></div>
            </v-col>
        </v-row>
        <v-row :gutter="20">
            <v-col :span="12" :offset="6">
                <div class="grid-content bg-purple"></div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
  import vCol from '../../../../src/grid/col'
  import vRow from '../../../../src/grid/row'

  export default {
    components: {
      vCol,
      vRow,
    },
  }
</script>
<style lang="scss" scoped>
    .v-row {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .v-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #7aa9bf;
    }

    .bg-purple {
        background: #badce6;
    }

    .bg-purple-light {
        background: #cce9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>