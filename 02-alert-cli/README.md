打印 `success | warning | info | error` 4种类型提示
示例：
```js
const alert = require('cli-alert')

alert()

alert({
  type: 'success',
  msg: 'All done!',
  name: 'DONE'
})

alert({
  type: 'warning',
  msg: "You did't add something!"
})

alert({
  type: 'info',
  msg: 'You are best!'
})

alert({
  type: 'error',
  msg: 'Congrate You'
})
```

![cli-alerts_screenshot](./imgs/cli-alerts_screenshot.jpg)

## API

`alert(options)`

default options:
```js
{
  type: 'error',
  msg: 'You forgot to define all options',
  name:  ''
}
```

`options` 定义：
```typescript
{
  type: 'success' | 'warning' | 'info' | 'error',
  msg: string,
  name: string
}
```
