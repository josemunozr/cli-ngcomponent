#!/usr/bin/env node
'use strict';

var _optimist = require('optimist');

var _optimist2 = _interopRequireDefault(_optimist);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = _optimist2.default.usage('Create files necessary for a component\nUsage : ngcomponent [-c|-d|--help]').default('c', 'test').alias('c', 'create').alias('d', 'dir').describe('c', 'Create files').describe('d', 'Create a directory').describe('help', 'Get help to use CLI').argv;
// import shell from 'shelljs'
// import fs from 'fs'
// import camelcase from 'lodash.camelcase'
// import {moduleTemplate} from './templates/module'
// import {controllerTemplate} from './templates/controller'
// import {componentTemplate} from './templates/component'


if (args._.length == 0) {
  if (args.c == true) {
    args.c = 'test';
  }

  if (args.help) {
    console.log(_optimist2.default.help());
  } else {
    createFiles('module.js', 'component.js', 'controller.js', 'tpl.html');
  }
} else {
  console.log(new Error('Add necessary params'));
}

function createFiles() {
  if (args.d) _util2.default.createDir(args.c);

  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  params.map(function (item, i) {
    var file = '';

    file = args.c + '.' + item;

    if (args.dir) {
      file = args.c.toLowerCase() + '/' + file;
    }
    _util2.default.crearFile(file.toLowerCase(), _util2.default.getTamplate(item, args.c));
  });
}

// function getTamplate(item, arg) {
//   if (item == 'module.js')
//     return moduleTemplate(camelcase(arg))
//
//   if (item == 'component.js')
//     return componentTemplate(camelcase(arg))
//
//   if (item == 'controller.js')
//     return controllerTemplate(camelcase(arg))
//
//   if (item == 'tpl.html')
//     return `<h1>Component ${camelcase(arg)}</h1>`
//
// }
//
// function createDir(nameDir) {
//   shell.mkdir('-p', nameDir.toLowerCase())
// }
//
// function crearFile(nameFile, templateFile) {
//   console.log(`creating ${nameFile} file...`)
//   fs.writeFile(nameFile, templateFile, (err) => {
//     if (err) throw err
//   })
// }