const fs = require('fs')
const path = require('path')
const taskData = path.resolve(__dirname, '../tasks.json')

// checks if tasks.json exists
const add = task => {
  if (!fs.existsSync(taskData)) {
    createTaskStorage(task)
  } else {
    addTask(task)
  }
}

// initializes task counter and task object, stringifies them and writes them to tasks.json
const createTaskStorage = task => {
  const initTaskStorage = JSON.stringify({
    taskIds: 1,
    storage: [{
      id: 1,
      name: task,
      complete: false
    }],
  })

  fs.writeFileSync(taskData, initTaskStorage)
  console.log("Created task 1")
}

// parses the tasks.json file, creates a new task object and pushes to the storage object
const addTask = task => {
  const taskHolder = JSON.parse(fs.readFileSync(taskData))

  const newTask = {
    id: taskHolder.storage.length + 1,
    name: task,
    complete: false
  }

  taskHolder["storage"].push(newTask)

  taskHolder.taskIds++

  const stringifiedTaskHolder = JSON.stringify(taskHolder)

  fs.writeFileSync(taskData, stringifiedTaskHolder)

  // we have to log the parsed object in the terminal, not the stringified object
  console.log(`Created task ${taskHolder.storage[taskHolder.storage.length - 1].id}`);
}

module.exports = add