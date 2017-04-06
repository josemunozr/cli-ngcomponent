#!/usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fs2.default.writeFile('message.txt', 'Hello Node.js', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
