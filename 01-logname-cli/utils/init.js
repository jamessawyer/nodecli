const checkNode = require('cli-check-node')
const unhandled = require('cli-handle-unhandled')
const welcome = require('cli-welcome')
const pkg = require('../package.json')

module.exports = () => {
  unhandled()

  welcome({
    title: pkg.name,
    tagLine: `Nice to meet you`,
    description: pkg.description,
    version: pkg.version,
    bgColor: '#fadc00',
    color: '#000000',
    bold: true,
    clear: true,
  })

  checkNode(10)
}