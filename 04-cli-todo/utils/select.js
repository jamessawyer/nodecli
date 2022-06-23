const { MultiSelect } = require('enquirer')
const { dim } = require('chalk')
const to = require('await-to-js').default
const handleError = require('cli-handle-error')
const shouldCancel = require('cli-should-cancel')

module.exports = async ({ message, choices }) => {
  const [err, response] = await to(
    new MultiSelect({
      message,
      choices,
      hint: dim(`\n使用空格键（Space）选择 & 回车键（Enter）提交选择(可多选)\n`),
      validate(value) {
        return value.lenght === 0 ? '请至少选择一个选项' : true
      }
    })
    .on('cancel', () => shouldCancel())
    .run()
  )

  handleError('Input: ', err)

  return response
}