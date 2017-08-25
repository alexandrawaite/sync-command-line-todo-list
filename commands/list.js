const fs = require('fs')
const path = require('path')
const taskData = path.resolve(__dirname, '../tasks.json')


const list = () => {
  const taskHolder = JSON.parse(fs.readFileSync(taskData))

  if (!fs.existsSync(taskData)) {
    console.log("ID", "Description")
    console.log("--", "-----------")
    console.log("\nYou have 0 tasks")
  } else {
    console.log("ID", "Description")
    console.log("--", "-----------")
    taskHolder.storage.forEach(task => console.log(task.id, task.name))
    console.log(`\nYou have ${taskHolder.taskIds} tasks`)
  }
}

module.exports = list