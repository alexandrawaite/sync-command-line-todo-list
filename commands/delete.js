const fs = require('fs')
const path = require('path')
const taskStoragePath = path.resolve(__dirname, '../tasks.json')

const remove = task => {
  const taskHolder = JSON.parse(fs.readFileSync(taskStoragePath))
  taskHolder.storage.forEach(obj => {
    if (obj.id == task) {
      console.log(`Deleted task ${task}: ${obj.name}`)
    }
  })

  const index = taskHolder.storage.findIndex(obj => {
     return obj.id == task;
  })
  if (index !== -1) {
    taskHolder.storage.splice(index, 1)
  }

  taskHolder.taskIds--

  const stringifiedTaskHolder = JSON.stringify(taskHolder)

  fs.writeFileSync(taskStoragePath, stringifiedTaskHolder)
}

module.exports = remove