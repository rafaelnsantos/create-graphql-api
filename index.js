#!/usr/bin/env node

const prog = require('caporal');
const createCmd = require('./lib/create');

prog
  .version('1.0.0')
  .argument('<folder>', 'Folder to create')
  .action(createCmd);

prog.parse(process.argv);

