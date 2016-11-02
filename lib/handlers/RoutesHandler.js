'use strict'

const fs = load( 'fs' );
const path = load('path');
const sprintf = load('sprintf');

function handle(tmpContent){
    let title = '\n##### error code table:\n';

    let content = fs.readFileSync(path.join(process.cwd(),'/libs/exception.js'),'utf8');
    let table = /\{[^}]+\}/igm.exec(content)[0];

    moduleContent = moduleContent + "\n```\n" + table + "\n```\n";

    let modelsAreRex = /\n##### error code table:\n[^{]+\{[^}]+\}[^`]+```|$/i;
    let readme = fs.readFileSync(path.join(process.cwd(),'/README.md'),'utf8');
    readme = readme.replace(modelsAreRex , `${moduleContent}`)

    fs.writeFileSync(path.join(process.cwd(),'/README.md'),readme,'utf8');
}

module.exports = handle