#!/usr/bin/env node
'use strict';

var _optimist = require('optimist');

var _optimist2 = _interopRequireDefault(_optimist);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _module = require('./app/templates/module');

var _controller = require('./app/templates/controller');

var _component = require('./app/templates/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = _optimist2.default.usage('Create files necessary for a component\nUsage : ngcomponent [-c|-d|--help]').default('c', 'test').alias('c', 'create').alias('d', 'dir')
// .alias('h', 'help')
.describe('c', 'Create files').describe('d', 'Create a directory').describe('help', 'Get help to use CLI').argv;

if (args.help) {
  console.log(_optimist2.default.help());
} else {
  if (args.d) {
    createDir(args.c);
  }
  createFiles('module.js', 'component.js', 'controller.js', 'tpl.html');
}

function createFiles() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  params.map(function (item, i) {
    var file = '';

    file = args.c + '.' + item;

    if (args.dir) {
      file = args.c + '/' + file;
    }

    crearFile(file, getTamplate(item, args.c));
  });
}

function getTamplate(item, arg) {
  if (item == 'module') return (0, _module.moduleTemplate)(arg);

  if (item == 'component') return (0, _component.componentTemplate)(arg);

  if (item == 'controller') return (0, _controller.controllerTemplate)(arg);
}

function createDir(nameDir) {
  _shelljs2.default.mkdir('-p', nameDir);
}

function crearFile(nameFile, templateFile) {
  console.log('creating ' + nameFile + ' file...');
  _fs2.default.writeFile(nameFile, templateFile, function (err) {
    if (err) throw err;
  });
}
