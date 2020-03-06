<template>
    <div class="cascaderItem" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="item in items" @click="onClickLabel(item)">
                {{item.name}}
                <icon class="icon" v-if="item.children" icon="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <v-cascader-item :items="rightItems" :selected="selected" :height="height"
                             :level="level + 1"
                             @update:selected="onUpdateSelected"></v-cascader-item>
        </div>

    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: "vCascaderItem",
        components: {Icon},
        props: {
            items: {
                type: Array
            },
            height: {
                type: String
            },
            selected: {
                type: Array,
                default: []
            },
            level: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                leftSelected: null
            }
        },
        computed: {
            rightItems() {
                let currentSelected = this.selected[this.level]
                if (currentSelected && currentSelected.children) {
                    return currentSelected.children
                } else {
                    return null
                }
            }
        },
        methods: {
            onClickLabel(item) {
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                copy.splice(this.level + 1)
                this.$emit('update:selected', copy)
            },
            onUpdateSelected(item) {
                this.$emit('update:selected', item)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascaderItem {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100px;
        .left {
            height: 100%;
            padding: .3em 0;
        }
        .right {
            height: 100%;
            border-left: 1px solid $border-color-light;
        }
        .label {
            padding: .3em 1em;
            display: flex;
            align-items: center;
            .icon {
                margin-left: 1em;
                transform: scale(0.5);
            }
        }
    }
</style>