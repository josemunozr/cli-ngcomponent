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

var argument = _optimist2.default.usage('Usage: ngcomponent -c [nameComponet] --dir').demand(['c']).argv;

console.log('creating component...');

if (argument.dir) {
  createDir(argument.c);
}

createComponents('module.js', 'component.js', 'controller.js', 'tpl.html');

function createComponents() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  params.map(function (item, i) {
    var file = '';

    file = argument.c + '.' + item;

    if (argument.dir) {
      file = argument.c + '/' + file;
    }

    crearFile(file, getTamplate(item, argument.c));
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
  _fs2.default.writeFile(nameFile, templateFile, function (err) {
    if (err) throw err;
  });
}
