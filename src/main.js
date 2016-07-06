import Vue from 'vue'
import Editor from './Editor'
import './filters'

var markito = new Vue({
  components: { Editor }
})

markito.$mount('body')
