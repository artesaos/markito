import Vue from 'vue'
import marked from './utils/marked'

Vue.filter('markdown', (value) => {
  return marked(value)
})
