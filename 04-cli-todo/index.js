#!/usr/bin/env node

/**
 * 04-cli-todo
 * CLI to manage todos anywhere
 *
 * @author james sawyer <https://github.com/jamessawyer>
 */
const makeDir = require('make-dir')
const fs = require('fs')
const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
// const { green, red, yellow, dim, hex } = require('chalk')
const chalk = require('chalk')
const alert = require('cli-alerts') 

const init = require('./utils/init')
const cli = require('./utils/cli')
const log = require('./utils/log')
const ask = require('./utils/ask')

const input = cli.input
const flags = cli.flags
const { clear, debug } = flags


// 使用json存储数据
const dbTodos = path.join(process.cwd(), '.todo/todos.json')


module.exports = (async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	if (!fs.existsSync(dbTodos)) {
		// 不存在目录就创建目录
		await makeDir('.todo')

		// 切换到 .todo 目录
		process.chdir('.todo')

		// 写入文件
		fs.writeFileSync('todos.json', '{}')
	}

	const adapter = new FileSync(dbTodos)
	const db = low(adapter)
	// 默认写入 todos: [] 数据
	db.defaults({ todos: [] }).write()

	// 使用 view | ls 命令查看todos
	if (input.includes('view') || input.includes('ls')) {
		// 获取json文件中所有的todos
		const allTodos = db.get('todos').value() ?? []
		allTodos.forEach((todo, i) => {
			console.log(`${chalk.dim(`${++i}`)}: ${todo.title}`)
		})
		const count = allTodos.length
		console.log(`\n${chalk.hex('#fad000').inverse(' TOTAL ')}: ${chalk.green(count)}\n`);
	}

	// 使用 todo add 命令，添加todo
	if (input.includes('add')) {
		const whatTodo = await ask({ message: '添加一个todo' })

		// 写入到数据库
		db.get('todos').push({ title: whatTodo }).write()
		
		alert({
			type: 'success',
			name: 'ADDED',
			msg: 'todo添加成功'
		})
	}


	debug && log(flags);
})();
