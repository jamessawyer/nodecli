#!/usr/bin/env node

/**
 * 04-cli-todo
 * CLI to manage todos anywhere
 *
 * @author james sawyer <https://github.com/jamessawyer>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
