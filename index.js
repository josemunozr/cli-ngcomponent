#!/usr/bin/env node
'use strict';

var _optimist = require('optimist');

var _optimist2 = _interopRequireDefault(_optimist);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _module = require('./app/templates/module');

var _controller = require('./app/templates/controller');

var _component = require('./app/templates/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argument = _optimist2.default.usage('Usage: ngcomponent -c [nameComponet] -dir').demand(['c']).argv;

console.log('creating component...');

// if(argument.dir){
//   //create directory
// }

createComponent('module', 'component', 'controller');

function createComponent() {
  var nameFile = void 0;
  var tpl = void 0;

  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  params.map(function (item, i) {
    nameFile = argument.c + '.' + item;
    tpl = getTamplate(item, argument.c);
    _fs2.default.writeFile(nameFile + '.js', tpl, function (err) {
      if (err) throw err;
    });
  });

  _fs2.default.writeFile(argument.c + '.tpl.html', '<h1>Component ' + argument.c + '</h1>', function (err) {
    if (err) throw err;
  });
}

function getTamplate(item, arg) {
  if (item == 'module') return (0, _module.moduleTemplate)(arg);

  if (item == 'component') return (0, _component.componentTemplate)(arg);

  if (item == 'controller') return (0, _controller.controllerTemplate)(arg);
}
