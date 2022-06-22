#!/usr/bin/env node

const execa = require('execa')

const dirName = process.argv[2]

execa('mkdir', ['-p', dirName])
