import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon.vue'
Vue.component('v-button', Button)
Vue.component('v-button-group', ButtonGroup)
Vue.component('v-icon', Icon)
new Vue({
    el: '#app',
    data: {
        loading: false
    }
})