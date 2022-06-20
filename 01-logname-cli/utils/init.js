const checkNode = require('cli-check-node')
const unhandled = require('cli-handle-unhandled')
const welcome = require('cli-welcome')
const boxen = require('boxen')
const pkg = require('../package.json')

module.exports = (minimal, clear) => {
  unhandled()

  !minimal && welcome({
    title: pkg.name,
    tagLine: `Nice to meet you`,
    description: pkg.description,
    version: pkg.version,
    bgColor: '#fadc00',
    color: '#000000',
    bold: true,
    clear,
  })
  minimal && console.log(
      boxen(
        'Luka Minimal Info',
        { padding: 1, borderStyle: 'classic', float: 'center' }
      )
    )

  checkNode(10)
}