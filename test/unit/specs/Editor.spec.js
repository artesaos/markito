import Vue from 'vue'
import Editor from 'src/Editor'
import 'src/filters'

describe('Editor.vue', () => {
  it('should render editor', () => {
    const vm = new Vue({
      template: '<div><editor></editor></div>',
      components: { Editor }
    }).$mount()
    expect(vm.$el.querySelector('h2').textContent).to.contain('Write some markdown:')
  })
})
