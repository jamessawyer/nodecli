const axios = require('axios')
const handleError = require('cli-handle-error')
const to = require('await-to-js').default

const gh_api = 'https://api.github.com/users/jamessawyer'

module.exports = async () => {
  const [err, res] = await to(axios.get(gh_api))

  // handleError(heading = `ERROR: `, err, displayError = true, exit = true)
  handleError('接口调用失败:', err, true, true)

  console.log(`
    GitHub Followers: ${res.data.followers}
  `)
}
