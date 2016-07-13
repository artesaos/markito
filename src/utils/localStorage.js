export default {
  has (key) {
    return Boolean(window.localStorage.getItem(key).trim())
  },

  get (key) {
    return window.localStorage.getItem(key)
  },

  set (key, value) {
    return window.localStorage.setItem(key, value)
  }
}
