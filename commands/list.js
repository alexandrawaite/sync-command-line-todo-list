const fs = require('fs')
const path = require('path')
const taskStoragePath = path.resolve(__dirname, '../tasks.json')

function list() {
  const taskHolder = JSON.parse(fs.readFileSync(taskStoragePath))
  if (!fs.existsSync(taskStoragePath)) {
    console.log("ID", "Description")
    console.log("--", "-----------")
    console.log("\nYou have 0 tasks")
  } else {
    console.log("ID", "Description")
    console.log("--", "-----------")
    console.log(taskHolder.storage[taskHolder.storage.length - 1].id, taskHolder.storage[taskHolder.storage.length - 1].name)
    console.log("\n\nYou have " + taskHolder.taskIds + " tasks")
  }
}

module.exports = list