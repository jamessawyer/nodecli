#!/usr/bin/env node
const chalk = require('chalk')
const sym = require('log-symbols')
const init = require('./utils/init')

const log = console.log
const twitter = chalk.hex(`#1da1f2`).bold.inverse
const github = chalk.hex(`#6cc644`).bold.inverse
const blog = chalk.hex(`#6937ff`).bold.inverse
const dimAndUnderline = chalk.dim.underline
const italic = chalk.italic
const bgBlue = chalk.bold.bgBlue

// alerts
const success = chalk.green
const info = chalk.blue
const warning = chalk.keyword('orange')
const error = chalk.red.bold

// icons
const successIcon = sym.success
const infoIcon = sym.info
const warningIcon = sym.warning
const errorIcon = sym.error

module.exports = (async () => {
  init()

  log(`${bgBlue(' Luka Luka ')}

    ${italic(`I'm following the setup instructions for this mobile javascript debugger here. FYI, I'm using Windows XP SP2 32-bit. Please understand I am new to using git, node.js, and npm.
    Now, I'm stuck on this step`)}

    🐦 ${twitter(` Twitter `)}: ${dimAndUnderline(`https://www.twitter.com/jamessawyer`)}
    📖 ${github(` GitHub `)}: ${dimAndUnderline(`https://www.github.com/jamessawyer`)}
    😎 ${blog(` Blog `)}: ${dimAndUnderline(`https://jamessawyer.com`)}
  `)


  log(`
    ${successIcon} ${success(' SUCCESS ')} Thanks for checking out my CLI
    ${infoIcon} ${info(' INFO ')} I'm creating a course on NodeCLI.com
    ${warningIcon} ${warning(' WARNING ')} Please don't copy me. Be Yourself
    ${errorIcon} ${error(' ERROR ')} I'm on vacation. Contact me next week.
  `)
})()