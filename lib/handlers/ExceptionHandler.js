'use strict'

const fs = load( 'fs' );
const path = load('path');
const Regex = load('regexper.js');

function handle(tmpContent){
    let title = '\n#### error code table:\n';

    let errorTagRegex = /<!-\s*errors\s*([^-\s]+)\s*->/;
    let errorCodeRegex = new Regex('(\\d+)[^,]+?[\'\"]([^\"\']+)','ig');

    let errorFilePath = errorTagRegex.exec(tmpContent)[1]

    let content = fs.readFileSync(path.join(process.cwd(),errorFilePath),'utf8');

    let newContent = title + '\n| **code** | **detial** | \n|:---|:---:|\n';

    for(let match of errorCodeRegex.matches(content)){
        newContent += `| ${match.groups[0]} | ${match.groups[1]} |\n`
    }

    return tmpContent.replace(errorTagRegex,newContent)
    
}

module.exports = handle