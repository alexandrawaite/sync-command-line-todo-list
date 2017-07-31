const fs = require('fs')
const path = require('path')
const taskStoragePath = path.resolve(__dirname, '../tasks.json')

// checks if tasks.json exists
function add(task) {
  if (!fs.existsSync(taskStoragePath)) {
    addTaskAndStorage(task)
  } else {
    addTask(task)
  }
}

function addTaskAndStorage(task) {
  const initTaskStorage = JSON.stringify({
    taskIds: 1,
    storage: [{id: 1, name: task, complete: false}],
  })

  fs.writeFileSync(taskStoragePath, initTaskStorage)
  console.log("Created task 1")
}

function addTask(task) {
  const taskHolder = JSON.parse(fs.readFileSync(taskStoragePath))
  const newTask = {id: taskHolder.storage.length + 1, name: task, complete: false}
  taskHolder["storage"].push(newTask)
  taskHolder.taskIds++
  const stringifiedTaskHolder = JSON.stringify(taskHolder)
  fs.writeFileSync(taskStoragePath, stringifiedTaskHolder)
  // we have to use the parsed object to read in the terminal, not the stringified object
  console.log("Created task", taskHolder.storage[taskHolder.storage.length - 1].id);
}

module.exports = add