#!/usr/bin/env node

'use strict';

var readmedoc   = require('../lib');
var option     = load('../cli/parse').parse(process.argv);

readmedoc.gen(option);