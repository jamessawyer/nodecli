#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkg = require('./package.json')

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

console.log(`
  luka

  I'm following the setup instructions for this mobile javascript debugger here. FYI, I'm using Windows XP SP2 32-bit. Please understand I am new to using git, node.js, and npm.
  Now, I'm stuck on this step

  🐦 Twitter: https://www.twitter.com/jamessawyer
  📖 Github: https://www.github.com/jamessawyer
  😎 Blog: https://jamessawyer.com
`)
