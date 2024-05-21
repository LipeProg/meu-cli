#!/usr/bin/env node

const { program } = require('commander');
const {trabalho, ola} = require('../commands/ola.js')

program
  .version('1.0.0')
  .description('Uma CLI avançada com múltiplos comandos');

program.addCommand(trabalho());
program.addCommand(ola());



program.parse(process.argv);