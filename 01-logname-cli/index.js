#!/usr/bin/env node
const alert = require('cli-alerts')
const init = require('./utils/init')
const data = require('./utils/data')
const stats = require('./utils/stats')
const posts = require('./utils/posts')
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

  // stats()
  // 是否获取文章
  // luka -p
  flags.posts && alert({ type: 'info', msg: data.blogs, name: data.blogName })
  flags.posts && (await posts())

  flags.debug && debug(cli)

})()