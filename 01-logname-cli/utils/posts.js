const axios = require('axios')
const { dim, yellow, green } = require('chalk')
const ora  = require('ora')
const handleError = require('cli-handle-error')
const to = require('await-to-js').default

const spinner = ora({text: ''})

const repo_url = 'https://api.github.com/users/jamessawyer/repos'

module.exports = async () => {
  spinner.start(`${yellow('Fetching JamesSawyer\'s')} Repos...`)
  const [err, res] = await to(axios.get(repo_url))

  handleError('接口调用失败:', err, true, true)

  spinner.succeed(`${green('10 Repos below:')}`)

  const posts = res.data.slice(0, 10)
  posts.forEach(({ html_url, full_name}, index) => {
    console.log(`${dim(`#${index + 1}`)} ${full_name}`)
    console.log(`${dim(`${html_url}`)}`)
    console.log()
  })
}