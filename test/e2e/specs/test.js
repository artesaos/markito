module.exports = {
  'Markito e2e tests': (browser) => {
    browser
    .url('http://localhost:8080')
      .assert.elementPresent('textarea')
      .setValue('textarea', '# Markdown')
      .assert.elementPresent('#rendered h1')
      .assert.containsText('#rendered h1', 'Markdown')
      .end()
  }
}
