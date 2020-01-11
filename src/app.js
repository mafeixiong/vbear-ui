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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
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
Vue.component('v-tabs', Tabs)
Vue.component('v-tabs-head', TabsHead)
Vue.component('v-tabs-body', TabsBody)
Vue.component('v-tabs-item', TabsItem)
Vue.component('v-tabs-pane', TabsPane)
Vue.component('v-popover', Popover)
new Vue({
    el: '#app',
    data: {
        loading: false,
        message: "双向绑定",
        selectedTab: "news"
    },
    mounted() {

    },
    methods: {
        yyy() {
            console.log('yyy')
        },
        changeEvent(evn) {
            console.log(evn)
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            console.log(position)
            this.$toast('阿克苏京东卡健身打卡就是贷记卡接受的阿克苏京东卡健身打卡就是贷记卡接受的阿克苏京东' +
                '卡健身打卡就是贷记卡接受的阿克苏京东卡健身打卡就是贷记卡接受的阿克苏京东卡健身打卡就是贷记卡接受的阿' +
                '克苏京东卡健身打卡就是贷记卡接受的阿克苏京东卡健身打卡就是贷记卡接受的阿克苏京东卡健身打卡就是贷记卡接受的', {
                position,
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback (vm) {
                        console.log('他说已经充值智商了')
                    }
                },
            })
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