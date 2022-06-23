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

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;


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
		const allTodos = db.get('todos').value()
		console.log('allTodos: ', allTodos);
	}


	debug && log(flags);
})();
