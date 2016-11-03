'use strict';
const fs     = load('fs');
const path   = load('path');
const routesHandler = load('./handlers/RoutesHandler');
const exceptionHandler = load('./handlers/ExceptionHandler');
const modelsHandler = load('./handlers/ModelsHandler');

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

        let tmpContent = fs.readFileSync( path.join( process.cwd(), 'README.template' ) , 'utf8');
        
        if(/<!-\s*errors\s*[^-\s]+\s*->/.test(tmpContent)){
            tmpContent = exceptionHandler(tmpContent);
        }

        if(/<!-\s*models\s*[^-\s]+\s*->/.test(tmpContent)){
            //tmpContent = modelsHandler(tmpContent);
        }

        if(/<!-\s*routes\s*[^-\s]+\s*->/.test(tmpContent)){
            tmpContent =  routesHandler(tmpContent);
        }

        fs.writeFileSync(
            path.join( process.cwd(), 'README.md' ), 
            tmpContent 
        );

        console.log('完毕');
    }
}

module.exports = generator;