const axios = require('axios')
const handleError = require('cli-handle-error')
const to = require('await-to-js').default
const ora = require('ora')
const { green, yellow } = require('chalk')

const gh_api = 'https://api.github.com/users/jamessawyer'

const spinner = ora({ text: '' })

module.exports = async () => {
  spinner.start(yellow('Followers') + ' Fetching...')
  const [err, res] = await to(axios.get(gh_api))

  // handleError(heading = `ERROR: `, err, displayError = true, exit = true)
  handleError('接口调用失败:', err, true, true)

  // spinner.stop()
  spinner.succeed(green('succeed'))

  console.log(`
    GitHub Followers: ${res.data.followers}
  `)
}
