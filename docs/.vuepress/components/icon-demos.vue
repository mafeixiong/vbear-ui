<template>
    <div>
        <ul>
            <li v-for="(item, index) of iconList" :key="index">
                <span class="icon-wrap">
                    <v-icon :icon="`v-${item}`"></v-icon>
                    <span>v-{{item}}</span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
  import '../public/svg.js'
  import '../../../src/icon/index'

  export default {
    name: 'icon',
    data () {
      return {
        iconList: ['loading', 'error', 'settings', 'thumbs-up', 'download', 'up', 'down', 'left', 'right'],
      }
    },
  }
</script>

<style lang="scss" scoped>
    ul {
        padding: 0;
        overflow: hidden;
        list-style: none;
        padding: 0 !important;
        border: 1px solid #eaeefb;
        border-radius: 4px;

        li {
            float: left;
            width: 16.66%;
            text-align: center;
            padding: 50px 0;
            color: #666;
            font-size: 13px;
            border-right: 1px solid #eee;
            border-bottom: 1px solid #eee;
            margin-right: -1px;
            margin-bottom: -1px;

            &:hover {
                color: #5cb6ff;
            }

            .v-icon {
                width: 2em;
                height: 2em;
            }

            .icon-wrap {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: all .15s linear;

                span {
                    margin-top: 10px;
                }
            }
        }
    }
</style>