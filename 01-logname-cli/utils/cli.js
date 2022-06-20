const meow = require('meow')
const { green, yellow, cyan, dim } = require('chalk')

const helpText = `
  Usage
    ${green('npx luka')} ${yellow('[--options]')} ${cyan('<commands>')}

  Options
    ${yellow('--bio')}                    Print the bio info ${dim('(DEFAULT: true)')}
    ${yellow('--no-bio')}                 Print the bio info
    ${yellow('--social')}                 Print the social info ${dim('(DEFAULT: true)')}
    ${yellow('--no-social')}              Don't print the social info
    ${yellow('--ad')}                     Print the ad info ${dim('(DEFAULT: true)')}
    ${yellow('--no-ad')}                  Don't print the ad info
    ${yellow('--clear')}                  Clear the console ${dim('(DEFAULT: true)')}
    ${yellow('--no-clear')}               Don't clear the console
    ${yellow('-p')}, ${yellow('--posts')}              Fetch last 10 posts ${dim('(DEFAULT: false)')}
    ${yellow('-m')}, ${yellow('--minimal')}            Print minimal info ${dim('(DEFAULT: false)')}
    ${yellow('-d')}, ${yellow('--debug')}              Print debug info
    ${yellow('-v')}, ${yellow('--version')}            Print the version

  Commands
    ${cyan('help')}                     Print CLI help info

  Examples
    ${green('npx luka')} ${yellow('--no-social')}
    ${green('npx luka')} ${yellow('--no-ad')}
    ${green('npx luka')} ${cyan('help')}

`
const options = {
  inferType: true,  // 推断类型  比如输入 luka '5'， 自动推断为 number 类型
  handleRejection: false, // 如果自己已经进行了 unhandle-reject处理 则可以在这里将meow提供的unhandle rejection处理关闭
  flags: {
    minimal: {
      type: 'boolean',
      alias: 'm'
    },
    bio: {
      type: 'boolean',
      default: true,
    },
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
    posts: {
      type: 'boolean',
      default: false,
      alias: 'p',
    },
    clear: {
      type: 'boolean',
      default: true,
    },
    debug: {
      // 不写 default 默认是 false 因此这里省略了 default: false
      type: 'boolean',
      alias: 'd',
    },
    version: {
      // 直接定义这个字段即可， meow会打印版本信息
      // luka --version | luka -v 会打印当前cli版本
      type: 'boolean',
      default: false,
      alias: 'v',
    }
  }
}

module.exports =  meow(helpText, options)
