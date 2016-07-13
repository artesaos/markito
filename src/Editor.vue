<template lang="jade">
  div#Editor
    textarea(v-model="editor")

  div#Preview
    #rendered
      | {{{ editor | markdown }}}
</template>

<script>
export default {
  data () {
    return {
      editor: ''
    }
  }
}
</script>

<style src="src/sass/app.scss" lang="scss"></style>
