const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')
function run() {
  /*
    get into the directory of this file
    execute "npm init y" which will unlock npm command in the dir to download require gha custom JS action requirements
    npm install @actions/core @actions/github @actions/exec
  */

    // 1) Get some input values
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: false});
    const distFolder = core.getInput('dist-folder', {required: true});

    //2) Upload the files
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`) // executes the passed command as bash on the runner
    
    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`
    core.setOuput('website-url', websiteUrl) // set output
    core.notice('Hello from my custom JavaScript action'); // prints the message to log in GHA
}

run();