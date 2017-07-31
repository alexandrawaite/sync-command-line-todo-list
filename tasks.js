#!/usr/bin/env nod
const add = require('./commands/add')
const list = require('./commands/list')
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
  case "delete":
  default:
    console.error('What sup with that weak ass command!!')
}