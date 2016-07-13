<template lang="jade">
    textarea#codemirror-editor(v-model="code")
</template>

<script>
    /* eslint-disable */
    import CodeMirror from 'codemirror'
    /* eslint-enable */

    import 'codemirror/lib/codemirror.js'
    import 'codemirror/lib/codemirror.css'
    
    export default {
      props: ['code'],
      ready () {
        CodeMirror(document.getElementById('codemirror-editor'), {
          mode: 'markdown',
          highlightFormatting: true,
          lineNumbers: true
        })
      },
      watch: {
        code (value) {
          // This will be changed to vuex later
          this.$dispatch('code', value)
        }
      }
    }
</script>

<style></style>