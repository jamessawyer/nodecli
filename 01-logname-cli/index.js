#!/usr/bin/env node
const welcome = require('cli-welcome')
const chalk = require('chalk')
const pkg = require('./package.json')

const log = console.log
const twitter = chalk.hex(`#1da1f2`).bold.inverse
const github = chalk.hex(`#6cc644`).bold.inverse
const blog = chalk.hex(`#6937ff`).bold.inverse
const dimAndUnderline = chalk.dim.underline
const italic = chalk.italic

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

log(`${chalk.bold.bgBlue(' Luka Luka ')}

  ${italic(`I'm following the setup instructions for this mobile javascript debugger here. FYI, I'm using Windows XP SP2 32-bit. Please understand I am new to using git, node.js, and npm.
  Now, I'm stuck on this step`)}

  🐦 ${twitter(` Twitter `)}: ${dimAndUnderline(`https://www.twitter.com/jamessawyer`)}
  📖 ${github(` GitHub `)}: ${dimAndUnderline(`https://www.github.com/jamessawyer`)}
  😎 ${blog(` Blog `)}: ${dimAndUnderline(`https://jamessawyer.com`)}
`)
