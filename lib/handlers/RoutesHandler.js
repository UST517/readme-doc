'use strict'

const fs = load( 'fs' );
const path = load('path');
const Regex = load('regexper.js');
const sprintf = require('sprintf');


function handle(tmpContent){
    let routesTagRegex = /<!-\s*routes\s*([^-\s]+)\s*->/;

    let routesFilePath = routesTagRegex.exec(tmpContent)[1];

    let content = fs.readFileSync(path.join(process.cwd(),routesFilePath),'utf8');

    let routes = [];
    let title = '\n# Routes\n';
    let RoutesContent = '';

    let match ;
    let routeAreaRex = /\/\*+\s*(\S+)\s*\*+\/(?:(?!\/\*\*+)[\s\S])+/ig;

    while(match=routeAreaRex.exec(content)){
        routes.push(match[0]);
    }
    for(let route of routes){
        let Title = /\*+\s*(\S+)\s*\*+/.exec(route)[1];
        let routeStr=`\n\n# ***** ${Title} *****\n`;
        let routematch;
        let routeRegex = /(\/\*[^*]+\*\/\s*)?router\.(\s*\s*[^()]+)\(\s*'([^']+)/g;
        while(routematch=routeRegex.exec(route)){
            let Msg = routematch[1];
            let Method = routematch[2].toUpperCase();
            let Path  = routematch[3];
            routeStr = routeStr +  sprintf('\n\#\#\#\# %1$s  %2$s  \n``` \n %3$s\n```',
                Method,
                Path,
                Msg?Msg:''
            );
        }

        RoutesContent = RoutesContent + routeStr;
    }
    
    return tmpContent.replace(routesTagRegex,RoutesContent)

}

module.exports = handle