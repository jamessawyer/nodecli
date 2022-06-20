#!/usr/bin/env node
const alert = require('cli-alerts')
const init = require('./utils/init')
const data = require('./utils/data')
const stats = require('./utils/stats')
const cli = require('./utils/cli')
const debug = require('./utils/debug')

const log = console.log
const input = cli.input
const flags = cli.flags

module.exports = (async () => {
  init(flags.minimal, flags.clear)

  // luka help 显示帮助信息
  input.includes('help') && cli.showHelp(0)
  
  flags.bio && log(data.bio)
  flags.social && log(data.social)
  flags.ad && alert({ type: 'info', msg: data.ad })

  stats()

  flags.debug && debug(cli)

})()