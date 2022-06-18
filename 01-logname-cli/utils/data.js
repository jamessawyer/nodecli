const chalk = require('chalk')

const twitter = chalk.hex(`#1da1f2`).bold.inverse
const github = chalk.hex(`#6cc644`).bold.inverse
const blog = chalk.hex(`#6937ff`).bold.inverse
const dimAndUnderline = chalk.dim.underline
const italic = chalk.italic
const bgBlue = chalk.bold.bgBlue


const bio = `
  ${italic(`I'm following the setup instructions for this mobile javascript debugger here. FYI, I'm using Windows XP SP2 32-bit. Please understand I am new to using git, node.js, and npm.
  Now, I'm stuck on this step`)}
`

const social = `
🐦 ${twitter(` Twitter `)}: ${dimAndUnderline(`https://www.twitter.com/jamessawyer`)}
📖 ${github(` GitHub `)}: ${dimAndUnderline(`https://www.github.com/jamessawyer`)}
😎 ${blog(` Blog `)}: ${dimAndUnderline(`https://jamessawyer.com`)}
`

const ad = `Check out my https://NodeCLI.com course`

module.exports = {
  bio,
  social,
  ad
}
