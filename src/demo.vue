<template>
    <div>
        <!--<p>{{selected}}</p>-->
        <v-cascader :source="source" :selected="selected" @update:selected="selected = $event" popover-height="200px"></v-cascader>
    </div>
</template>

<script>
    import Button from "./button";
    import Cascader from "./cascader";
    export default {
        name: "demo",
        components: {
            "v-button": Button,
            "v-cascader": Cascader
        },
        data() {
            return {
                selected: [],
                source: [{
                    name: '湖南',
                    children: [
                        {
                            name: '长沙',
                            children: [
                                {name: '芙蓉'},
                                {name: '天心'},
                                {name: '岳麓'},
                            ]
                        },
                    ]
                },{
                    name: '浙江',
                    children: [
                        {
                            name: '杭州',
                            children: [
                                {name: '上城'},
                                {name: '下城'},
                                {name: '江干'},
                            ]
                        },
                        {
                            name: '嘉兴',
                            children: [
                                {name: '南湖'},
                                {name: '秀洲'},
                                {name: '嘉善'},
                            ]
                        },
                    ]
                }, {
                    name: '福建',
                    children: [
                        {
                            name: '福州',
                            children: [
                                {name: '鼓楼'},
                                {name: '台江'},
                                {name: '仓山'},
                            ]
                        },
                    ]
                }]
            }
        }
    }
</script>

<style scoped>

</style>