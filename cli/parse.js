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

program.on('--help', function() {
    console.log('   -r, --routerPath  path of your route file');
    console.log('   -e, --errorPath   path of your exception file');
    console.log('   -m, --modulePath  path of your database modules directory');
  });

module.exports = program;