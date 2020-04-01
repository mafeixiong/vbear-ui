<template>
    <div class="code-format">
        <div class="v-all-wrapper">
            <div class="component-wrapper">

                <div class="v-component-wrapper">
                    <slot name="componentNameTitle"></slot>
                </div>

                <div class="v-description-wrapper">
                    <slot name="description"></slot>
                </div>

                <section class="v-border-wrapper">

                    <div class="v-show-component-wrapper">
                        <slot name="showComponents"></slot>
                    </div>

                    <div v-if="isShow" class="v-code-description-wrapper">
                        <div class="v-show-code-wrapper">
                            <slot name="desc"></slot>
                        </div>
                        <div class="v-code-wrapper">
                            <slot name="showCode"></slot>
                        </div>
                    </div>
                    <div class="vue-v-button" :style="isShow ? 'border-top:1px solid #ebebeb;' : ''"  @click="handleToggleShow">
                        <div class="vue-v-wrapper">
                            <v-icon class="vue-v-icon" v-if="!isShow" icon="v-down"></v-icon>
                            <v-icon class="vue-v-icon" v-if="isShow" icon="v-up"></v-icon>
                            <span class="vue-v-buttonText">{{buttonText}}</span>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    </div>
</template>

<script>
  import '../../public/svg'
  import '../../../../src/icon/index'

  export default {
    name: 'CodeFormat',
    data () {
      return {
        isShow: false,
        buttonText: '显示代码',
      }
    },
    methods: {
      handleToggleShow () {
        // console.log(!(this.$slots.codeText))
        this.isShow = !this.isShow
        this.buttonText = this.isShow ? '隐藏代码' : '显示代码'
      },
    },
  }
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .code-format {
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
        font-size: 16px;
        color: #5e6d82;

        .v-all-wrapper {
            .component-wrapper {
                .v-component-wrapper {
                    // border: 1px solid darkgreen;
                    .component {
                        // border: 1px solid dodgerblue;
                        .component-name {
                            font-size: 1.8em;
                            color: #1f2f3d;
                            font-weight: 400;
                        }

                        .component-text {
                            font-size: 0.8em;
                            margin-top: 10px;
                        }
                    }
                }

                .v-description-wrapper {
                    // border: 1px solid green;
                    margin-top: 38px;

                    .v-description-title {
                        // border: 1px solid red;
                        font-size: 1.2em;
                        font-weight: 400;
                        color: #1f2f3d;
                        margin-bottom: 26px;
                    }

                    .v-description-text {
                        font-size: 14px;
                        // border: 1px solid rebeccapurple;
                        margin: 15px 0;
                        line-height: 2em;

                        .add-color {
                            font-size: 14px;
                            padding: 0.1em 0.2em;
                            border: 1px solid #ebebeb;
                            border-radius: 5px;
                            background: #f7f7f7; //#ebebeb
                            border-radius: 5px;
                            margin: 0 0.2em;
                        }

                        .noteColor {
                            color: #000;
                            font-weight: 600;

                        }

                        a {
                            text-decoration: none;
                        }
                    }
                }

                .v-border-wrapper {
                    margin-top: 40px;
                    border: 1px solid #ebebeb;
                    border-radius: 4px;

                    .v-show-component-wrapper {
                        border-bottom: 1px solid #ebebeb;
                        // padding: 10px 0;
                        padding-left: 12px;

                        .v-show-component {
                            // border: 1px solid red;
                            padding-bottom: 0;
                        }
                    }

                    .v-code-description-wrapper {
                        margin-top: 2px;

                        .v-show-code-wrapper {
                            border: 1px solid #ebebeb;
                            border-radius: 3px;
                            padding: 10px 0;
                            padding-left: 0.8em;
                            margin: 10px 6px;
                            font-size: 14px;
                            font-weight: 400px;

                            .v-code-description {
                                .v-paraStyle-wrapper {
                                    line-height: 2em;

                                    .v-paraStyle {
                                        font-size: 14px;
                                        padding: 0.1em 0.2em;
                                        border: 1px solid #ebebeb;
                                        border-radius: 5px;
                                        background: #f7f7f7;
                                        border-radius: 5px;
                                        margin: 0 0.2em;
                                    }
                                }
                            }
                        }

                        .v-code-wrapper {
                            // border: 1px solid red
                            line-height: 6em;
                            padding: 3px 6px;

                            .codeStyle {
                                // background: red;
                                font-size: 18px;
                                padding: 6px 0;
                                padding-left: 12px;
                                // line-height: 6em;
                            }
                        }
                    }

                    .vue-v-button {
                        // margin-top: 1px;
                        /*border-top: 1px solid #ebebeb;*/
                        /*border-radius: 3px;*/
                        width: 100%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        vertical-align: top;
                        cursor: pointer;

                        .vue-v-wrapper {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            vertical-align: top;
                            padding: 0.7em 0;

                            .vue-v-icon {
                                width: 1.2em;
                                height: 1.2em;
                                fill: #ebebeb;
                            }

                            .vue-v-buttonText {
                                font-size: 14px;
                                color: #ebebeb;
                            }
                        }

                        &:hover {
                            background-color: #f7f7f7;

                            .vue-v-buttonText {
                                color: #409eff;
                            }
                        }

                        &:hover {
                            .vue-v-icon {
                                fill: #409eff;
                            }
                        }
                    }
                }
            }
        }
    }

</style>

