<template lang="jade">
  div#Editor
    codemirror-editor(:code="editor")

  div#Preview
    #rendered
      | {{{ editor | markdown }}}
</template>

<script>
import ls from './utils/localStorage'
import CodemirrorEditor from './components/CodemirrorEditor'

export default {
  data () {
    return {
      editor: ls.get('markdown-text') || ''
    }
  },
  components: {
    CodemirrorEditor
  },
  events: {
    // This will be changed to vuex later
    code (code) {
      this.editor = code
      ls.set('markdown-text', code)
    }
  }
}
</script>

<style src="src/sass/app.scss" lang="scss"></style>
