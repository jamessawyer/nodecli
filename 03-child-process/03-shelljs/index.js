#!/usr/bin/env node

const { exec, mkdir } = require('shelljs')

const dirName = process.argv[2]

// 方式1
// exec(`mkdir -p ${dirName}`)

// 方式2
mkdir('-p', dirName)
