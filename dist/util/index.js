'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash.camelcase');

var _lodash2 = _interopRequireDefault(_lodash);

var _module = require('../templates/module');

var _controller = require('../templates/controller');

var _component = require('../templates/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createDir = function _createDir(nameDir) {
  _shelljs2.default.mkdir('-p', nameDir.toLowerCase());
};

var _crearFile = function _crearFile(nameFile, templateFile) {
  console.log('creating ' + nameFile + ' file...');
  _fs2.default.writeFile(nameFile, templateFile, function (err) {
    if (err) throw err;
  });
};

var _getTamplate = function _getTamplate(item, arg) {
  if (item == 'module.js') return (0, _module.moduleTemplate)((0, _lodash2.default)(arg));

  if (item == 'component.js') return (0, _component.componentTemplate)((0, _lodash2.default)(arg));

  if (item == 'controller.js') return (0, _controller.controllerTemplate)((0, _lodash2.default)(arg));

  if (item == 'tpl.html') return '<h1>Component ' + (0, _lodash2.default)(arg) + '</h1>';
};

var util = {
  createDir: _createDir,
  crearFile: _crearFile,
  getTamplate: _getTamplate

};

exports.default = util;