<template>
    <div>
        <v-row>
            <v-popover position="top">
                <template slot="content">
                    <div>顶部内容</div>
                </template>
                <v-button>click 激活</v-button>
            </v-popover>
            <v-popover position="bottom">
                <template slot="content">
                    <div>底部内容</div>
                </template>
                <v-button>click 激活</v-button>
            </v-popover>
            <v-popover position="left">
                <template slot="content">
                    <div>左边内容</div>
                </template>
                <v-button>click 激活</v-button>
            </v-popover>
            <v-popover position="right">
                <template slot="content">
                    <div>右边内容</div>
                </template>
                <v-button>click 激活</v-button>
            </v-popover>
        </v-row>

        <v-row>
            <v-popover trigger="hover">
                <template slot="content">
                    <div>顶部内容</div>
                </template>
                <v-button type="primary">hover 激活</v-button>
            </v-popover>
            <v-popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>底部内容</div>
                </template>
                <v-button type="primary">hover 激活</v-button>
            </v-popover>
            <v-popover position="left" trigger="hover">
                <template slot="content">
                    <div>左边内容</div>
                </template>
                <v-button type="primary">hover 激活</v-button>
            </v-popover>
            <v-popover position="right" trigger="hover">
                <template slot="content">
                    <div>右边内容</div>
                </template>
                <v-button type="primary">hover 激活</v-button>
            </v-popover>
        </v-row>


    </div>
</template>

<script>
  import vRow from '../../../../src/grid/row'
  import vPopover from '../../../../src/popover/popover'
  import vButton from '../../../../src/button/button'

  export default {
    components: {
      vRow,
      vPopover,
      vButton,
    },
  }
</script>

<style scoped>
    .v-row {
        margin: 20px 0;
    }

    .v-popover {
        margin-right: 10px;
    }
</style>