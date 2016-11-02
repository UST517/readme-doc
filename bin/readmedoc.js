#!/usr/bin/env node

'use strict';

var readmedoc   = require('../lib');
var option     = load('../cli/parse').parse(process.argv);
if(option.args.length === 0) option.help();