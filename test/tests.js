const expect = require('chai').expect
const add = require('../commands/add')
const list = require('../commands/list')
const remove = require('../commands/delete')
const complete = require('../commands/complete')
const tasks = require('../tasks')

describe('Command Line Todo List Tests', () => {
  describe('task commands', () => {
    it('user receives an error if they enter invalid command', () => {

    })
  })
  describe('add task function', () => {
    it('add function creates a tasks.json if the file doesn\'t exist', () => {

    })
    it('add function creates a task object', () => {

    })
  })
  describe('list tasks function', () => {
    it('list function returns incomplete tasks', () => {

    })
  })
  describe('delete task function', () => {
    it('delete function removes the task that correlates to the task id argument', () => {

    })
  })
  describe('complete task function', () => {
    it('complete function marks the \'complete\' property of the task object equal to the task id complete', () => {

    })
  })
})
