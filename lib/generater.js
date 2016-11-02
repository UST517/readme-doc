'use strict';
const fs     = load('fs');
const path   = load('path');
const logger = load('/lib/utils/log').get('cli');

let generator = {
    init : ()=>{
        let readmeConfig = fs.readFileSync( path.join( __dirname, '/.README.template' ) );
        fs.writeFileSync(
            path.join( process.cwd(), 'README.template' ), 
            readmeConfig 
        );

        console.log( `Successfully created .README.template file in ${process.cwd()}` );
    },
    gen : (option)=>{
        if ( !fs.existsSync( path.join( process.cwd(), 'README.template' ) ) ) {
            console.log('Did not find the template file , you should init first : $ readmedoc init');
            throw new Error('template file not found');
        }
        console.log('开始生成');
        
    }
}

module.exports = generator;