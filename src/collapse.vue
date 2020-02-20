<template>
    <div class="v-collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "vCollapse",
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$emit('update:selected', this.selected)
            this.eventBus.$on('update:addSelected', (name) => {
                let selectCopy = JSON.parse(JSON.stringify(this.selected))
                if (this.single) {
                    selectCopy = [name]
                } else {
                    selectCopy.push(name)
                }
                this.eventBus.$emit('update:selected', selectCopy)
                this.$emit('update:selected', selectCopy)
                console.log(selectCopy)
            })
            this.eventBus.$on('update:removeSelected', (name) => {
                let selectCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectCopy.indexOf(name)
                selectCopy.splice(index, 1)
                this.eventBus.$emit('update:selected', selectCopy)
                this.$emit('update:selected', selectCopy)
            })
        }
    }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .v-collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>