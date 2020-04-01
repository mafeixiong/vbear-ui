import Toast from '../toast/toast'
let zIndex = 2222
let currentToast = null

export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}


function createToast({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    toast.$el.style.zIndex = ++zIndex
    document.body.appendChild(toast.$el)
    return toast
}