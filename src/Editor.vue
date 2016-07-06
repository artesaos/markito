<template lang="jade">
  h2 Write some markdown:
  textarea(v-model="editor", cols="100", rows="30")
  br
  h3 And get fresh html:
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

<style></style>
