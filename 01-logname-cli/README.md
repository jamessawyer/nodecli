it's a good cli to show!

you can use `npm link` make cli local, then type `luka` in bash to run it.

if you upload the package to npm registry, you can:

```bash
npx luka
```

获取CLI命令信息：
```bash
npx luka help
```

options 参数：
```
--bio                    Print the bio info (DEFAULT: true)
--no-bio                 Print the bio info
--social                 Print the social info (DEFAULT: true)
--no-social              Don't print the social info
--ad                     Print the ad info (DEFAULT: true)
--no-ad                  Don't print the ad info
--clear                  Clear the console (DEFAULT: true)
--no-clear               Don't clear the console
-m, --minimal            Print minimal info (DEFAULT: false)
-d, --debug              Print debug info
-v, --version            Print the version
```
🌰示例：
```bash
# 不显示ad 显示调试信息
luka --no-ad -d

# 打印版本信息
luka -v

# 不清空终端屏幕
luka --no-clear
```

一些CLI辅助框架：
- [meow](https://www.npmjs.com/package/meow)
- [oclif](https://www.npmjs.com/package/oclif)
- [commander](https://www.npmjs.com/package/commander)
- [sade](https://www.npmjs.com/package/sade)
- [gluegun](https://www.npmjs.com/package/gluegun)
- [ink react](https://www.npmjs.com/package/ink)
- [yargs](https://www.npmjs.com/package/yargs)
- [arg by vercel](https://www.npmjs.com/package/arg)
- [cac](https://www.npmjs.com/package/cac)