<template lang="jade">
    textarea#codemirror-editor
</template>

<script>
    /* eslint-disable */
    import CodeMirror from 'codemirror'
    /* eslint-enable */

    import 'codemirror/lib/codemirror.js'
    import 'codemirror/lib/codemirror.css'

    // Codemirror language mode
    import 'codemirror/mode/markdown/markdown'

    // Codemirror Theme
    import 'codemirror/theme/material.css'
    
    export default {
      props: ['code'],
      ready () {
        var vm = this
        var cm = CodeMirror.fromTextArea(document.getElementById('codemirror-editor'), {
          mode: 'markdown',
          highlightFormatting: true,
          lineNumbers: true,
          theme: 'material'
        })

        cm.setValue(vm.code)

        cm.on('change', function () {
          vm.code = cm.getValue()
          vm.$dispatch('code', cm.getValue())
        })
      }
    }
</script>

<style></style>