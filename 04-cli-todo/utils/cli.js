const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `清空console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `不清空console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `打印调试信息`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `打印版本信息`
	}
};

const commands = {
	help: { desc: `打印帮助信息` },
	view: { desc: `查看所有的todos` },
	ls: { desc: `查看所有的todos` },
	add: { desc: `添加todo` },
	remove: { desc: `移除todos，可多选` },
	del: { desc: `移除todos，可多选` },
};

const helpText = meowHelp({
	name: `todo`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
