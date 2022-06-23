const { Input } = require('enquirer')
const to = require('await-to-js').default
const handleError = require('cli-handle-error')
const shouldCancel = require('cli-should-cancel')

module.exports = async ({ message }) => {
  const [err, response] = await to(
    new Input({
      message,
      validate(value) {
        return !value ? '请输入todo内容' : true
      }
    })
    .on('cancel', () => shouldCancel())
    .run()
  )

  handleError('Input: ', err)

  return response
}