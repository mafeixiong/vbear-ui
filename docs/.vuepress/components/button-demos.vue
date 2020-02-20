<template>
    <div>
        <v-button>默认按钮</v-button>
        <v-button icon="loading">默认按钮</v-button>

    </div>
</template>
<script>
//    import '../../public/svg.js'
    import Button from '../../../src/button'

    export default {
        components: {
            'v-button': Button
        }
    }
</script>