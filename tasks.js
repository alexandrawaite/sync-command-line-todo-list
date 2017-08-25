#!/usr/bin/env node
const add = require('./commands/add')
const list = require('./commands/list')
const complete = require('./commands/complete')
const remove = require('./commands/delete')
const command = process.argv[2]
const task = process.argv[3]

switch (command) {
  case "add":
    add(task)
    break
  case "list":
    list()
    break
  case "complete":
    complete()
    break
  case "delete":
    remove(task)
    break
  default:
    console.error('What sup with that weak ass command!!')
}
