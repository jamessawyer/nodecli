const chalk = require('chalk')
const sym = require('log-symbols')

const green = chalk.green
const greenI = chalk.green.inverse
const red = chalk.red
const redI = chalk.red.bold.inverse
const orange = chalk.keyword('orange')
const orangeI = chalk.keyword('orange').inverse
const blue = chalk.blue
const blueI = chalk.blue.inverse

const successIcon = sym.success
const warningIcon = sym.warning
const infoIcon = sym.info
const errorIcon = sym.error

module.exports = options => {
	const defaultOptions = {
		type: 'error',
		msg: 'You forgot to define all options',
    name:  ''
	}

	const opts = {...defaultOptions, ...options}
	const {type, msg, name} = opts
  const printName = name ? name : type.toUpperCase()

	if (type === 'success') {
		console.log(`\n${successIcon} ${greenI(` ${printName} `)} ${green(msg)}\n`)
	}

	if (type === 'warning') {
		console.log(`\n${warningIcon} ${orangeI(` ${printName} `)} ${orange(msg)}\n`)
	}

	if (type === 'info') {
		console.log(`\n${infoIcon} ${blueI(` ${printName} `)} ${blue(msg)}\n`)
	}

	if (type === 'error') {
		console.log(`\n${errorIcon} ${redI(` ${printName} `)} ${red(msg)}\n`)
	}
}
