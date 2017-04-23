#!/usr/bin/env node
'use strict';

var _optimist = require('optimist');

var _optimist2 = _interopRequireDefault(_optimist);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash.camelcase');

var _lodash2 = _interopRequireDefault(_lodash);

var _module = require('./templates/module');

var _controller = require('./templates/controller');

var _component = require('./templates/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = _optimist2.default.usage('Create files necessary for a component\nUsage : ngcomponent [-c|-d|--help]').default('c', 'test').alias('c', 'create').alias('d', 'dir').describe('c', 'Create files').describe('d', 'Create a directory').describe('help', 'Get help to use CLI').argv;

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
  if (args.d) createDir(args.c);

  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  params.map(function (item, i) {
    var file = '';

    file = args.c + '.' + item;

    if (args.dir) {
      file = args.c.toLowerCase() + '/' + file;
    }
    crearFile(file.toLowerCase(), getTamplate(item, args.c));
  });
}

function getTamplate(item, arg) {
  if (item == 'module.js') return (0, _module.moduleTemplate)((0, _lodash2.default)(arg));

  if (item == 'component.js') return (0, _component.componentTemplate)((0, _lodash2.default)(arg));

  if (item == 'controller.js') return (0, _controller.controllerTemplate)((0, _lodash2.default)(arg));

  if (item == 'tpl.html') return '<h1>Component ' + (0, _lodash2.default)(arg) + '</h1>';
}

function createDir(nameDir) {
  _shelljs2.default.mkdir('-p', nameDir.toLowerCase());
}

function crearFile(nameFile, templateFile) {
  console.log('creating ' + nameFile + ' file...');
  _fs2.default.writeFile(nameFile, templateFile, function (err) {
    if (err) throw err;
  });
}