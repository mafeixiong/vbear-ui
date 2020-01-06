import Toast from './toast'

export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message) {
            console.log(message)
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            console.log(toast)
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}