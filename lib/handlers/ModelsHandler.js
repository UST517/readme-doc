'use strict'

const fs = load('fs')
const path = load('path')
const sprintf = load('sprintf')

function walk (root, filelist) {
  let dirList = fs.readdirSync(root)
  dirList.forEach((item) => {
    let name = root + '/' + item
    if (fs.statSync(name).isDirectory()) {
      walk(name, filelist)
    } else {
      if (path.extname(name) !== '') {
        filelist.push(name)
      }
    }
  })
}

function handle (tmpContent) {
  let modelsTagRegex = /<!-\s*models\s*([^-\s]+)\s*->/

  let modelsFilePath = modelsTagRegex.exec(tmpContent)[1]

  let files = []
  walk(path.join(process.cwd(), modelsFilePath), files)

  let moduleContent = '\n# Models\n'

  for (let file of files) {
    let content = fs.readFileSync(file, 'utf8')
    let collection = /,\s*\{\s*collection:\s*'([^']+)'(\,\s*[^:]+:\s*\S+\s*\}\s*\))\)/igm.exec(content)[1]
    content = content.replace(/,\s*\{\s*collection:\s*'([^']+)'(\,\s*[^:]+:\s*\S+\s*\}\s*\))\)/igm, '')

    content = content.replace(/new\s*[^(]+\(\s*/igm, '')
    content = content.replace(/module.exports\s*=/, collection + ' =')
    content = content.replace(/[^=]+=\s(?:load|require=)\([^\)]+\);/igm, '')
    let modelStr = sprintf('\n\n## %1$s  %2$s  \n##### Structure: \n```\n%3$s\n \n```\n',
            `1.${files.indexOf(file) + 1}`,
            collection,
            content
        )
    moduleContent = moduleContent + modelStr
  }

  return tmpContent.replace(modelsTagRegex, moduleContent)
}

module.exports = handle
