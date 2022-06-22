#!/usr/bin/env node
const { exec } = require('child_process')

const dirName = process.argv[2]

const cb = (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
}

exec(`mkdir -p ${dirName}`, cb)
