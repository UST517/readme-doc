'use strict'

let program  = load('commander');
let pkg		 = load('../package.json');

program
	.version(pkg.version);

program.on('--help', function() {
    console.log('       -r, --routerPath  path of your route file');
    console.log('       -e, --errorPath   path of your exception file');
    console.log('       -m, --modulePath  path of your database modules file');
  });

module.exports = program;