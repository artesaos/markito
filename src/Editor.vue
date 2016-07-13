<template lang="jade">
  div#Editor
    textarea(v-model="editor", @keyup="save | debounce 200")

  div#Preview
    #rendered
      | {{{ editor | markdown }}}
</template>

<script>
import ls from 'src/utils/localStorage'

export default {
  data () {
    return {
      editor: ''
    }
  },
  ready () {
    if (ls.has('markdown-text')) {
      this.editor = ls.get('markdown-text')
    }
  },
  methods: {
    save () {
      ls.set('markdown-text', this.editor)
    }
  }
}
</script>

<style src="src/sass/app.scss" lang="scss"></style>
