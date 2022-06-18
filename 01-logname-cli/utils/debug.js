const alert = require('cli-alerts')

const log = console.log

module.exports = (cli) => {

  alert({ type: 'warning', msg: 'DEBUGGING INFO 👇'})
  log('input', cli.input)
  log('flags', cli.flags)
  log()
}
