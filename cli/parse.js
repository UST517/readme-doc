'use strict'

let program   = load('commander');
let readmedoc = load('../lib');
let pkg		  = load('../package.json');

program
	.version(pkg.version);
    
program
    .command('init')
    .description('init template file')
    .action(readmedoc.init)


program
    .command('gen')
    .description('init template file')
    .action(readmedoc.gen)


module.exports = program;