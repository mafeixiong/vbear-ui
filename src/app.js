import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from  './layout'
import Header from  './header'
import Footer from  './footer'
import Content from  './content'
import Sider from  './sider'
import Toast from  './toast'
import plugin from './plugin'
Vue.component('v-button', Button)
Vue.component('v-button-group', ButtonGroup)
Vue.component('v-icon', Icon)
Vue.component('v-input', Input)
Vue.component('v-row', Row)
Vue.component('v-col', Col)
Vue.component('v-layout', Layout)
Vue.component('v-header', Header)
Vue.component('v-footer', Footer)
Vue.component('v-content', Content)
Vue.component('v-sider', Sider)
Vue.component('v-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading: false,
        message: "双向绑定"
    },
    mounted() {

    },
    methods: {
        changeEvent(evn) {
            console.log(evn)
        },
        showToast() {
            this.$toast('hello toast')
        }
    }
})

import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)
// 单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})

    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}