const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')
function run() {
  /*
    get into the directory of this file
    execute "npm init y" which will unlock npm command in the dir to download require gha custom JS action requirements
    npm install @actions/core @actions/github @actions/exec
  */

  core.notice('Hello from my custom JavaScript action') // prints the message to log in GHA
}

run();