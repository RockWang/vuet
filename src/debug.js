import { _Vue } from './vuet-static'

const NAME = '__name__'

export default {
  error (msg) {
    throw new Error(`[${NAME}] ${msg}`)
  },
  warn (msg) {
    if (process.env.NODE_ENV !== 'production') {
      typeof console !== 'undefined' && console.warn(`[${NAME}] ${msg}`)
    }
  },
  assertModule (vuet, name) {
    if (name in vuet.modules) {
      return
    }
    this.error(`The '${name}' module does not exist`)
  },
  assertVue () {
    if (!_Vue) {
      this.error('must call Vue.use(Vuet) before creating a store instance')
    }
  }
  // assertPromise () {
  //   if (typeof Promise === 'undefined') {
  //     this.error('Vuet requires a Promise polyfill in this browser')
  //   }
  // }
}
