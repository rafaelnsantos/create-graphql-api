#!/usr/bin/env node

const prog = require('caporal');
const createCmd = require('./lib/create');

prog
  .version('1.0.0')
  .argument('<folder>', 'Folder to create')
  .option('--template <template>', 'Template')
  .action(createCmd);

prog.parse(process.argv);
