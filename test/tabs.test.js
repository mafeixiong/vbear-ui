const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('v-tabs', Tabs)
Vue.component('v-tabs-head', TabsHead)
Vue.component('v-tabs-body', TabsBody)
Vue.component('v-tabs-item', TabsItem)
Vue.component('v-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接受 selected 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
          <v-tabs selected="books">
            <v-tabs-head>
                <v-tabs-item name="news">新闻</v-tabs-item>
                <v-tabs-item name="books">书籍</v-tabs-item>
                <v-tabs-item name="sports">运动</v-tabs-item>
            </v-tabs-head>
            <v-tabs-body>
                <v-tabs-pane name="books">书籍</v-tabs-pane>
                <v-tabs-pane name="sports">运动</v-tabs-pane>
                <v-tabs-pane name="news">新闻</v-tabs-pane>
            </v-tabs-body>
           </v-tabs>
         `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="books"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

})