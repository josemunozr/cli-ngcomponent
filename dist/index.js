#!/usr/bin/env node
'use strict';

var _optimist = require('optimist');

var _optimist2 = _interopRequireDefault(_optimist);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = _optimist2.default.usage('Create files necessary for a component\nUsage : ngcomponent [-c|-d|--help]').default('c', 'test').alias('c', 'create').alias('d', 'dir').describe('c', 'Create files').describe('d', 'Create a directory').describe('help', 'Get help to use CLI').argv;

if (args._.length == 0) {
  if (args.c == true) {
    args.c = 'test';
  }

  if (args.help) {
    console.log(_optimist2.default.help());
  } else {
    generateFiles('module.js', 'component.js', 'controller.js', 'tpl.html');
  }
} else {
  console.log(new Error('Add necessary params'));
}

function generateFiles() {
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