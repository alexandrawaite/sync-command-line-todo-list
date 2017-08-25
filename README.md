# Synchronous Command Line Todo list

## Specs

* Your command should be called `tasks`
* The `tasks` command file should have a shebang pointing to `node`
* The `tasks` command file should have execute permissions
* Tasks are persisted to a `json` file using `fs.readFileSync` and `fs.writeFileSync`
* The `list` command is implemented in `./commands/list.js`
* The `add` command is implemented in `./commands/add.js`
* The `complete` command is implemented in `./commands/complete.js`
* The `delete` command is implemented in `./commands/delete.js`
* Add tests using Mocha and Chai for all functions
* User receives an error message if they enter an invalid command
* Your program should create the `tasks.json` if the file doesn't exist
* `tasks.json` is ignored and not checked into your Git repository