<template>
    <div class="cascaderItem" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="item in items" @click="onClickLabel(item)">
                <span class="name">{{item.name}}</span>
                <icon class="icon" v-if="rightArrowVisible(item)" icon="right"></icon>
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
            },
            loadData: {
                type: Function
            }
        },
        data() {
            return {
                leftSelected: null
            }
        },
        computed: {
            rightItems() {
                if(this.selected[this.level]) {
                    let selected = this.items.filter(item => item.name == this.selected[this.level].name)
                    if (selected && selected[0].children && selected[0].children.length > 0) {
                        return selected[0].children
                    }
                }
            },

        },
        methods: {
            onClickLabel(item) {
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                copy.splice(this.level + 1)
                this.$emit('update:selected', copy)
            },
            rightArrowVisible (item) {
                return this.loadData ? !item.isLeaf : item.children
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
            overflow: auto;
        }
        .right {
            height: 100%;
            border-left: 1px solid $border-color-light;
        }
        .label {
            padding: .5em 1em;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover {
                background: $grey;
            }
            > .name {
                margin-right: 1em;
                user-select: none;
            }
            .icon {
                margin-left: auto;
                transform: scale(0.5);
            }
        }
    }
</style>