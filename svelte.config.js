const preprocess = require('svelte-preprocess')

module.exports = {
  preprocess: preprocess({ sass: {} }),
  compilerOptions: {
    runes: true
  }
}