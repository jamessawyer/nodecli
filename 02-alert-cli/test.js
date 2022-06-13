const alert = require('./index')

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
	msg: 'Something goes wrong!'
})
